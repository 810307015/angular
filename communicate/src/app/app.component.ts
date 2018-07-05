import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private msg1: string;
  private msg2: string;
  private message1: string;
  private message2: string;

  constructor() {}

  ngOnInit() {
    this.msg1 = "这是父组件传给子组件1的消息";
    this.msg2 = "这是父组件传给子组件2的消息";
  }

  getMsg1(message) {
    this.message1 = message;
  }
  getMsg2(message) {
    this.message2 = message;
  }
}
