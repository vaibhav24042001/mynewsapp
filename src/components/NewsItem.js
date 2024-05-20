import React, { Component } from 'react'

export default class NewsItem extends Component {





    render() {

        let {title,description,imgUrl,newsurl}=this.props;
        
        
        
        
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl?imgUrl:"https://www.livemint.com/lm-img/img/2023/09/20/1600x900/Top_Gainer_Loser_1695188517120_1695188522963.webp"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
