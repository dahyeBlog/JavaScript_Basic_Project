# 아재개그 Project

## fetch api 

```js
const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'learning app',
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

