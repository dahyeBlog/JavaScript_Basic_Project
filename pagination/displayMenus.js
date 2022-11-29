const container = document.querySelector('.container')

const displayMenus = (menuRecipe) => {
  const newMenuList = menuRecipe.map((item) => {
   
    // console.log(item);
   
    const { ATT_FILE_NO_MAIN ,RCP_NM } = item
    
    const newMenuList = { mainImage :ATT_FILE_NO_MAIN, name: RCP_NM }
    
    const {mainImage, name} = newMenuList

    

    return `
      <article class="card">
        <img src="${mainImage}" alt="menu" />
        <h4>${name}</h4>
        <a href="./menuRecipe/menuRecipe.html" class="btn">레시피 자세히 보기</a>
    
        </article>
    `

  }).join('')

  container.innerHTML = newMenuList
}

export default displayMenus