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
    searchDate: "",
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
      API.searchArticles({
        query:this.state.topic
      })
        .then(res => {
          console.log(res.data.articles)
          this.setState({articles: res.data.articles})
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return <div>
        <Nav />
        <Row>
          <Col s={2} m={3}></Col>
          <Col s={4} m={3}>
            <Input type="text" placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />
          </Col>
          <Col s={4} m={3}>
            <Input type="submit" placeholder="Search" onClick={this.handleFormSubmit} />
          </Col>
        </Row>



        <div className="container">
          {this.state.articles.length ? <Row>
              {this.state.articles.map(article => <div>
                  <Col s={4} m={3}>
                    <ArticleCard image={article.urlToImage} title={article.title} url={article.url} sub={article.description} />
                  </Col>
                </div>)}
            </Row> : <h1>No Results Found</h1>}
        </div>
      </div>;
  }

}


export default Article;
