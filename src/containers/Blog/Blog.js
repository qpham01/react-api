import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

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
        <Switch>
          {this.state.auth ? (
            <Route path="/newpost" component={NewPost} />
          ) : null}
          <Route path="/newpost" component={NewPost} />
          <Route path="/" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/*put above line last to handle 404*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
