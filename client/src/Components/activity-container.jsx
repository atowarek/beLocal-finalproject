import React from 'react'
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
import axios from 'axios'
import withUser from './withUser'

class ActivityContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  toggle = () => {
    this.setState(state => ({
      modal: !state.modal,
    }))
  }

  handleClick = id => () => {
    this.setState(state => ({
      modal: !state.modal,
    }))
    axios(`/userActivities`, {
      method: 'POST',
      data: {
        userId: this.props.user.id,
        activityId: id,
      },
    })
      .then(response => {
        this.goToDashboard()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(id)
  }

  goToDashboard = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    const {
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
      price,
      city,
    } = this.props
    return (
      <CardDeck className='container'>
        <Card>
          <CardImg className='image' src={picture} alt='Activity image cap' />
          <CardBody>
            <CardTitle>
              <b>{name}</b>
            </CardTitle>
            <CardSubtitle>
              <i>Category</i>: {category}
            </CardSubtitle>
            <CardText>
              <i>Price:</i> {price}
            </CardText>
            <CardText>
              <i>When:</i> {startDate} <i>at</i> {startHour}
            </CardText>
            <CardText>
              <i>Meeting point:</i> {address} ({city})
            </CardText>
            <Button color='primary' onClick={this.toggle}>
              Find out more!
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
                {name} <br /> {category}
              </ModalHeader>
              <ModalBody>
                {description}
                <hr /> Start: {startDate} at {startHour}
                <hr /> Finish: {endDate} at {endHour}
                <hr /> Meeting point: {address} ({city})
                <hr />
                <b>
                  Clicking on <i>Join the activity!</i> will add the activity to
                  your profile!
                </b>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='success'
                  title='Please log in before adding an activity'
                  onClick={this.handleClick(id)}>
                  Join the activity!
                </Button>{' '}
                {/* <Button color='warning' onClick={this.toggle}>
                  Message the organizer!
                </Button> */}
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </CardDeck>
    )
  }
}
export default withUser(ActivityContainer, { renderNull: false })
