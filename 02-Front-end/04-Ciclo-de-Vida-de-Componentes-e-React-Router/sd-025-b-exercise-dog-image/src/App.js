import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      imageUrl: '',
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/')[4];
    alert(dogBreed);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => this.setState({ imageUrl: data.message, isLoading: false }));
  };

  render() {
    const { imageUrl, isLoading } = this.state;
    if (isLoading) return <h2>Loading...</h2>;
    return (
      <div>
        <h1>Dog image - Imagens de Doguinhos</h1>
        <p>O doguinho selecionado é:</p>
        <img src={ imageUrl } alt="Doguinho aleatório" />
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
