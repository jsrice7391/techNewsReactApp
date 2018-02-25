import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container, Parallax} from "react-materialize"
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
    return <div>
        <Nav />
        <Container>
          {this.state.articles.map(article => <div>
              <Parallax imageSrc={article.urlToImage} />
              <div className="section white">
                <div className="row container">
                 <a href={article.url}><h3 className="header">
                  {article.title}
                  </h3></a>
                  <p className="grey-text text-darken-3 lighten-3">
                    {article.description}
                  </p>
                  <em>{article.author}</em>
                </div>
              </div>
            </div>)}
        </Container>
      </div>;
  }
}

export default Detail;
