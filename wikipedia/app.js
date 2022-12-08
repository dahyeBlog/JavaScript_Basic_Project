const url =
  'https://ko.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&language=ko&srsearch=';

const formDOM = document.querySelector('.form')
const inputDOM = document.querySelector('.form-input')
const resultsDOM = document.querySelector('.results')

formDOM.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = inputDOM.value

  if (!value) {
    resultsDOM.innerHTML = `<div>검색할 단어를 입력하세요.</div>`
    return
  }
  fetchPages(value)
})

const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = '<div class="loading"></div>'
  try {
    const res = await fetch(`${url}${searchValue}`)
    const data = await res.json()
    const results = data.query.search
    if (results.length < 1) {
      resultsDOM.innerHTML = `<div class='error'>
        매치되는 결과가 없습니다. 
      </div>`
      return
    }

    renderResults(results)
    
  } catch (error) {
    resultsDOM.innerHTML = `<div class='error'> 에러가 있습니다. </div>`
  }

}

const renderResults = (list) => {
  const cardList = list.map((item) => {
    const {title, snippet, pageid} = item
    return `<a href=http://ko.wikipedia.org/?curid=${pageid} target="_blank">
      <h4>${title}</h4>
      <p>${snippet}</p>
    </a>`    
  }).join("")

  resultsDOM.innerHTML = `<div class="articles">${cardList}</div>`
  
}


