import React, { Component } from "react";
import { Image } from "react-bootstrap";
import shecure from "../images/shecure.png";
import "../../App.css";
export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Image src={shecure} className="img-home" />
        <h1><b>Safest Route</b></h1>
        <br></br>
        <br></br>
        <br></br>
        
        <h3 align ="center"><b>About</b></h3>
        <br></br>
        <br></br>
        <br></br>
        <p align ="justify">
          Saathi is a web application that uses various Algorithms to provide
          safe routes for passengers to travel. 
          The application provides three functionalities as of now:
          <ul>
              <li>Search safe routes: Routes are assigned a safety score based on some parameters</li>
              <li>My location: Shows nearby public places</li>
              <li>It also has the facility to take the feedback from the user after providing the safer route where the user can provide their experience with the route</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Home;
