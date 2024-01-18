const SECRETKEY = "65a97dfb219bfa3718695969";
const BOOKS_ENDPOINT = "mockapi.io/books";
const AUTHORS_ENDPOINT = "mockapi.io/authors";

export const PostBook = async (obj) => {
  const ENDPOINT = 'https://' + SECRETKEY + '.' + BOOKS_ENDPOINT;
  // console.log(ENDPOINT)

  await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(console.log);
}

export const PostAuthor = async (obj) => {
  const ENDPOINT = 'https://' + SECRETKEY + '.' + AUTHORS_ENDPOINT;
  // console.log(ENDPOINT)

  await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(console.log);
}