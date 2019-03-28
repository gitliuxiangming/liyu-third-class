const EventEmitter = require('events');//返回的是一个类
//通常我们需要继承EventEmitter类来实现事件
class EventEmitter1 extends EventEmitter{}
var emitter = new EventEmitter1();//拿到实例对象
//绑定事件
emitter.on('test',(arg1)=>{
	console.log(arg1)
})
//触发事件
emitter.emit('test','I am test...')
