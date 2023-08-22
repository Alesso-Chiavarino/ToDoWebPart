import * as React from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import styles from './ListTasks.module.scss';
import type { Task } from '../../types/Task';

interface ListTasksProps {
    tasksType: string;
    tasks: Task[];
    deleteTask: (id: number) => void;
    handleTaskStatus: (id: number, status: boolean) => void;
    tasksCounter: boolean;
}

export const ListTasks = ({ tasksType, tasks, deleteTask, handleTaskStatus, tasksCounter }: ListTasksProps) => {
    return (
        <div>
            {tasksCounter && <span className={styles.taskCounter}>Task Quantity: {tasks.length}</span>}
            <ul className={styles.tasksList}>
                {tasksType === 'Completed' ? (
                    tasks.map(task => task.completed && <TaskCard deleteTask={deleteTask} key={task.id} task={task} handleTaskStatus={handleTaskStatus} />)
                ) : tasksType === 'Incomplete' ? (
                    tasks.map(task => !task.completed && <TaskCard deleteTask={deleteTask} key={task.id} task={task} handleTaskStatus={handleTaskStatus} />)
                ) : (
                    tasks.map(task => <TaskCard deleteTask={deleteTask} key={task.id} task={task} handleTaskStatus={handleTaskStatus} />)
                )}
            </ul>
        </div>
    )
}