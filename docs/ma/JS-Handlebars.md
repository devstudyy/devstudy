# Handlebars.js 에 대하여

## Handlebars.js 란?

http://handlebarsjs.com/

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.
Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates. 


Handlebars는 사용자가 좌절감없이 효과적으로 시맨틱한 templates을 만들 수 있도록하는 데 필요한 기능을 제공합니다.
Handlebars는  Mustache templates과 잘 어울립니다. 대부분의 경우 Handlebars가있는 Mustache를 교체하고 현재 템플릿을 계속 사용할 수 있습니다.

#### 0. 사용 이유
Mustache 에서 나온 방식으로, 추천하진 않지만 사용자 정의 + 낮은 레벨의 연산을 포함할 수 있고 스크립트 템플릿 엔진 중에선 비교적 빠르고 가벼운편

물론 Vue.js 와 같은 여타 템플릿엔진과 다르게, 템플릿 내 연산, 판단을 추천하지 않는 편으로 자바스크립트 내 단순 반복 영역에 대한 템플릿엔진으로는 사용하기 좋다고 판단된다.

#### 1. 설치방법
1. CDN
   ```
   접속하여 최신 CDN 설치 
   https://cdnjs.com/libraries/handlebars.js
   ```
2. NPM
   ```javascript
   npm install --save handlebars
   require('handlebars');  혹은  require('handlebars/runtime');
   ```
3. Bower
   ```javascript
   bower install --save handlebars
   ```


#### 2. 템플릿 제작
```javascript
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
```

#### 3. 템플릿 컴파일링(최초 Init)
```javascript
var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
```

#### 4. 데이터 바인딩
```javascript
var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);
```
#### 5. 주석 사용법
```javascript
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
      {{!--저는 주석이에요--}}
  </div>
</script>
```
### 6. 반복문 처리


```javascript 
// 데이터 바인딩 내 배열 객체 포함
var context = { goodsList: [
{  goodsName : "불주먹", goodsPrice : 1000, sellerName : "마동섴" },
{  goodsName : "강철주먹", goodsPrice : 2000, sellerName : "마징가" },
{  goodsName : "엄마주먹", goodsPrice : 3000, sellerName : "마미손" }
]};

<script id="entry-template" type="text/x-handlebars-template">
<table>
    <thead> 
        <th>상품명</th> 
        <th>가격</th> 
        <th>판매자명</th> 
    </thead> 
    <tbody> 
    <!--배열 객체에 대한 사용은 {{#객체명}} 을 사용하고 {{/객체명}} 로 닫는다-->
        {{#goodsList}} 
        <tr> 
            <td>{{goodsName}}</td> 
            <td>{{goodsPrice}}</td> 
            <td>{{sellerName}}</td> 
        </tr> 
        {{/goodsList}} 
    </tbody> 
</table>
</script>
```