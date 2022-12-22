// 아이템 선택하기
const foodInfo = document.querySelector(".food-info");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const blogImg = document.querySelector(".blog-img");
const foodName = document.querySelector(".foodName");
const foodUrl = document.querySelector(".foodUrl");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
let dataArr = [];

//api로 Food 정보 가져오기
const getFood = () => {
  const url = "https://dapi.kakao.com/v2/search/blog";
  axios
    .get(url, {
      params: {
        query: "맛집",
        page: 30,
      },
      headers: {
        Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2",
      },
    })
    .then((response) => {
      const data = response.data.documents[currentItem];
      // console.log(response);

      blogImg.src = data.thumbnail ? data.thumbnail : "./noimg.png";

      foodName.innerHTML = `   <div class="foodName">
      <p>${data.title}</p>
    </div>`;
      foodUrl.href = data.url;

      dataArr.push(response.data.documents);
    })
    .catch((error) => {
      console.log(error);
    });
};

//화면에 로드되자마자 구현
window.addEventListener("DOMContentLoaded", function () {
  getFood();
});

// 다음 블로그 버튼
nextBtn.addEventListener("click", function () {
  currentItem++;
  dataArr.map((data) => {
    if (currentItem > data.length - 1) {
      currentItem = 0;
    }
  });
  getFood();
});

// 이전 블로그 버튼
prevBtn.addEventListener("click", function () {
  currentItem--;
  dataArr.map((data) => {
    if (currentItem < 0) {
      currentItem = data.length - 1;
    }
  });
  getFood();
});

//랜덤 블로그 보기

randomBtn.addEventListener("click", function () {
  dataArr.map((data) => {
    const randonNum = Math.floor(Math.random() * data.length);

    currentItem = randonNum;
  });
  getFood();
});
