import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProject from "./Project/AddProject";
import UpdateProject from "./Project/UpdateProject";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/addProject" component={AddProject} />
        <Route exact path="/updateProject/:id" component={UpdateProject} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
