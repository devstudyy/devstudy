# 옵저버(Observer)
---
#### 모듈의 중간에서 서로의 상태 변화를 관찰하는 관찰자 객체를 만드는 패턴

- 상태변화가 있을 때마다 상대 모듈에게 필요한 데이터와 함께 상태가 변했음을 관찰자(observer)를 통하여 통보(notify)
- mouseover , keypress와 같은 브라우저 이벤트가 옵저버 패턴의 예
- 나의 주제(subject 혹은 publisher)를 여러 구독자(observer)가 구독하는 1:N 관계

#
<Badge text="옵저버객체 생성" /> 
``` js
var observer = {
  handlers: {},
  // 상태 변화 이벤트가 발생하면 실행될 이벤트를 등록하는 함수를 작성합니다.
  register: function (eventName, handler) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) {
        handlerArray = this.handlers[eventName] = [];
    }
    handlerArray.push({ handler: handler, context: context });
  },
  // 등록된 핸들러를 해제하는 함수를 작성합니다.
  unregister: function (eventName, handler, context) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray)
      return ;
    for (var hidx = 0; hidx < handlerArray.length; hidx++) {
      var currentHandler = handlerArray[hidx];
      if (handler === currentHandler['handler']
       && context === currentHandler['context']) {
        handlerArray.splice(hidx, 1);
        return ;
      }
    }
  }

  // 특정 상태가 변했을때 이벤트를 통보할 함수를 작성합니다.
  notify: function (evnetName, data) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray)
      return;

    for (var hidx = 0; hidx < handlerArray.length; hidx++) {
      var currentHandler = handlerArray[hidx];
      // call로 해당 context 주입 후 호출
      currentHandler['handler'].call(currentHandler['context'], data);
    }
  }
};
```
#
<Badge text="옵저버객체 활용" /> 
``` js
var boss = new Person();          // 여기에 사장이 있습니다.
var manager = new Person();       // 팀장도 있고,
var programmer = new Person();    // 개발자도 있습니다.

boss.speak = function(comment) { 
  // event notify
  observer.notify("bossSpeak", comment); 
};

manager.listen = function (comment) {
  this.bossComment = comment;
};
// 옵저버에 등록
observer.register("bossSpeak", manager.listen, manager);

programmer.drop = function (comment) { 
  return comment;
};
observer.register("bossSpeak", programmer.drop, programmer);

// 이벤트 실행
boss.speak("... for an hour ...");
```
```

:::tip 참고
http://blog.naver.com/PostView.nhn?blogId=c_ist82&logNo=220795909036
https://m.blog.naver.com/PostView.nhn?blogId=c_ist82&logNo=220795909036&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F
:::