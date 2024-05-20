import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

constructor(){
super();
this.state={
    articles:[],
    loading:false
}
}
async componentDidMount(){
   
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=20fb38afb1c8433eba7a7aabe50b0cd3";
    let data= await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles})
}


  render() {
    return (
      <div className="container my-3">
        <h2>NewsHoney - Top Headlines</h2>



        <div className="row">
        {this.state.articles.map((element)=>{

 return  <div className="col-md-4" key={element.url}>
<NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsurl={element.url}/>
</div>


        })}
         
          
        </div>
        <div className="container">
        <button type="button" class="mx-2 btn btn-dark">previous</button>
        <button type="button" class="mx-2 btn btn-dark">next</button>
        </div>
      </div>
    );
  }
}
