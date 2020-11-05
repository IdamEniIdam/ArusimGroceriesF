import React, { Component } from "react";

class Successfull extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
      setTimeout(() => {
  
      },3000)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Your information have been Successfully submitted!!</p>
        <p>Thank you...</p>
      </div>
    );
  }
}
export default Successfull;
