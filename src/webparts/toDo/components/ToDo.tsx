import * as React from 'react';
import styles from './ToDo.module.scss';
import { IToDoProps } from './IToDoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useState, useEffect } from 'react'
import { TaskCard } from './TaskCard/TaskCard';

interface Task {
  id: number,
  title: string,
  description: string,
  completed: boolean
}


export const ToDo = ({ description, userDisplayName, tasksType }: IToDoProps) => {

  const INITIAL_TASKS_VALUE = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      completed: false
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      completed: true
    }
  ]

  const INITIAL_TASK_VALUE = {
    id: 0,
    title: '',
    description: '',
    completed: false
  }

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS_VALUE)
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const [task, setTask] = useState<Task>(INITIAL_TASK_VALUE)

  useEffect(() => {
    if (tasksType === 'Completed') {
      const filteredCompletedTasks = tasks.filter(task => task.completed)
      setCompletedTasks(filteredCompletedTasks)
    }
  }, [tasksType])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask(INITIAL_TASK_VALUE)
  }


  return (
    <section>
      <div>

        <h2>Hello {escape(userDisplayName)}!</h2>
        <h4>Welcome to ToDo Web part</h4>

        <div>Web part property value: <strong>{escape(description)}</strong></div>

        <div>
          <h3>Tasks</h3>

          <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={task.title} id="title" onChange={handleInputChange} />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={task.description} id="description" onChange={handleInputChange} />

            <label htmlFor="completed">Completed</label>
            <input type="checkbox" checked={task.completed} onChange={handleInputChange} name="completed" id="completed" />

            <button>Add Task</button>


          </form>

          <ul className={styles['tasks-list']}>
            {tasksType === 'Completed' ? (
              completedTasks.map(task => <TaskCard key={task.id} task={task} />)
            ) : tasksType === 'Incomplete' ? (
              tasks.map(task => !task.completed && <TaskCard key={task.id} task={task} />)
            ) : (
              tasks.map(task => <TaskCard key={task.id} task={task} />)
            )}
          </ul>

        </div>

      </div>
    </section>
  )
}
