import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-todo-input-add-itens',
    templateUrl: './todo-input-add-itens.component.html',
    styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
    @Output() public emitItemTaskList = new EventEmitter();

    public addItemTaskList: string = '';

    public submitItemTaskList() {
        let value = this.addItemTaskList.trim();
        if (!value.length) {
            return;
        }
        this.emitItemTaskList.emit(value);
        this.addItemTaskList = '';
    }
}
