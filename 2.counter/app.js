const number = document.getElementById('value')
const btns = document.querySelectorAll('.btn')
// console.log(btns);

let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if(styles.contains("decrease")) {
      count--
    } else if (styles.contains("increase")) {
      count++
    } else {
      count = 0
    }
    
    if(count > 0) {
      number.style.color = 'green'
    }

    if(count < 0) {
      number.style.color = 'red'
    }

    if(count === 0) {
      number.style.color = 'black'
    }


    number.textContent = count
  })
})