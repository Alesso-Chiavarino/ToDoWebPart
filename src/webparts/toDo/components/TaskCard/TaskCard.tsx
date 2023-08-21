import styles from './TaskCard.module.scss'
import * as React from 'react'

interface TaskCardProps {
    task: {
        id: number,
        title: string,
        description: string,
        completed: boolean
    }
}

export const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <li className={styles['task-card']}>
            <h4 className={styles['task-card__title']}>{task.title}</h4>
            <p className={styles['task-card__description']}>{task.description}</p>
            <span>Completed: {task.completed ? 'Yes' : 'No'}</span>
        </li>
    )
}