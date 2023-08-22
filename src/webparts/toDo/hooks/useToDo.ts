import { useState } from 'react'
import { INITIAL_TASK_VALUE, INITIAL_TASKS_VALUE } from '../consts/task.consts'
import type { HandleInputChangeEvent, HandleSubmitEvent } from '../types/Form.d'

export const useToDo = () => {

    const [tasks, setTasks] = useState(INITIAL_TASKS_VALUE)

    const [task, setTask] = useState(INITIAL_TASK_VALUE)

    const handleInputChange = (event: HandleInputChangeEvent) => {
        setTask({
            ...task,
            id: tasks.length + 1,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e: HandleSubmitEvent) => {
        e.preventDefault()
        setTasks([...tasks, task])
        setTask(INITIAL_TASK_VALUE)
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleTaskStatus = (id: number, status: boolean) => {
        //task.find no existe???
        const task = tasks.filter(task => task.id === id)[0]

        const updatedTask = {
            ...task,
            completed: status
        }

        const updatedTasks = tasks.map(task => task.id === id ? updatedTask : task)

        setTasks(updatedTasks)
    }

    return {
        tasks,
        task,
        handleInputChange,
        handleSubmit,
        deleteTask,
        handleTaskStatus
    }
}