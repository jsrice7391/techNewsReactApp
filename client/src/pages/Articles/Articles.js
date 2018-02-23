import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Nav} from "../../components/Nav";
import {Col} from "react-materialize"
import {Form} from "../../components/Form"
import {Row, Input} from "react-materialize";


class Books extends Component {
  state = {
    articles: [],
    topic: "",
    searchYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>{
        console.log(res.data.articles)
        this.setState({ articles: res.data.articles, topic: "", startYear: "", endYear: "" })
     
      })
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.getArticles({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return <div>
        <Nav />
        <Row>
          <Input placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />
        </Row>
        <Row>
          <Input placeholder="Year" name="searchYear" value={this.state.searchYear} onChange={this.handleInputChange} />
        </Row>
        <Row>
          <Input placeholder="End Year" name="endYear" value={this.state.endYear} onChange={this.handleInputChange} />
        </Row>

        {this.state.articles.map(article => {
         console.log(article.title)
        })}
      </div>;
  }




}

export default Books;
