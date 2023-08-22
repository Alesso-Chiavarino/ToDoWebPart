import * as React from 'react';
import { TextField, Checkbox, PrimaryButton } from '@fluentui/react/lib';
import styles from './Form.module.scss';
import type { Task } from '../../types/Task';
import type { HandleSubmitEvent, HandleInputChangeEvent } from '../../types/Form';

interface FormProps {
    handleSubmit: (e: HandleSubmitEvent) => void
    handleInputChange: (event: HandleInputChangeEvent) => void
    task: Task
}

export const Form = ({ handleSubmit, handleInputChange, task }: FormProps) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>

            <TextField label="Title" name="title" placeholder='Center a div...' value={task.title} onChange={handleInputChange} />

            <TextField label="Description" placeholder='Study flexbox model, grid model, ...' name="description" value={task.description} onChange={handleInputChange} />

            <Checkbox label="Completed" checked={task.completed} onChange={handleInputChange} name="completed" />

            <PrimaryButton text="Add Task" type='submit' />


        </form>
    )
}