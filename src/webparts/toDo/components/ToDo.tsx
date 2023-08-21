import * as React from 'react';
// import styles from './ToDo.module.scss';
import { IToDoProps } from './IToDoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ToDo extends React.Component<IToDoProps, {}> {
  public render(): React.ReactElement<IToDoProps> {
    const {
      description,
      userDisplayName
    } = this.props;

    return (
      <section>
        <div>

          <h2>Well done, {escape(userDisplayName)}!</h2>

          <div>Web part property value: <strong>{escape(description)}</strong></div>

        </div>
      </section>
    );
  }
}
