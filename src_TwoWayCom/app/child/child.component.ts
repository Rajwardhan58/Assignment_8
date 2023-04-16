import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() public dataFromParernt="";
    @Output() public myEvent = new EventEmitter();
    public sendData()
    {
      this.myEvent.emit("Hello from child");
    }
  }
