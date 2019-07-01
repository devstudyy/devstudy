# 싱글톤(Singleton)
---
#### 전역 변수를 사용하지 않고 객체를 하나만 생성 하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴


1. static 메서드 사용

``` java
public class Printer {
  // 외부에 제공할 자기 자신의 인스턴스
  private static Printer printer = null;
  private Printer() { }
  // 자기 자신의 인스턴스를 외부에 제공
  public static Printer getPrinter(){
    if (printer == null) {
      // Printer 인스턴스 생성
      printer = new Printer();
    }
    return printer;
  }
```

<Badge type="error" text="!!주의" /> 
- 다중 스레드환경은 경합조건(Race Condition)을 발생시켜 인스턴스가 1개 이상 생성되는 경우가 발생

#

2. static 변수 사용

``` java
public class Printer {
   // static 변수에 외부에 제공할 자기 자신의 인스턴스를 만들어 초기화
   private static Printer printer = new Printer();
   private Printer() { }
   // 자기 자신의 인스턴스를 외부에 제공
   public static Printer getPrinter(){
     return printer;
   }
   public void print(String str) {
     System.out.println(str);
   }
}
```
<Badge type="error" text="!!주의" /> 
- 리플렉션을 사용하면 인스턴스 생성이 가능해짐
- 인스턴스화 되는 시점에 에러처리 불가
#

3. static 초기화 블록 사용
``` java
public class Printer {
   // static 변수에 외부에 제공할 자기 자신의 인스턴스를 만들어 초기화
   private static Printer printer;
   private Printer() { }

    static{
        try{
            printer = new Printer();
        } catch (Exception e){
            throw new RuntimeException("Exception creating Printer instance.");
        }
    }

   // 자기 자신의 인스턴스를 외부에 제공
   public static Printer getPrinter(){
     return printer;
   }
   public void print(String str) {
     System.out.println(str);
   }
}
```
<Badge type="error" text="!!주의" /> 
- 리플렉션을 사용하면 인스턴스 생성이 가능해짐
- 초기화 블럭을 이용하면 로직을 담을 수 있기 때문에 초기변수 셋팅이나 에러처리구문 이용 가능
#

:::danger 리플렉션을 이용해 싱글톤 클래스 인스턴스 생성하는 방법
``` java
public class UsingReflectionToDestroySingleton {

    public static void main (String[] args) {
        Printer instance = Printer.getInstance();
        Printer instance2 = null;
        
        try {
            Constructor[] constructors = Printer.class.getDeclaredConstructors();
            for ( Constructor constructor : constructors ) {
                constructor.setAccessible(true);
                instance2 = (Printer)constructor.newInstance();
            }
        } catch (Exception e) {
            
        }
        
        System.out.println(instance.hashCode());
        System.out.println(instance2.hashCode());
        
    }
}
``` 
:::

4. 인스턴스 생성 메서드에 동기화

``` java
public class Printer {
   // 외부에 제공할 자기 자신의 인스턴스
   private static Printer printer = null;
   private int counter = 0;
   private Printer() { }
   // 인스턴스를 만드는 메서드 동기화 (임계 구역)
   public synchronized static Printer getPrinter(){
     if (printer == null) {
       printer = new Printer(); // Printer 인스턴스 생성
     }
     return printer;
   }
   public void print(String str) {
     // 오직 하나의 스레드만 접근을 허용함 (임계 구역)
     // 성능을 위해 필요한 부분만을 임계 구역으로 설정한다.
     synchronized(this) {
       counter++;
       System.out.println(str + counter);
     }
   }
}
```
<Badge type="error" text="!!주의" /> 
- 다중 스레드환경일때 동시에 여러 스레드가 접근하는것을 방지  
- 인스턴스를 가져오는 메서드 및 변수에 접근하는 메서드에 Lock을 하는 방식이라 느림

#

5. **Enum 클래스 사용**
``` java
public enum SingletonTest {
	INSTANCE;
  
	public static SingletonTest getInstance() {		
		return INSTANCE;
	}
}
```
<Badge text="!!권장" /> 
- INSTANCE 가 생성될 때, multi thread 로 부터 안전  
- enum value는 자바 프로그램 전역에서 접근이 가능  
- 단 한번의 인스턴스 생성을 보장


:::tip 참고
https://blog.seotory.com/post/2016/03/java-singleton-pattern
:::
