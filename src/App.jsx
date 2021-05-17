import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import ErrorHandler from "./ErrorHandler";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <ErrorHandler>
              <Route path="/" component={UserList} exact />
            </ErrorHandler>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
