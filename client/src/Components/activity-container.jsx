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
      modalActivitie: false,
      modalMessage: false,
      message:false
    }
  }

  toggle = () => {
    this.setState(state => ({
      modalActivitie: !state.modalActivitie,
      modalMessage: !state.modalMessage
    }))
  }

  /*toggleMessage = () => {
    this.setState(state => ({
      modalMessage: !state.modalMessage,
    }))
  }*/

  handleClick = id => () => {
    const {user} = this.props
    if(!user) {
      this.props.history.push('/login')
      return
    }

    const userId = this.props.user.id
    const hostingId = this.props.hosting.id
    if ( userId === hostingId) {
      this.setState(state => ({
        message:true,
        modalMessage:true,
      }))
      return
    }
    this.setState(state => ({
      modalActivitie: !state.modalActivitie,
    }))
    axios(`http://localhost:5000/userActivities`, {
      method: 'POST',
      data: {
        userId: userId,
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
    const newPrice = Math.floor(price * 0.7)
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
              <i>When:</i> {startDate} <i>at</i> {startHour}
            </CardText>
            <CardText>
              <i>Meeting point:</i> {address} ({city})
            </CardText>
            <CardText>
              <i>Price:</i> {price} <br />
              <i>Our price:</i> {newPrice}
            </CardText>
            <Button color='primary' onClick={this.toggle}>
              Find out more!
            </Button>
          </CardBody>
        </Card>
            
            <Modal isOpen={this.state.modalActivitie} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
                {name} <br /> {category}
              </ModalHeader>
              <ModalBody>
                {description}
                <hr /> Our price: {newPrice}
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
                </Button>
              </ModalFooter>
            </Modal>
            {this.state.message &&(
            <Modal isOpen={this.state.modalMessage} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
              <b>This is not possible</b>
              </ModalHeader>
              <ModalBody>
              You host this activity. Of course you're attending <span role="img" aria-label="wink">😉</span>
              </ModalBody>
            </Modal>) }
      </CardDeck>
    )
  }
}
export default withUser(ActivityContainer, { renderNull: false })
