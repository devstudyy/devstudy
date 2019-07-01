# 스트레티지(Strategy)
---
#### 행위를 클래스로 캡슐화해 동적으로 행위를 자유롭게 바꿀 수 있게 해주는 패턴  
#### 외부에서 주입받은 객체를 사용함 
#### 스프링의 DI 원리의 기반

:::tip 상속과 구성
 - 상속(Inheritance)  
`is-a` 관계 
하위 클래스가 정상 동작하기 위해서는 상위 클래스의 구현에 의존  
extens로 상속하여 사용

 - **구성(composition)**  
 `has-a` 관계  
Wrapper Class   
주입받는 클래스의 내부구현에 종속되지 않으며, 새로운 메소드를 추가하더라도 영향을 주지 않음  
새로운 클래스에 기존 클래스 객체를 참조하는 private 필드에 인스턴스 주입  

:::


![클래스 다이어그램](/img/strategy-pattern.png)

- 역할
    - Strategy
        - 인터페이스나 추상 클래스로 외부에서 동일한 방식으로 알고리즘을 호출하는 방법을 명시
    - ConcreteStrategy
        - 스트래티지 패턴에서 명시한 알고리즘을 실제로 구현한 클래스
    - Context
        - 스트래티지 패턴을 이용하는 역할을 수행한다.
        - 필요에 따라 동적으로 구체적인 전략을 바꿀 수 있도록 setter 메서드(‘집약 관계’)를 제공한다.

#

***오리의 행동을 정의한 인터페이스***
___
``` java
//오리 비행 인터페이스
public interface IFlyBehavior {
    void fly();
}

// 오리 소리 인터페이스
public interface IQuackBehavior {
    void quack();
}
```
___
***인터페이스를 구현한 클래스***
``` java
// 오리비행인터페이스를 구현한 클래스
public class FlyWithWings implements IFlyBehavior{
 
    @Override
    public void fly() {
        System.out.println("날고있어요");
    }
 
}

// 오리소리인터페이스를 구현한 클래스
public class Quack implements IQuackBehavior{
 
    @Override
    public void quack() {
        System.out.println("꽥꽥꽥꽥");
    }
 
}

```

***추상클래스(청둥오리,노랑부리오리가 상속하여 사용)***
``` java
public abstract class Duck {
     
    IFlyBehavior iFlyBehavior;
    IQuackBehavior iQuackBehavior;
     
    public Duck(){
    }
     
    public abstract void display();
     
    public void performFly(){
        iFlyBehavior.fly();
    }
     
    public void performQuack(){
        iQuackBehavior.quack();
    }
     
    // 나는 행동 변화
    public void setFlyBehavior(IFlyBehavior fb){
        iFlyBehavior = fb;
    }
     
    // 소리 변화
    public void setQuackBehavior(IQuackBehavior fb){
        iQuackBehavior = fb;
    }
}
```
___


***Duck Class를 상속받은 미니오리 ,모형오리클래스***
___
``` java
// 미니오리 클래스
public class MiniDuck extends Duck {
     
    public MiniDuck(){
        iFlyBehavior = new FlyWithWings();
        iQuackBehavior = new Quack();
    }
     
    @Override
    public void display() {
        System.out.println("작은오리");
    }
 
}

// 모형오리를 위한 날지못하는 비행클래스 구현
public class NoFly implements IFlyBehavior{
 
    @Override
    public void fly() {
        System.out.println("날지못해요");
    }
 
}

// 모형오리 클래스
public class ModelDuck extends Duck{
 
    public ModelDuck(){
        iFlyBehavior = new NoFly(); // "날지못해요"
        iQuackBehavior = new QQuack(); // "꾸에에에에에~~엑"
    }
     
    @Override
    public void display() {
        System.out.println("모형오리");
    }
     
}
```
---
***메인클래스***
``` java
public class TestChildDuck {
 
    public static void main(String[] args) {
        // 작은오리
        Duck miniDuck = new MiniDuck();
        miniDuck.display();             // 작은오리
        miniDuck.performFly();          // 날고있어요
        miniDuck.performQuack();        // 꽥꽥
                  
        // 모형오리
        Duck modelDuck = new ModelDuck();
        modelDuck.display();            // 모형오리
        modelDuck.performFly();         // 날지못해요
        modelDuck.performQuack();       // 꾸에에에에에~~엑

        // 모형오리가 날수 있게 수정
        modelDuck.setFlyBehavior(new FlyWithWings());
        modelDuck.performFly();         // 날고있어요
         
    }
 
}
```

:::tip 참고
https://gmlwjd9405.github.io/2018/07/06/strategy-pattern.html  
https://arabiannight.tistory.com/
:::
