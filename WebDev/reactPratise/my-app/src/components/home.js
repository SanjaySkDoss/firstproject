import React, { useState } from "react";
import Info from "./info"




function Home() {

  const [state, setState] = useState({
    username:""
  })
  function x(e) {
    var name = e.target.name;
    var value = e.target.value;
    setState({name:value});
    // eslint-disable-next-line no-unused-expressions
    alert(state);
    e.preventDefault();

    // eslint-disable-next-line no-unused-expressions

  }
  function y(e) {
    setState(e.target.value)
  }

  return (
    <div className="aa">
      <h3>sign up</h3>
      <div >
        <form action='/info' method="get">
          <label>Username: </label>
          <input type="text" required name="username" value={state.username} onChange={y} />

          <button type="submit" onSubmit={x}>Log in</button>
        </form>
      </div>
    </div>
  )



}
export default Home;