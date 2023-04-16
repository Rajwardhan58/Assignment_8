import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Output() public SendStringEvent = new EventEmitter();
    public str="";
    public SendText(data : string)
    {
      this.str=data;
      this.SendStringEvent.emit(this.str);
    }

}
