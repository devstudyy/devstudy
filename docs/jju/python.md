> "Life is short, You need Python"

## 파이썬이란 ?

Python이란 1991년 귀도 반 로섬(Guido van Rossum)이 개발한 고급 프로그래밍 언어.

프로그래머가 바로 사용할 수 있는 라이브러리들과 통합 환경을 제공하는 ‘Battery Included’ 개념을 기본으로 삼고 있다

- **인터프리터 기반의 객체지향 언어**
  > 파이썬 코드를 파이썬 바이트코드(bytecode)로 변환(컴파일) 후 해석(인터프리트) ; like JVM
- **플랫폼에 구애받지 않는 언어**
  > 컴파일된 바이트코드는 플랫폼에 구애받지 않아서 재 컴파일이 필요없다
- **동적 타이핑 방식의 언어**
  > 프로그램을 실행할 때 타입 검사를 수행(ex; 자바스트립트)
  > (정적 타이핑 : 컴파일할 때 타입 검사(ex; c/c++))
- **리플렉션을 지원하는 언어**
  > 런타임 중 자신의 구조와 행위를 검사/수정할 수 있는 프로세스
  > 동적 객체 생성 및 함수 호출 등의 행위를 수행 가능함
- **확장성이 뛰어난 언어**
  > 외부 라이브러리로 쉽게 확장 가능
  > 컴파일된 모듈을 이용해 새로운 데이터 타입으로 이용 가능
  > 새로운 모듈은 대부분 플랫폼에서 새롭게 컴파일된 모듈을 파이썬 인터프리터 내부로 동적 로딩 가능

