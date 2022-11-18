const getElement = (selection) => {
  const element = document.querySelector(selection)
  if(element) return element;

  throw new Error('선택자 없음.')
}

export default getElement

