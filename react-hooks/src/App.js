import React, { Component } from "react";

import { useState, useEffect } from "react";

const App = () => {
  //state

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );

  const [loading, setLoading] = useState(false);
  //fetch news
  const fetchNews = () => {
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((data) => (setNews(data.hits), setLoading(false)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  return (
    <>
      <div>
        <h2>News</h2>
        {loading ? <h2> Loading... </h2> : ""}
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchQuery} onChange={handleChange} />
          <button>Search</button>
        </form>
        {news.map((blog, index) => (
          <p key={index}>{blog.title}</p>
        ))}
      </div>
    </>
  );
};

export default App;

// const App = () => {
//   useEffect(() => {
//     document.title = `Clicked ${state} times `;
//   })
//   const [state, setState] = useState(0);
//   const increment = () => {
//     setState(state + 1);
//   };
//   return (
//     <>
//       <h2>counter app 2</h2>
//       <button onClick={increment}> {state} </button>
//     </>
//   );
// };

// export default App;

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times `
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times `
//   }

//   render() {
//     return (
//       <div>
//         <h2>counter app</h2>
//         <button onClick={this.increment}> Clicked {this.state.count} times</button>
//       </div>
//     )
//   }
// }

// export default App;
