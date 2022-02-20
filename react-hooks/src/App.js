import React, { Component } from "react";

import { useState, useEffect } from "react";

const App = () => {
  
  const [state , setState] = useState(0)
  const increment = () => {
    setState(state + 1)

  }
  return (
    <>
      <h2>counter app 2</h2>
      <button onClick={increment}> {state} </button>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
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
