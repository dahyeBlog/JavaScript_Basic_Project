const paginate = (menuRecipe) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(menuRecipe.length / itemsPerPage)
  
  const newMenuRecipes = Array.from({length: numberOfPages}, (_, index) => {
      const start = index * itemsPerPage
      
      return menuRecipe.slice(start, start+itemsPerPage)
  })
  
  return newMenuRecipes
}

export default paginate