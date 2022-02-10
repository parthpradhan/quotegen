import React,{useState,useEffect,useRef} from "react";
import "./App.css";
import Typist from 'react-typist';
import logo from './logo.png';
import me from './me.png';
import github from './github.png';
import insta from './insta.png';
export default function App() {
  const [quotes,setQuotes] = useState('');
  const textRef = useRef();
  let colors =["#000000","#36454F","#964B00","#006400","#a9a9a9"];
  const getQuotes = () =>{
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random()* data.length);
      setQuotes(data[randomNum]);
    });
  };
  useEffect(()=>{
    getQuotes();
  },[]);
  useEffect(()=>{
    textRef.current.style.color =colors[Math.floor(Math.random()*colors.length)];
  },[quotes])
  return (
    <div className="App">
      <div className="header">
        <div className="picbox">
        <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="textbox">
        <h1 className="title">Qweet</h1>
        </div>
        <div className="linkbox">
          <a className="link" href="https://github.com/parthpradhan" alt="github"><img src={github}alt="github"/></a>
          <a className="link" href="https://www.instagram.com/thesoulfrost/" alt="insta"><img  src={insta}alt="insta"/></a>
         
            <a className="link" href="https://parthpradhan.github.io/soulfrostgem.io/"><img  src={me}alt="my site"/></a>
        </div>
      </div>
      <div className="quotebox">
      <div className="intro">
        <Typist>
        <p className="introText">
        <h3>Fundamentals</h3>
        <Typist.Delay ms={900} />
        Press -> Quotes to get new quotes<br></br>
        Press -> Tweet to automatically tweet the respective quote.
     </p>
        </Typist>
       
      </div>
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p className="Author">Author: {quotes.author}</p>
        <div className="btnContainer">
          <button className="btn" onClick={getQuotes}>Quotes</button>
          <button className="btn">
          <a 
          href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="btn">
            Tweet</a>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

