
### 디자인 패턴 이란?
---
 1. 요구사항 변경에 대한 소스코드 변경을 최소화
 2. 팀을 이루어 코딩하는 경우 범용적인 코딩스타일 적용
 3. 인수인계시 인수자가 코드를 빨리 이해할 수있도록 범용적이며 직관적인 코드 사용

위의 조건을 충족하는 방법론이며 외우기 보다는 왜 필요한지 숙지하고 적재적소에 쓰여야 함	:ok_hand:


<Badge text="결론" />
**디자인 패턴 = (디자인 = 설계, 구조) + (패턴 = 많은 프로그래머들이 인정하여 일반적으로 사용)**


### 디자인 패턴 종류
---
- GoF(Gang of Fout) 디자인 패턴
    - GoF : 에리히 감마(Erich Gamma), 리차드 헬름(Richard Helm), 랄프 존슨(Ralph Johnson), 존 블리시디스(John Vissides)
    - 소프트웨어 개발 영역에서 디자인 패턴을 구체화하고 체계회한 사람들
    - 23가지의 디자인패턴을 정리하고  각각의 디자인 패턴을 생성(Creational), 구조(Structural), 행위(Behavioral) 3가지로 분류

1. GoF 디자인 패턴 분류

    - #### 생성(Creational) 패턴  
        <Badge type="warn" text="객체의 생성과 조합을 캡슐화해 특정 객체가 생성되거나 변경되어도 구조에 영향을 크게 받지 않도록 유연성 제공" />    
        - 추상 팩토리 패턴(Abstract Factory pattern)
        - 팩토리 메서드 패턴(Factory Method pattern)
        - 싱글톤 패턴(Singleton pattern)
        - 프로토타입 패턴 (prototype pattern)

    - #### 구조(Structural) 패턴  
        <Badge type="warn" text="클래스나 객체를 조합해 더 큰 구조를 만드는 패턴" />    
        - 컴퍼지트 패턴(Composite pattern)
        - 데커레이터 패턴(Decorator pattern)
        - 프록시 패턴 (proxy pattern)
        - 퍼사드 패턴 (facade pattern)
        - 어댑터 패턴 (adaptor pattern)
        - 브리지 패턴 (bridge pattern)
        - 플라이웨이트 패턴 (flyweight pattern)

    - #### 행위(Behavioral) 패턴  
        <Badge type="warn" text="객체나 클래스 사이의 알고리즘이나 책임 분배에 관련된 패턴" />
        - 옵저버 패턴(Observer pattern)
        - 스테이트 패턴(State pattern) 
        - 이터레이터 패턴 (iterator pattern)
        - 스트래티지 패턴(Strategy pattern)
        - 템플릿 메서드 패턴(Template Method)
        - 커맨드 퍄톤(Command pattern)
        - 메멘토 패턴 (memento pattern) 
        - 비지터 패턴 (visitor pattern)



:::tip 참고
https://gmlwjd9405.github.io/2018/07/06/design-pattern.html
:::
