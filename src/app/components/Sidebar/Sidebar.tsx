import React from "react";
import Navigation from "./Navigation/Navigation";
import "./_sidebar.scss";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo"></div>
        <div className="profile"></div>
        <Navigation />
      </div>
    );
  }
}
