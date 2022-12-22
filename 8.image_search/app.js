const searchBtn = document.getElementById("search-btn");
const imageList = document.getElementById("images");

// 이미지 검색 결과 가져오기
function getImgList() {
  const url = "https://dapi.kakao.com/v2/search/image";
  let searchInputTxt = document.getElementById("search-input").value.trim();
  axios
    .get(url, {
      params: {
        query: searchInputTxt,
        page: 30,
      },
      headers: {
        Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2",
      },
    })
    .then((response) => {
      const imgData = response.data.documents;

      let html = "";
      if (imgData) {
        imgData.forEach((img) => {
          console.log(img);

          html += `
            <div class="image-results">
            <div class="img">
            <a href=${img.doc_url}> <img src=${img.thumbnail_url} alt="img"></a>
            </div>

            <div class="name">
                <a href=${img.doc_url}>이미지 바로가기</a>
            </div>
        </div> 
          `;
        });
      }
      imageList.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    })
}

// 검색결과를 얻기 위한 이벤트
searchBtn.addEventListener("click", getImgList);
window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getImgList();
  }
});

