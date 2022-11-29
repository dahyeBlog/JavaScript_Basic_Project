- Array.from() 메서드로 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array객체를 만든다. 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

- // 시퀀스 생성기 기능
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

- open 데이터 api 를 사용해서 간단한 요리 조리법 페이지를 만들어보자. 
사용한 api 주소 : https://www.foodsafetykorea.go.kr/api/

