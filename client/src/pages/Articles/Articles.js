import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Nav} from "../../components/Nav";
import {Form} from "../../components/Form"
import {Row, Input, Col,} from "react-materialize";
import ArticleCard from "../../components/ArticleCard"
import DatePicker from "react-datepicker";

class Article extends Component {
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
      .then(res => this.loadArticles())
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
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return <div>
        <Nav />
        <div className="container">
          <Row>
            <Input placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />
          </Row>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
          <DatePicker selected={this.state.endDate} onChange={this.handleChange} />

          <Row>
            {this.state.articles.map(article => <div>
                <Col s={4} m={3}>
                  <ArticleCard image={article.urlToImage} title={article.title} url={article.url} sub={article.description} />
                </Col>
              </div>)}
          </Row>
        </div>
      </div>;
  }

}


export default Article;
