# 이미지 검색 앱 만들기
  - 카카오 api를 가지고 원하는 이미지를 검색할 수 있는 사이트를 구현함

## 데모
- 

## 어려웠던 부분 정리
 - 검색창에 원하는 검색을 입력 후 엔터와 클릭 으로 검색 결과를 얻고 싶었다. 
```bash
searchBtn.addEventListener('click', getImgList)
```

- 위의 코드처럼만 입력하면 enter키를 눌렀을 때는 검색결과가 나오지 않는다. 
- 이를 구현하고 싶은 마음에 다음과 같은 코드를 입력해 엔터키 입력시에도 결과가 나오도록 했다. 

```bash
window.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    getImgList()
  }
});
```


## 함수 내용 정리
### forEach와 map의 차이점
- forEach() 기존의 Ararry를 변경하는 반면, map()은 새로운 Ararry를 반환




