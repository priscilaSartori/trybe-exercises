import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }


  handleButtonOne() {
    // console.log('"this" do botão 1 :', this);
    const { clicksBtnOne } = this.state;
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`);
    });
  }

  handleButtonTwo() {
    // console.log('"this" do botão 2 :', this);
    const { clicksBtnTwo } = this.state;
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksBtnTwo)}`);
    });
  }

  handleButtonThree() {
    // console.log('"this" do botão 3 :', this);
    const { clicksBtnThree } = this.state;
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  // handleButtonOne = () => {
  //   console.log('"this" do botão 1 :', this);
  // }

  // handleButtonTwo = () => {
  //   console.log('"this" do botão 2 :', this);
  // }

  // handleButtonThree = () => {
  //   console.log('"this" do botão 3 :', this);
  // }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleButtonOne}
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          {`Cliques botão 1: ${clicksBtnOne}`}
        </button>
        <button
          type="button"
          onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          {`Cliques botão 2: ${clicksBtnTwo}`}
        </button>
        <button
          type="button"
          onClick={this.handleButtonThree}
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          {`Cliques botão 3: ${clicksBtnThree}`}
        </button>
      </div>
    );
  }
}

export default App;
