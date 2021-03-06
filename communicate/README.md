# 组件通信

## 父组件向子组件通信

* 父组件在子组件模板上使用属性绑定将数据绑定到模板上的属性中。
* 在子组件中使用`@Input()`接收该数据。

## 子组件向父组件通信

* 子组件中定义一个EventEmitter对象，使用emit方法发射消息。
* 父组件在子组件模板上使用事件绑定去捕获这个消息，捕获的事件名就是在子组件定义的EventEmitter对象。

## 子组件间通信以及非同级子组件的通信

* 创建一个服务，在服务中声明两个方法，get和set方法。
* get方法返回的不是一个变量，而是一个Observable观察者流，将变量放进观察者流中传递。
* 然后在子组件中使用subscribe()订阅这个流，这样，当其它子组件调用set方法修改了服务中流的数据后，subscribe()方法就会重新获取新的数据。这样就完成了一个简单的子组件间的通信。

## 具体操作看代码
