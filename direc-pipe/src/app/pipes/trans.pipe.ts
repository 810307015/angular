import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {
  private zh;
  private en;
  constructor() {
    this.zh = {
      'Hello': '你好，欢迎来到这里！'
    };
    this.en = {
      'Hello': 'Hello, welcome to there!'
    };
  }

  transform(value: any, language?: any): any {
    if (value === 'Hello' && language === 'zh') {
      return this.zh.Hello;
    } else if (value === 'Hello' && language === 'en') {
      return this.en.Hello;
    } else {
      return value;
    }
  }

}
