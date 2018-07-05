import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() msg1: string;
  @Output() message: EventEmitter<any> = new EventEmitter();
  content: string[];
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getContent().subscribe(content => this.content = content);
  }

  postMsg() {
    this.message.emit('message1');
  }

  postToChild() {
    this.chat.addContent('我是子组件1，给子组件2发送消息');
  }

}
