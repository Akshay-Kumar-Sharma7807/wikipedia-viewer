import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState("");

  // const randomArticle = () => {

  // }


  const submitForm = (e) => {
    e.preventDefault();
    var title = search;
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    var page = 'https://en.wikipedia.org/?curid=';

    fetch(api + title + cb, {
      mode: "no-cors",
    }).then((res) => {
      console.log(res);
      // console.log(res.json());
      return res.json()
      // console.log(res);
    })
      .then((data) => {
        console.log(data);
      })
  }
  return (
    <div className="App">
      <main className="App-main">
        <h1 className="heading">Wikipedia viewer</h1>
        <form onSubmit={submitForm}>
          <input
            placeholder="Search Wikipedia"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autofocus
          />
          <button type="submit">
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </button>
        </form>
        <a href="https://en.wikipedia.org/wiki/Special:Random" style={{ margin: "10px auto" }}>
          <button className="random-article">
            Random article
          </button>
        </a>
      </main>
    </div>
  )
}

export default App
