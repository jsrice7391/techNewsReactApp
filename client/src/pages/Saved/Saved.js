import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container} from "react-materialize"
import API from "../../utils/API";
import { Nav } from "../../components/Nav";

class Detail extends Component {
  state = {
    articles: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSaved().then(res => {
      console.log(res)
      this.setState({articles: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    return (

      <div>
        <Nav/>
      {this.state.articles.map(article => (
        <h1>{article.title}</h1>
      ))}
      </div>



    );
  }
}

export default Detail;
