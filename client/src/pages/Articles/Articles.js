import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Nav} from "../../components/Nav";
import {Form} from "../../components/Form"
import {Row, Input, Col, Button, Icon, Card, CardTitle, Modal } from "react-materialize";
import ArticleCard from "../../components/ArticleCard"
import "../../utils/main.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {formatDate,parseDate} from "react-day-picker/moment";
import {moment} from "moment";
import $ from "jquery";



class Article extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: new Date(),
    source: "wired"
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

    if (this.state.topic) {
      API.searchArticles({
        query:this.state.topic,
        source: this.state.source,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
        .then(res => {
          this.setState({
            articles: res.data.articles,
            startDate: "",
            endDate:""
          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return <div>
        <Nav />
        <div>
          {/* THis is the beginning of the modal and the form */}
          <Modal header="Modal Header" id="searchModal" fixedFooter trigger={<Row>
                <Col s={5} m={5} />
                <div class="modalForSearch">
                  <Button>Search For Articles</Button>
                </div>
              </Row>}>
              {/* This is the input for the keyword for the user */}
            <Input type="text" placeholder="Search" name="topic" value={this.state.topic} onChange={this.handleInputChange} />

            {/* This is the input for the source they would like to search */}
            <Input s={12} type="select" name="source" value={this.state.source} onChange={this.handleInputChange} label="Select A Source" icon="local_library" defaultValue="Wired">
              <option value="wired">Wired</option>
              <option value="techcrunch">Tech Crunch</option>
              <option value="bloomberg">Bloomberg</option>
            </Input>


            <p>How far back would you like to search?</p>
            <DayPickerInput onDayChange={day => {
                const formatEnd = formatDate(day, "YYYY-MM-DD");
                this.setState({ startDate: formatEnd });
              }} />
            <p>Which date would you like to start at?</p>
            <DayPickerInput placeholder={`${formatDate(new Date(), "YYYY-MM-DD")}`} todayButton="Go To Today" onDayChange={day => {
                const newDate = formatDate(day, "YYYY-MM-DD");
                this.setState({ endDate: newDate });
              }} />

            <Input type="submit" placeholder="Submit" onClick={this.handleFormSubmit} />
          </Modal>
        </div>;
        <div className="container">
          {this.state.articles ? <Row>
              {this.state.articles.map(article => <Col s={12} m={6}>
                  <Card className="large" header={<CardTitle image={article.urlToImage}>
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
