import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;
  @Output() delete = new EventEmitter<ITask>();
  deleteTask() {
    console.log('Tarea Eliminada', this.task?.title);
    this.delete.emit(this.task);
  }
}
