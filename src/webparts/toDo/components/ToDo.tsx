import * as React from 'react';
import { IToDoProps } from './IToDoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useToDo } from '../hooks/useToDo';
import { Form } from './Form/Form';
import { ListTasks } from './ListTasks/ListTasks';
import styles from './ToDo.module.scss';

export const ToDo = ({ userDisplayName, tasksType, tasksCounter }: IToDoProps) => {

  const { tasks, deleteTask, handleInputChange, handleSubmit, task, handleTaskStatus } = useToDo()

  return (
    <section>
      <div>

        <h2>Hello {escape(userDisplayName)}!</h2>
        <h4>Welcome to ToDo Web part</h4>

        <h2>Tasks</h2>

        <div className={styles.toDo}>


          <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} task={task} />

          <ListTasks tasksType={tasksType} tasks={tasks} deleteTask={deleteTask} handleTaskStatus={handleTaskStatus} tasksCounter={tasksCounter} />

        </div>

      </div>
    </section>
  )
}
