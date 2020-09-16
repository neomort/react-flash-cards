import React from "react";
import { Form } from "semantic-ui-react";

export default class FlashcardForm extends React.Component{
state = {
    question: "",
    answer: "",
}

handleSubmit = (e) => {
    console.log(this.state);
    this.setState({
        question: "",
        answer: "" ,
    })

    this.props.addFlashcard_via_FlashcardForm(this.state)
};

handleChange = (e) => {
this.setState({
    [e.target.name]: e.target.value,

})
}

render(){
    const {question, answer} = this.state
    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                required
                label="Question"
                placeholder="Question"
                name="question"
                value={question}
                onChange={this.handleChange}
            />
            <Form.Input
            required
            label="Answer"
            placeholder="Answer"
            name="answer"
            value={answer}
            onChange={this.handleChange}
            />
            <Form.Button color="green">Add</Form.Button>
            </Form.Group>
        </Form>
    )
}
}
