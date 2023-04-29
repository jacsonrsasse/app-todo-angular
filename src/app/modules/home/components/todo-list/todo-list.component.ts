import { Component } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
    public taskList: Array<TaskList> = [];

    public deleteItemTaskList(indice: number) {
        this.taskList.splice(indice, 1);
    }

    public deleteAllTaskList() {
        const confirm = window.confirm('Você deseja realmente deletar tudo?');
        if (confirm) {
            this.taskList = [];
        }
    }

    public setEmitTaskList(taskList: string) {
        this.taskList.push({ task: taskList, checked: false });
    }
}
