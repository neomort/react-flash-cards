import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import Flashcards from "./Flashcards";
class App extends Component {
state = {
  flashcards: [
    { id: 1, question: "What is the Matrix?", answer: "follow the white rabbit", },
    { id: 2, question: "What is the meaning of life", answer: "The answer is 42", },
    { id: 3, question: "Question this", answer: "Answer this", },
  ]
}

  render() {
    return (
      <Container>
        <Header as="h1">Flash Cards</Header>
        <Flashcards flashcards={this.state.flashcards} />
      </Container>
    );
  }
}

export default App;
