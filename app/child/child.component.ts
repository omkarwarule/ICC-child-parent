import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() public Event=new EventEmitter();
  public data:any;
  public send(value:string)
  {
    this.data=value;
    this.Event.emit(this.data+'from child');
  }
}
