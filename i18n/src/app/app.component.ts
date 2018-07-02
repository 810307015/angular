import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  param = { name: 'Jack' };
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('zh');
    // translate.use('zh');
  }

  ngOnInit() {
    // 通过服务的方式获取国际化的数据
    this.translate.get('HELLO', {name: 'Tom'}).subscribe((res: string) => {
      console.log(res);
    });
  }

  changeLang($event) { 
    console.log($event.target.value);
    // 使用use时，返回的是一个Observable的观察者流，需要进行subscibe才能生效
    this.translate.use($event.target.value).subscribe(data => {
      // 这个地方获取到的数据是json中的所有字段
      console.log(data);
    });
  }
  
}
