# 모듈(Module)
---
#### 클로저를 사용하여 priavte 범위를 허용하는 패턴

:::tip 네임스페이스란?
- 수많은 함수, 객체, 변수들로 이루어진 코드가 전역 유효범위를 어지럽히지 않고, 애플리케이션이나 라이브러리를 위한 하나의 전역 객체를 만들고 모든 - 기능을 이 객체에 추가하는것 (ex. jQuery)  
- 코드 내의 이름 충돌뿐만 아니라 이 코드와 같은 페이지에 존재하는 또 다른 자바스크립트 라이브러리나 서드파티 코드와의 이름 충돌도 미연에 방지
:::

#
<Badge text="객체리터럴을 사용한 모듈패턴" /> 
``` js
var module = {
    key : 'value',
    publicMethod : function() {
        // public 메소드
    }
}
```

#
<Badge text="클로저를 이용한 모듈패턴" /> 
``` js
(function(){
    // priavte 변수들과 함수들을 선언

    return {
        // public 변수들과 함수들을 선언
    }
})()
```

:::tip 클로저란?
- 외부함수의 변수에 접근할 수 있는 내부함수
- 스코프체인(Scrope chain)으로 표현되기도함
    - 클로저 자신에 대한 접근
    - 외부 함수의 변수에 대한 접근
    - 전역 변수에 대한 접근
:::

#
<Badge text="실사용 예" /> 
``` js
// 네임스페이스 선언
var MyApp = {} // 전역 객체


MyApp.modules.libs = (function(){
    // 비공개 변수, 메소드등의 유효범위(prevate 멤버)
    return {
        // 공개 API (public 멤버)
    }
})();
```

:::tip 참고
https://webclub.tistory.com/5 [Web Club]
https://itstory.tk/entry/%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC%ED%95%98%EB%8A%94-Javascript-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-4%EA%B0%80%EC%A7%80
:::