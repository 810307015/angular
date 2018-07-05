import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() msg2: string;
  @Output() message: EventEmitter<any> = new EventEmitter();
  content: string[];
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getContent().subscribe(content => this.content = content);
  }

  postMsg() {
    this.message.emit('message2');
  }

  postToChild() {
    this.chat.addContent('我是子组件2，给子组件1发送消息');
  }
}
