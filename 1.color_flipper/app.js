const colors = ['#FFF5EB','#DEEDF0','#F4C7AB','#B2B8A3']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click' , () => {
  const randomNumber = Math.floor(Math.random() * colors.length)
  
  document.body.style.background = colors[randomNumber]
  
  color.textContent = colors[randomNumber]

})


