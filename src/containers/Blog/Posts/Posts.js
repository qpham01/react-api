import React from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

// import { Link } from "react-router-dom";

class Posts extends React.Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "Max" };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/" + id });
    // this.props.history.push("/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong...</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link key={post.id} to={"/" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + ":id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
