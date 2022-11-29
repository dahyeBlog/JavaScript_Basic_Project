import fetchMenuRecipes from "./fetchMenuRecipes.js"
import paginate from "./paginate.js"
import displayMenus from "./displayMenus.js"
import displayButtons from "./displayButtons.js"

const btnContainer = document.querySelector('.btn-container')
const title = document.querySelector('.section-title h1')

let pages = []
let index = 0

const setupUI = () => {
  displayMenus(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  const menuRecipes = await fetchMenuRecipes()
  title.textContent = '음식 레시피 페이지'
  pages = paginate(menuRecipes)
  setupUI()
}

btnContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-container')) return
  if(e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if(e.target.classList.contains('next-btn')) {
    index++

    if(index > pages.length - 1) {
      index = 0
    }
  }
  if(e.target.classList.contains('prev-btn')) {
    index--
    if(index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})



window.addEventListener('load', init)