import React, { Component } from 'react';
import './App.css';
import { Container, Header, Button, Icon, Modal } from "semantic-ui-react"; 
import Flashcards from "./Flashcards";
import FlashcardForm from "./FlashcardForm";
//import Flashcards2 from "./Flashcards2"

class App extends Component {
state = {
  flashcards: [
    { id: 1, question: "What is the Matrix?", answer: "follow the white rabbit", },
    { id: 2, question: "What is the meaning of life", answer: "The answer is 42", },
    { id: 3, question: "Question this", answer: "Answer this", },
  ]
}

addFlashcard = (flashcard) => {
  console.log('Add :>> ', flashcard);
  const newFlashcard = { ...flashcard, id: Math.random()}
  this.setState({
    flashcards: [newFlashcard, ...this.state.flashcards],
  })
}

  render() {
    return (
      <Container>
        <Header as="h1">Flash Cards</Header>
        <FlashcardForm addFlashcard_via_FlashcardForm={this.addFlashcard} />

        <Flashcards flashcards={this.state.flashcards} />
       
      </Container>
    );
  }
}

export default App;