**라이브러리**
배포판에 바로 사용할 수 있는 라이브러리와 통합 환경이 함께 제공.<br>
os 시스템 호출, xml 처리, 직렬화, http, ftp 등 각종 프로토콜, 정규표현식, CSV 파일 처리, DB접속, GUI, html, 파이썬 코드 구문 북석 도구 등을 포함<br>
패키지 관리는 [PyPI(python package index) - 파이썬 관련 패키지들이 모여있는 저장소](https://pypi.org/) 에서..<br>
<br>
<br>

## 문법 주의사항

파이썬은 **들여쓰기를 이용한 블록 구조**로 되어있다. <br>

> ```
> def factorial(x):
>   if x == 0:
>       return 1
>   else:
>       return x \* factorial(x - 1)
> ```

> 괄호를 사용한 블록구조
>
> ```
> int factorial(int x) {
> if(x == 0) {
> return 1;
> } else {
> return x \* factorial(x - 1);
> }
> }
> ```

## 출력

> ```
> print("hello")       # hello
> print(1)             # 1
> print(10/2)         # 5.0
> print("", 1+1)      #  2
> print("hello", 1)     # hello 1
> print("hello", "1")  # hello 1
> print("" + 1 + 1)  # error
> ```

## 입력

> ```
> 실행 중 사용자의 입력을 받는다
> 입력 값은 항상 문자열로 받아 온다.
> 프로그램에게 전달 가능
> 변수에 저장 가능
> ```

> ```
> input('hello python')
> ```

## 숫자 Numeric

- 정수, 실수
- 연산 가능

> ```
> my_int1 = 1
> my_int2 = -2
> my_int3 = 4096
> my_float1 = 1.0
> my_float2 = 2.0
> my_float3 = 3.14
> ```

## 문자열 String

- 큰 따옴표, 작은 따옴표로 구분
- 리스트같은 시퀀스 자료형

> ```
> my_str1 = 'a'
> my_str2 = '3.14'
> my_str3 = 'coding'
> my_str4 = "coding"
> ```

- 따옴표가 포함된 문자열을 사용하고 싶을 경우 서로 다른 따옴표를 함께 사용

> ```
> print("Let's go!")
> print('I said, "Hello!"')
> ```

- 여러줄 표현 -> 같은 따옴표를 세번씩 사용

> ```
> my_str = """버스
>             지하철
>             택시
>          """
> ```

### 포맷팅

> % 사용
>
> - % 연사자를 이용해 문자열에 숫자, 문자열 등을 대입
> - %d : 정수형 숫자
> - %f : 실수형 숫자
> - %s : 문자열
>
> ```
> print('My name is %s' % 'Tom')
> My name is Tom
> print('x = %d, y = %d' % (1, 2))
> x = 1, y = 2
> print('%d x %d = %d' % (2, 3, 2 * 3))
> 2 x 3 = 6
> ```

> { } 사용
>
> - '{}'.format()
> - 포맷팅을 수행하는 문자열 메소드
> - 괄호 안에 숫자를 넣어 순서 지정 가능
>
> ```
> print('My name is {}'.format('Tom'))
> My name is Tom
> print('{} x {} ={}'.format(2, 3, 2 * 3))
> 2 x 3 = 6
> print('{1} x {0} ={2}'.format(2, 3, 2 * 3))  # 괄호 안의 숫자는 순서를 지정
> 3 x 2 = 6
> ```

### 인덱싱

> - index를 이용해 각 문자에 접근 (공백 포함, 음수 가능)
> - 음수를 사용할 경우 가장 뒤에서 거꾸로 셈
>
> ```
> alphabet = 'abcde'
> print(alphabet[0])
> a
> print(alphabet[5])
> string index out of range error 발생, 없는 index
> print(alphabet[-1])
> e
> ```

### 슬라이싱

> - : 콜론을 사용하여 여러값을 한 번에 잘라옴, [startIdx:endIdx]
> - 앞/뒤 숫자 생략 가능
>
> ```
> my_str = 'Hello Python!'
> print(my_str[0:2])
> He
> print(my_str[3:7])
> lo P
> my_name = '김왼손의 왼손코딩'
> print(my_name[5:7])
> 왼손
> my_name[:2]
> 김왼
> my_name[7:]
> 코딩
> ```

### string.split() 메서드

> - 공백 기준으로 분리
>
> ```
> my_name = '김왼손의 왼손코딩'
> print(my_name.split())
> ['김왼손의', '왼손코딩']
> splitNm = my_name.split()
> print(splitNm[0])
> 김왼손의
> ```

### 독스트링 (document String)

> - 문서화 문자열(document string)
> - 함수주석
> - 보통 큰 따옴표 3개 사용
>
> ```
> def 함수이름(인자1, ...):
>    """함수에 대한 설명"""
>    실행할 명령1
>    실행할 명령2
>    ...
>    return 결과
> ```

### end , print('', end='')

> - print() 함수에서 출력의 끝을 지정
> - 기본 값은 줄바꿈(\n), 개행문자가 아닌 다른 문자를 지정하고가 할 때 사용
> - 특정 기능을 수행하기 위해 미리 지정하여 사용
>
> ```
> print("가")
> print("가", end="//")
> print("나")
> 가
> 가//나
> ```

> - 문서화 문자열(document string)
> - 함수주석
> - 보통 큰 따옴표 3개 사용
>
> ```
> def 함수이름(인자1, ...):
>    """함수에 대한 설명"""
>    실행할 명령1
>    실행할 명령2
>    ...
>    return 결과
> ```

## 불린 Boolean

- 논리 연산자 (T/F)

> ```
> my_bool1 = True  # True
> my_bool2 = False  # False
> my_bool3 = 1 < 2  # True
> my_bool4 = 1 == 2  # False
> ```

## 리스트 List

- 여러 값을 저장
- 값의 변경이 가능하며, 순서가 있다.

> ```
> my_list = []  # []
> my_list.append(123)  # [123]
> my_list.append('abc') # [123, 'abc']
> my_list.append(True)  # [123, 'abc', True]
> animals =['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
> print(animals[1:3])
> ['하이에나', '바다소']
> del animals[2] #delete , sort, count 등 많이 있음
> print(animals[1:3])
> ['하이에나', '땅다람쥐']
> ```

## 튜플 Tuple

- 여러 값을 저장
- 값의 변경이 **불가**하며, 순서가 있다.
- 괄호를 사용하지 않아도 된다

> ```
> my_tuple1 = ()
> my_tuple2 = (1,)
> my_tuple3 = ('a', 'b', 'c')
> my_tuple4 = 3.14, 'Python', True
> ```

### 패킹, 언패킹(packing, unpacking)

- 패킹(packing) : 여러 값을 한 번에 묶는 것
- 언패킹(unpacking) : 묶여 있는 값을 풀어 놓는 것

> ```
> tp = 1,2,3
> tmp1 , tmp2 , tmp3= tp  # 선언되는 변수의 수와 튜플의 size는 같아야 한다, 안그럼 error 발생
> print(tmp1)
> 1
> print(tmp2)
> 2
>
> 두 값을 서로 변경할 때도 사용
> num1 = 1
> num2 = 2
> num1, num2 = num2, num1
> print(num1, nul2)
> 2 1
> ```

## 형변환

- int()

> ```
> print(int(3.14))
> 3
> ```

- float()

> ```
> print(float(3))
> 3.0
> ```

- str()

> ```
> print(str(3.0))
> 3.0
> print(type(str(3.0)))
> <class 'str'>
> ```

- list(string)

> ```
> print(list('3.0'))
> ['3','.','0']]
> ```

## 반복문

- for : 횟 수 기준
- while : 조건 기준

### for

- 문법

> ```
> - 코드블럭을 구분하기 위해 : 과 들여쓰기를 사용
> - 파이선에서 들여쓰기는 선택이 아닌 필수!
>
> for 변수 in 컨테이너:
>     실행할 명령1
>     실행할 명령2
>     ...
> ```

> ```
> my_int1 = 1
> my_int2 = -2
> my_int3 = 4096
> my_float1 = 1.0
> my_float2 = 2.0
> my_float3 = 3.14
> ```

- range() : for와 함께 자주 사용되는 내장 함수

> - range(stop)는 0부터 stop 전까지 숫자를 나열
> - range(start, stop)는 start ~ stop 전 까지의 숫자를 나열
>
> ```
> for n in range(3):
>     print(n)
>
> 0
> 1
> 2
>
> for n in range(4, 6):
>     print(n)
>
> 4
> 5
> ```

- for x 2 : for 중첩

> ```
> for j in range(2, 10):
>     for i in range(1, 10):
>         print('{}x{}={}'.format(j, i, j \* i))
> ```

- 컴프리헨션 (comprehension) : 리스트를 만드는 강력하고 간결한 방법

> ```
> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> odd_numbers = [number for number in numbers if number % 2 == 1]
> print(odd_numbers)
> ```

### while

- 문법

> ```
> while 조건:
>     실행할 문장 1
>     실행할 문장 2
>     ...
> ```

> ```
> - continue : 다시 조건으로 돌아감
> - break : 반복문 종료
>
> count = 0
> while count < 10:
>    count += 1
>    if count < 4:
>        continue
>    if count == 8:
>        break
> ```

## 연산자

### 특수 연산자

> print(3 ** 2) # 3의 2제곱
> print(4 ** 3) # 4의 3제곱
> print(7 // 3) # 7 나누기 3의 몫
> print(7 % 3) # 7 나누기 3의 나머지
> 9  
> 64  
> 2  
> 1

### 문자열 연산자

> ```
> - + : 연결
> - * : 반복
>
> print('김왼손'+ 'X' + '집단지성들')
> 김왼손X집단지성들
> print('안녕 ' * 5)
> 안녕 안녕 안녕 안녕 안녕
> ```

### 논리 연산자

- and , or, not

### 멤버쉽 연산자

- 리스트, 튜플 등 안에 값이 있는지 확인
- in, not in

> ```
> fruits = ['사과', '딸기', '망고', '브로콜리', '바나나']
> print('딸기' in fruits)
> True
> print('딸기' not in fruits)
> False
> print('상추' in fruits)
> False
> print('상추' not in fruits)
> True
> ```

## 조건문

- 문법

> ```
> if 조건:
>    실행할 명령1
>    실행할 명령2
> elif 조건:
>    실행할 명령3
>    실행할 명령4
> else:
>    실행할 명령5
>    실행할 명령6
>
>
> name = 'Bob'
> if name == 'Alice':
>    print('당신이 Ailce이군요.')
> elif name == 'Bob':
>    print('당신이 Bob이군요.')
> else:
>    print('아니 당신은!?')
>
> 당신이 Bob이군요.
> ```

## 딕셔너리 Dictionary

- 관련된 정보를 서로 연관시켜 놓은 것
- k, v로 이루어져 있다.
- 리스트와의 차이첨은 관련된 정보를 연관시킨다는 것
- 리스트는 값을 다루리 위해 인덱스를 사용, 딕셔너리는 키를 사용

> ```
> my_dict = {}  # {}
> my_dict[1] = 'a'  # {1: 'a'}
> my_dict['b'] = 2  # {1: 'a', 'b': 2}
> my_dict['c'] = 'd'  # {1: 'a', 'b': 2, 'c': 'd'}
> ```

- dict method

> ```
> - dict.values() : 값만 뽑아서 리턴
>
> students = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}
> print(students.values() , students.keys())
>
> dict_values(['Tom', 'Sally', 'Betty']) dict_keys(['학생1', '학생2', '학생3'])
>
> for key, val in students.items():
>     print(key, val)
>
> 학생1 Tom
> 학생2 Sally
> 학생3 Betty
>
> ```

## 함수

- 문법

> ```
> def 함수이름(인자1, ...):
>     실행할 명령1
>     실행할 명령2
>     ...
>     return 결과
> ```
>
> ```
> - return 여러 개하기
> - 여러개를 리턴할 경우 튜플로 묶어서 return 됨
>
> def add_mul(num1, num2):
>     return num1 + num2, num1 * num2
>
> my_add, my_mul = add_mul(1, 2)  # 3, 2
> ```

## 모듈

- 문법

> ```
> import 모듈이름
> ```
