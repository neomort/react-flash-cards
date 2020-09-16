
import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Flashcards2 = ({flashcards}) => {
  const [open, setOpen] = React.useState(false)
  return flashcards.map(card => 
    (
    <Modal
      id={card.id}
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button id={card.id}>{card.question}</Button>}
      
      
    >
      <Header icon>
        <Icon name='flag checkered' />
        Answer
      </Header>
      <Modal.Content>
        <p>
          {card.answer}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='trash alternate outline icon' /> Delete
        </Button>
      </Modal.Actions>
    </Modal>

  )
  
  
  )
 
}


export default Flashcards2;

// to read more: https://stackoverflow.com/questions/45536886/render-multiple-modals-correctly-with-map-in-react-bootstrap
