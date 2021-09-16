import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/gossip">Whats really in chips</Link>
    </li>
    <li>
      <Link to="/island">What they don't want you to know</Link>
    </li>
    <li>
      <Link to="/mrx">Who is Mr.X</Link>
    </li>
  </div>
  );
}
export default navbar;