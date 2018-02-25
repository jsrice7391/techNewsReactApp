import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Nav} from "../../components/Nav";
import {Form} from "../../components/Form"
import {Row, Input, Col, Button, Icon, Card, CardTitle, Modal } from "react-materialize";
import ArticleCard from "../../components/ArticleCard"
import DatePicker from "react-datepicker";
import "../../utils/main.css";


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

  saveTheArticle = article => {
    API.saveTheArticle(article)
    .then(res => {
      console.log("Saved the article")
    }).catch(err  => {
      console.log(err);
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.searchArticles({
        query:this.state.topic,
        source: "vice-news",
        startDate: this.state.searchDate,
        endDate: this.state.endDate
      })
        .then(res => {
          this.setState({articles: res.data.articles})
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return <div>
        <Nav />
        <Row>
          <Col s={2} m={3} />
          <Col s={4} m={3}>
            <Input type="text" placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />
          </Col>
          <Col s={4} m={3} />
          <Col s={4} m={3} />
        </Row>
        <div>
          <Modal header="Modal Header" fixedFooter trigger={<Button>
                MODAL
              </Button>}>
            <Input type="text" placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />
            <Input type="date" placeholder="Start Date" className="datepicker" data-value={this.state.searchDate} />
            <Input type="date" placeholder="End Date" className="datepicker" data-value={this.state.endDate} />
            <Input type="submit" placeholder="Submit" onClick={this.handleFormSubmit} />
          </Modal>
        </div>;
        <div className="container">
          {this.state.articles ? <Row>
              {this.state.articles.map(article => <Col s={12} m={6}>
                  <Card className="small" header={<CardTitle image={article.urlToImage}>
                        <div class="articleHeadline">
                          <a href={article.url}>{article.title}</a>
                        </div>
                      </CardTitle>} actions={[<Button className="saverButton" waves="light" onClick={() => this.saveTheArticle(article)}>
                        Save<Icon left>save</Icon>
                      </Button>]}>
                    <strong>{article.description}</strong>
                  </Card>
                </Col>)}
            </Row> : <h1>No Results Found</h1>}
        </div>
      </div>;
  }

}


export default Article;
