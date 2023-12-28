import React from "react";
import paw from "./paw.png";

class Header extends React.Component {
  render() {
    return (
      <div className="heading">
        <img alt="paw" src={paw} />
        <h1>Survey Tiger</h1>
      </div>
    );
  }
}
export default Header;
