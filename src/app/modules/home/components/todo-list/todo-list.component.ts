import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
    public taskList: Array<TaskList> = JSON.parse(
        localStorage.getItem('tasks') || '[]'
    );

    public deleteItemTaskList(indice: number) {
        this.taskList.splice(indice, 1);
        this.saveLocalStorage();
    }

    public deleteAllTaskList() {
        const confirm = window.confirm('Você deseja realmente deletar tudo?');
        if (confirm) {
            this.taskList = [];
        }
        this.saveLocalStorage();
    }

    public setEmitTaskList(taskList: string) {
        this.taskList.push({ task: taskList, checked: false });
    }

    public validationInput(content: string, index: number) {
        if (content.length) {
            return;
        }
        const confirm = window.confirm('Task está vazia, deseja deletar?');
        if (confirm) {
            this.deleteItemTaskList(index);
        }
    }

    ngDoCheck(): void {
        if (!this.taskList.length) {
            return;
        }
        this.saveLocalStorage();
    }

    private saveLocalStorage() {
        this.taskList.sort((first: TaskList, last: TaskList) => {
            return Number(first.checked) - Number(last.checked);
        });
        // salvar no localStorage
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
}
