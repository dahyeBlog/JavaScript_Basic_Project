const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
  fetchDadJoke()
})

const fetchDadJoke = async () => {
  result.textContent = 'Loading...'
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app'
      },
    })

    if (!response.ok) {
      throw new Error('error')
    }

    const data = await response.json()

      console.log(data.joke);
      
    result.textContent = data.joke
  } catch (error) {
    console.log(error.message);
    result.textContent = '에러가 발생했습니다. '
  }
}

fetchDadJoke()