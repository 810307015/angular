# angular的国际化

## 需要运行的先使用`npm install`安装相关依赖包，然后使用`npm start`运行项目，就可以看到效果。

## 基本构建步骤

* 安装`@ngx-translate/core`,`@ngx-translate/http-loader`两个包，即`npm install @ngx-translate/core @ngx-translate/http-loader --save`。
* 在`AppModule`中引入这几行代码：

```typescript
// 下面三个是国际化必须额外引入的外部包
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 该方法返回一个国际化加载的翻译器，用来加载对应的语言json文件
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// 基本配置
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // 以下都是国际化需要引入的模块设置
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

* 在`AppComponent`中引入这几行代码

```typescript
import { TranslateService } from '@ngx-translate/core';

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

// 对应页面的下拉列表被修改的事件
changeLang($event) { 
  console.log($event.target.value);
    // 使用use时，返回的是一个Observable的观察者流，需要进行subscibe才能生效
  this.translate.use($event.target.value).subscribe(data => {
      // 这个地方获取到的数据是json中的所有字段
    console.log(data);
  });
}
```

* 对应的页面可以这样写

```html
<div class="header">
  <h1>{{ 'header' | translate }}</h1>
</div>
<!-- 通过管道获取国际化的数据 -->
<div>{{ 'HELLO' | translate:param }}</div>
<!-- 通过指令获取国际化的数据 -->
<div [translate]="'welcome'" [translateParams]="{name: 'Tom' | translate}"></div>
<!-- 这样的指令效果也是一样的 -->
<div translate [translateParams]="{name: 'Jerry' | translate}">welcome</div>

<div class="footer">
  <select name="lang" id="lang" (change)="changeLang($event)">
    <option value="zh">中文简体</option>
    <option value="en">English</option>
  </select>
</div>
```

* 最后在assets的文件夹下新建一个i18n的文件下，下面用来存放对应语言的json文件，注意，文件名要为en、zh等对应的语言缩写。上述示例的json文件示例如下：

```json
// <!-- en.json -->
{
  "Tom": "Tom",
  "Jack": "Jack",
  "Jerry": "Jerry",
  "header": "This is a header!",
  "HELLO": "hello, {{ name }}",
  "welcome": "Welcome to enter my website, {{ name }}"
}

// <!-- zh.json -->
{
  "Tom": "汤姆",
  "Jack": "杰克",
  "Jerry": "杰瑞",
  "header": "这是一个标题",
  "HELLO": "你好, {{ name }}",
  "welcome": "欢迎来到我得网站, {{ name }}"
}

```

* 以上步骤就是国际化的所有步骤，该笔记来源于npm官网中的@ngx-tanslate/core包的教程。