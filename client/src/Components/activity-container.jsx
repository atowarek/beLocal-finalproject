import React, { useState } from 'react'
import './activity-container.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap'

const ActivityContainer = ({
  id,
  name,
  startDate,
  endDate,
  startHour,
  endHour,
  hostingId,
  longitude,
  latitude,
  address,
  description,
  category,
  picture,
  city,
}) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <CardDeck className='container'>
      <Card>
        <CardImg top width='40%' src={picture} alt='Activity image cap' />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>
            When: {startDate} at {startHour}
          </CardText>
          <CardText>Meeting point: {address}</CardText>
          <Button color='primary' onClick={toggle}>
            Find out more!
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              {name} <br /> {category}
            </ModalHeader>
            <ModalBody>{description}</ModalBody>
            <ModalFooter>
              <Button color='success' onClick={toggle}>
                Join the activity!
              </Button>{' '}
              <Button color='warning' onClick={toggle}>
                Message the organizer!
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default ActivityContainer
