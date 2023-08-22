import styles from './TaskCard.module.scss'
import * as React from 'react'
import { PrimaryButton } from 'office-ui-fabric-react'
import type { Task } from '../../types/Task'
import type { HandleTaskStatusEvent } from '../../types/Form'
import { Checkbox } from '@fluentui/react/lib/Checkbox'

interface TaskCardProps {
    task: Task,
    deleteTask: (id: number) => void
    handleTaskStatus: (id: number, status: boolean) => void
}

export const TaskCard = ({ task, deleteTask, handleTaskStatus }: TaskCardProps) => {
    return (
        <li className={styles.taskCard}>
            <div className={styles.taskCard__header}>
                <h4 className={styles.taskCard__title}>{task.title}</h4>
                <Checkbox checked={task.completed} onChange={(e: HandleTaskStatusEvent) => handleTaskStatus(task.id, e.target.checked)} />
            </div>
            <hr className={styles.taskCard__hr} />
            <p className={styles.taskCard__description}>{task.description}</p>
            <PrimaryButton text="Delete" onClick={() => deleteTask(task.id)} />
        </li>
    )
}