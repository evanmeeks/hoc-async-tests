import React, { Component } from "react";
import Request from "./components/request";
import withFetching from "./containers/WithFetching";
import withXhr from "./containers/WithXhr";
import withAxios from "./containers/WithAxios";
import withJquery from "./containers/WithJquery";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    const urls = [
      "https://jsonplaceholder.typicode.com/postses",
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    ];

    this.setState({
      urls
    });
  }

  methodsList(urls, method) {
    return urls.map((url, k) => {
      const AppWithFetch = withFetching(url, method)(Request);
      const AppWithXhr = withXhr(url, method)(Request);
      const AppWithAxios = withAxios(url, method)(Request);
      const AppWithJquery = withJquery(url, method)(Request);
      return (
        <div>
          <AppWithFetch />
          <AppWithXhr />
          <AppWithAxios />
          <AppWithJquery />
        </div>
      );
    });
  }

  render() {
    const urls = this.state.urls;

    return (
      <div className="App ">
        <div>
          <p> Why is the code wrapped???</p>
          <p> A: Because the source is minified remotely! Wow.</p>
          <p>
            <a
              alt="HOC (Higher Order Components) Async Methods"
              href="https://codesandbox.io/s/qzr0qxlpkq"
            >
              {" "}
              The solution on CodeSandbox
            </a>{" "}
          </p>
        </div>
        <div>{this.methodsList(urls, "bad")}</div>
        {/* <div>{this.methodsList(urls, 'good')}</div> */}
      </div>
    );
  }
}

export default App;
