const url = "http://openapi.foodsafetykorea.go.kr/api/38c4f1900bdb41dbbf55/COOKRCP01/json/1/50"

const fetchMenuRecipes = async () => {
  const response = await fetch(url)
  const data = await response.json()

  const dataList = data.COOKRCP01.row
  
  return dataList
}

export default fetchMenuRecipes



