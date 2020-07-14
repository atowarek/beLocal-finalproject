import React, { Component } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import QrCode from './qr-code'
import withUser from './withUser'
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'

class Dashboard extends Component {
  state = {
    activities: [],
    userActivities: [],
  }

  componentDidMount = () => {
    this.getActivities()
    this.getUserActivities()
  }

  getUserActivities = () => {
    const { id } = this.props.user
    axios(`http://localhost:5000/userActivities/${id}`)
      .then(response => {
        //console.log(response.data)
        this.setState({ userActivities: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  getActivities = () => {
    axios(`http://localhost:5000/activities`)
      .then(response => {
        this.setState({ activities: response.data })
        //console.log(this.state.activities)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  addActivity = event => {
    event.preventDefault()
    this.props.history.push('/activity')
  }

  toggle = () => {
    this.setState(state => ({
      modal: !state.modal,
    }))
  }

  loginRedirect = () => {
    this.props.history.push('/login')
  }

  deleteUserActivity = id => () => {
    axios(`http://localhost:5000/userActivities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .catch(error => {
        console.log(error)
      })

      .then(response => {
        //console.log(response.data)
        this.getUserActivities()
      })
  }

  deleteActivity = id => () => {
    fetch(`http://localhost:5000/activities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(() => {
        this.getActivities()
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }

  render() {
    const { activities, userActivities } = this.state
    const { user } = this.props
    if (!user) {
      return (
        <div>
          <h1>You need to log in first</h1>
          <Button color='primary' onClick={this.loginRedirect}>
            Login
          </Button>
        </div>
      )
    }
    return (
      <div className='dashboard'>
        <h2> Hi, {user.name}!</h2> <br />
        <h3>
          Here you can see the activities you organize or participate. <br />
          Or create a new one!
        </h3>
        <br />
        {/* move this button to the right? or in the upper right corner?*/}
        <Button className='btn' onClick={this.addActivity}>
          Create a new activity!
        </Button>
        <h3> MY ACTIVITIES: </h3>
        <Container className='themed-container' fluid='sm'>
          <Row>
            <Col xs='6' className='column'>
              <h4> participating: </h4>
              <Row>
                {userActivities.map((activities, index) => {
                  const {
                    picture,
                    name,
                    address,
                    city,
                    startDate,
                    endDate,
                    startHour,
                    endHour,
                  } = activities
                  return (
                    <Card key={index}>
                      <CardImg
                        className='image'
                        src={activities.activitie.picture}
                      />
                      <CardBody>
                        <CardTitle>{activities.activitie.name}</CardTitle>
                        <CardSubtitle>
                          {activities.activitie.address} (
                          {activities.activitie.city})
                        </CardSubtitle>
                        <CardText>
                          {dayjs(activities.activitie.startDate).format(
                            'DD/MM/YYYY'
                          )}
                          -
                          {dayjs(activities.activitie.endDate).format(
                            'DD/MM/YYYY'
                          )}
                        </CardText>
                        <CardText>
                          {activities.activitie.startHour}-
                          {activities.activitie.endHour}
                        </CardText>
                        <Button
                          onClick={this.deleteUserActivity(
                            activities.activitie.id
                          )}>
                          Delete activity
                        </Button>
                        <Button color='primary' onClick={this.toggle}>
                          Generate QR code!
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Scan this QR code for a 20% discount on your
                            selected activity!
                          </ModalHeader>
                          <ModalBody>
                            <QrCode />
                          </ModalBody>
                          <ModalFooter>
                            Send the QR Code by email (??)
                          </ModalFooter>
                        </Modal>
                      </CardBody>
                    </Card>
                  )
                })}
              </Row>
            </Col>
            <Col xs='6'>
              <h4> organizing: </h4>
              <Row>
                {activities.map(
                  activity =>
                    activity.hostingId === user.id && (
                      <Card key={activity.id}>
                        <CardImg className='image' src={activity.picture} />
                        <CardBody>
                          <CardTitle>{activity.name}</CardTitle>
                          <CardSubtitle>
                            {activity.address} ({activity.city})
                          </CardSubtitle>
                          <CardText>
                            {dayjs(activity.startDate).format('DD/MM/YYYY')}-
                            {dayjs(activity.endDate).format('DD/MM/YYYY')}
                          </CardText>
                          <CardText>
                            {activity.startHour}-{activity.endHour}
                          </CardText>
                          <Button onClick={this.deleteActivity(activity.id)}>
                            Delete activity
                          </Button>
                        </CardBody>
                      </Card>
                    )
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withUser(Dashboard)
