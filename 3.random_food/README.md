# 랜덤 음식메뉴 사이트 만들기

## 데모사이트
- https://random-food-blog.netlify.app/

## Axios를 이용해서 API 호출 해보기
- Axios는 Promise API를 활용하는 Http 비동기 통신 라이브러리 이다. 
- 브라우저 환경, Node.js에서 사용 가능하다. 

## 프로젝트 기능
- 구현된 버튼을 누르면 랜덤한 맛집 블로그로 바로 갈수 있다. 

### 사용방법
```bash

//Get 

axios.get(url,{
  params: {
    query: '검색키워드'
  },
  headers: {
    Authorization: 'Api key'
  },)
  .then(function (response) {
    // 성공 핸들링
    console.log('success!',response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log('some errors',error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });

```


