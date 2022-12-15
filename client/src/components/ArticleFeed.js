import React from 'react';
import Articles from './articles.json';

const ArticleFeed = () => {
    return (
        <div class= "list-group">

            {
                Articles && Articles.map( article => {
                    return (
                        <div className="box" key={ article.id }>
                            <h2> { article.title} </h2><br/>
                            { article.content }<br/> <br/>
                            </div>
                    )
                })
            }
         
        </div>
    );
};


        

export default ArticleFeed;
