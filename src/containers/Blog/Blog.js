import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../common/asyncComponent";

const LazyNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: false
  };
  render() {
    return (
      <div className="Blogs">
        <header>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="my-active"
                activeStyle={{ color: "#fa923f", textDecoration: "underline" }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/newpost",
                  hash: "#submit",
                  search: "?query=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        <Route exact path="/" component={Posts} />
        <Switch>
          {this.state.auth ? (
            <Route path="/newpost" component={LazyNewPost} />
          ) : null}
          <Route path="/newpost" component={LazyNewPost} />
          {/*<Route render={() => <h1>Not found</h1>} />*/}
          {/*put above line last to handle 404*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
