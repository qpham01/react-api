import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
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
          <Route path="/newpost" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
