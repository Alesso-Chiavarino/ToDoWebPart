import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ToDoWebPartStrings';
import { ToDo } from './components/ToDo';
import { IToDoProps } from './components/IToDoProps';

export interface IToDoWebPartProps {
  tasksType: string;
  tasksCounter: boolean;
}

export default class ToDoWebPart extends BaseClientSideWebPart<IToDoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IToDoProps> = React.createElement(
      ToDo,
      {
        userDisplayName: this.context.pageContext.user.displayName,
        tasksType: this.properties.tasksType,
        tasksCounter: this.properties.tasksCounter,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneCheckbox('tasksCounter', {
                  text: strings.TasksCounterFieldLabel
                }),
                PropertyPaneDropdown('tasksType', {
                  label: strings.TasksTypeFieldLabel,
                  options: [
                    { key: 'All', text: 'All' },
                    { key: 'Completed', text: 'Completed' },
                    { key: 'Incomplete', text: 'Incomplete' }
                  ]
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
