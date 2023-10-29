import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childMessage:string;
  parentMessage = 'Message from the parent component';
  @ViewChild('child', { static: false }) child: ElementRef;

  onMessageReceived(message: string) {
    this.childMessage = message;
    console.log(`Received message from child component: ${message}`);
  }

  onClick() {
    this.child.nativeElement.doSomething();
  }


}
