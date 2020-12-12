// Libs
import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

class App extends Component {
  state = {
    filmes: [],
    series: []
  };

  //filmes
  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API}/movies`);

    this.setState({
      filmes: response.data
    });

    const filmes = response.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      filmes: filmes
    });

    //séries
    const responseS = await axios.get(`${process.env.REACT_APP_API}/shows`);
    this.setState({
      series: responseS.data
    });

    const series = responseS.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      series: series
    });
  }

  render() {
    return (
      <div className="divMaps">
        <div className="ContainerTitle">
          <h1 className="title">Maailed Movies and Series</h1>
        </div>
        <h2 className="title-description">Movies:</h2>
        <div className="divMap-filmes">
          {this.state.filmes.map((item, index) => (
            <div className="boxMap-returnFilmes" key={index}>
              <h1 className="titleFilmes">{item.title}</h1>
              <img src={item.poster_path} alt="" className="imagens-filmes" />
              <p className="descriptions">{item.overview}</p>
            </div>
          ))}
        </div>
        <h2 className="title-description">Series:</h2>
        <div className="divMap-series">
          {this.state.series.map((item, index) => (
            <div className="boxMap-returnSeries" key={index}>
              <h1 className="titleFilmes">{item.name}</h1>
              <img src={item.poster_path} alt="" className="imagens-filmes" />
              <p className="descriptions">{item.overview}</p>
            </div>
          ))}
        </div>
        <div className="divFooter">
          <div className="divFollow">
            <h1 className="titleFollow">Follow Us</h1>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/?hl=pt-br">Instagram</a>
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
          <div className="divLinks">
            <h1 className="titleLinks">Links</h1>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Policy and Privacy</a>
          </div>
          <div className="divGuide">
            <h1 className="titleGuide">Guidelines</h1>
            <a href="">Instructions</a>
            <a href="">Doubts</a>
            <a href="">Problems</a>
          </div>
        </div>
        <p className="direitos">All rights reserved</p>
      </div>
    );
  }
}

export default App;
