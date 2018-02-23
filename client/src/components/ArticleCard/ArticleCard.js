import React from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
import { Query } from "mongoose";


const ArticleCard = props => {
     return( 
     <div>
     <Card horizontal header={<CardTitle image={props.image} />} actions={[<a
            href={props.url}>
            This is a link
          </a>]}>
       <a href={props.url}><h4>{props.title}</h4></a>
        <p>{props.sub}</p>
      </Card>
      </div>
     )

}

export default ArticleCard

