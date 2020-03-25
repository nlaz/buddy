import React, { Component } from "react";
import Emoji from "../components/Emoji";

class HelloEmoji extends Component {
  componentDidMount() {
    setTimeout(() => this.props.onDestroy(), 1000);
  }
  render() {
    return (
      <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
        <Emoji className="hello-emoji" value="👋" size="200" />
      </div>
    );
  }
}

export default HelloEmoji;
