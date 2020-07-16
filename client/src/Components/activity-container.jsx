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
import emailjs from 'emailjs-com'


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
    axios(`http://localhost:5000/userActivities`, {
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

    let templateParams = {
      'email': this.props.user.mail,
      'name': this.props.user.name,
      'date': this.props.startDate,
      'activity': this.props.name,
      'hour': this.props.startHour,
      'address': this.props.address,
      'location': this.props.city,
      'host': this.props.hosting.name,
      'phone': this.props.hosting.phone,
      'mail': this.props.hosting.mail
    }

    const userId = process.env.YOUR_USER_ID

    emailjs.send('default_service', 'confirmation_email', templateParams, 'user_2853rwzQwOgtGRHnfnFJO')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    let params = {
      'activity': this.props.name,
      'name': this.props.hosting.name,
      'date': this.props.startDate,
      'hour': this.props.startHour,
      'address': this.props.address,
      'city': this.props.city,
      'attendee': this.props.user.name,
      'phone': this.props.user.phone,
      'mail': this.props.user.mail,
      'email': this.props.hosting.mail
    }

    const key = process.env.MY_USER_ID

    emailjs.send('default_service', 'template_7GTJlsxc', params, 'user_wq89NyyrCjVtaFyHAKKin')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
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
      hosting,
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
