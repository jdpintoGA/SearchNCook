# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Project

# Search'N Cook

Visit at https://jdpintoga.github.io/searchncook/

# Technologies

• React + Hooks

• JavaScript

• Fetch API

# About

Search’N Cook is a search engine webpage that makes requests to an API to fetch data, in this case, cooking recipes. Since the API only allows 5 requests per minute, I arranged the code to fetch only the filtered data requested by the user.

```
const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState('')
const [query, setQuery] = useState('chicken')

useEffect(() => {
getRecipes()
}, [query])

const getRecipes = async () => {
const request = await fetch(
`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`,
)
const data = await request.json()
setRecipes(data.hits)
console.log(data.hits)
}

```

The information displayed on the website Is a map function of the filtered data. The styling of the website was made with pure SCSS.

```
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

* {
  margin: 0;
}
.header {
  font-family: 'Satisfy', cursive;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  height: 150px;
  width: 100vw;
  justify-content: center;
  border-bottom: 5px solid rgb(0, 0, 0);
  h1 {
    margin-top: 35px;
    font-size: 8em;
    text-shadow: 3px 3px rgb(255, 255, 255);
  }
}

.form {
  margin-top: 0.5%;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  input {
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid rgb(0, 0, 0);
    background-color: rgb(182, 206, 206);
    margin-left: 50px;
    border-radius: 3px;
    height: 25px;
    width: 700px;
    font-size: 17px;
    &:hover {
      background-color: rgb(255, 255, 255);
    }
    &:focus {
      background-color: rgb(255, 255, 255);
    }
    &::placeholder {
      color: rgb(0, 0, 0);
      font-size: 15px;
      font-family: 'Satisfy', cursive;
    }
  }
  button {
    border: 2px solid rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    width: 80px;
    height: 30px;
    border-radius: 3px;
    margin-left: 5px;
    font-size: 0.8em;
    &:hover {
      background-color: rgba(184, 22, 22, 0.9);
      color: white;
    }
  }
}

.headerSpace {
  height: 220px;
  background-image: linear-gradient(rgb(167, 253, 150), rgb(255, 150, 80));
}

.App {
  background-image: linear-gradient(rgb(255, 150, 80), rgb(255, 133, 51));
  height: 150%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.wrap {
  display: flex;
  flex-flow: wrap;
  height: 200px;
  width: 350px;
  color: rgb(61, 10, 61);
  margin: 50px 0;
  background-color: rgba(194, 253, 209, 0.5);
  border: 4px solid rgba(0, 0, 0, 1);
  border-radius: 10px;
  padding: 5px;
  .title {
    font-size: 2.2em;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    width: 70%;
    height: 80%;
    margin-top: -5%;
    margin-left: 25%;
    text-overflow: ellipsis;
    overflow: scroll;
  }
  ul {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    text-overflow: ellipsis;
    overflow: scroll;
    height: 300px;
    width: 100%;
    text-align: justify;
    background-color: rgba(218, 255, 233, 0.1);
    border-radius: 10px;
    &:hover {
      background-color: rgba(218, 255, 233, 1);
    }
  }
  img {
    margin-left: -45px;
    margin-top: -90px;
    border: 5px solid rgba(0, 0, 0, 1);
    border-radius: 50%;
    max-width: 300px;
    max-height: 150px;
  }
}

.wrap::after {
  visibility: hidden;
}

footer {
  font-family: 'Satisfy', cursive;

  width: 100vw;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(0, 0, 0);
  color: rgb(170, 170, 170);
  a {
    color: rgb(170, 170, 170);
    padding-top: 3px;
    text-align: left;
    width: 200px;
    font-size: x-large;
    text-decoration: none;
  }
  small {
    padding-top: 3px;
    font-family: 'Satisfy', cursive;
    font-size: x-large;
  }
}


```

It’s a simple project that introduced and deepened my knowledge of React Hooks. I am also pleased with the styling created with the time available before the deadline.

Solo Project realized in less than 24 Hours.

# Future Development

Adding Ingredient's and create Acessability to the recipe's steps.
The current Ingredient list code is commented, it was not perfected when delivering.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
