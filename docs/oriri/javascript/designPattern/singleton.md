# 싱글톤(Singleton)
---
#### 전역 변수를 사용하지 않고 객체를 하나만 생성 하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴

1. IIFE로 비공개 멤버 변수를 생성해야함
2. 인스턴스 유무를 파악하여 인스턴스를 리턴해야함


#
<Badge text="모듈패턴에 기반한 싱글톤패턴" /> 
``` js
var singleton = (function() {
  var instance;
  var a = 'singleton';
  function init() {
    return {
      a: a,
      b: function() {
        console.log(a);
      }
    };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();
```