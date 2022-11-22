import React from 'react'
import './index.css'

function Explore() {

const articles = [
  {
    img: "https://sm.imgix.net/20/09/bruno-fernandes.jpg?w=640&h=480&auto=compress,format&fit=clip",
    topic: "Sports",
    title: "Bruno Steps up for portugal",
  },
  {
    img: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/call-of-duty-2022-tease-modern-warfare-2.jpg",
    topic: "Gaming",
    title: "MW2 sets new records",
  },
  {
    img: "https://static01.nyt.com/images/2022/11/17/business/17twitter-ftc-musk/17twitter-ftc-musk-videoSixteenByNine3000.jpg",
    topic: "Politics",
    title: "Elons Twitter takeover",
  },
  {
    img: "https://static.independent.co.uk/2022/10/30/12/newFile.jpg?quality=75&width=982&height=726&auto=webp",
    topic: "Film",
    title: "Cavill steps down from  the Witcher",
  },
  {
    img: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/call-of-duty-2022-tease-modern-warfare-2.jpg",
    topic: "Gaming",
    title: "MW2 sets new records",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    topic: "Politics",
    title: "Elons Twitter takeover",
  },
  {
    img: "https://i.guim.co.uk/img/media/1af905f750e1dc85eb490a3ec20bf76fb3ac51f7/0_486_2518_1509/master/2518.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f50c0895969f6e081f7fb867c675fbb2",
    topic: "Film",
    title: "Cavill steps down from  the Witcher",
  },
];
  

  return (
    <div className="exploreContainer">
      <p className="exploreTitle">#Explore</p>
      <div className="exploreCards">
        {articles.map((article) => {
          return (
            <div className="exploreCard">
              <img className="articleImg" src={article.img}></img>
              <div className="cardText">
                <p className="articleTopic"> #{article.topic}</p>
                <p className="articleTitle"> {article.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore