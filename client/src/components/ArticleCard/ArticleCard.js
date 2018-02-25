import React from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
import { Query } from "mongoose";
import {Link} from "react-router-dom";


const ArticleCard = props => {
    return ( <div>
      <Row>
         {props.results.map(article => (
         <Col s={12} m={6}>
             <Card className="small" header={<CardTitle image={article.urlToImage}>
                   {article.title}
                 </CardTitle>} actions={[<a href="#">Read the Article</a>]}>
                 <div class="cardBox">
               <a href={article.url}>
                 <strong>{article.title}</strong>
               </a>
               <p>{props.sub}</p>
               </div>
             </Card>
           </Col>))}
           </Row>
       </div>
    )
}

export default ArticleCard

