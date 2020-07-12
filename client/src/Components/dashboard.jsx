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
    //loggedIn: false,
    activities: [],
    userActivities: [],
  }

  componentDidMount = () => {
    this.getActivities()
    this.getUserActivities()
  }

  getUserActivities = () => {
    axios(`http://localhost:5000/userActivities/2`) // change to id when user is login
      .then(response => {
        this.setState({ userActivities: response.data })
        console.log(response.data)
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

  render() {
    const { activities, userActivities } = this.state
    const { user } = this.props
    if (!user) {
      return (
        <div>
          <h1>You need to log in first</h1>
          <Button color='primary' onClick={this.loginRedirect}>
            Login
          </Button>{' '}
        </div>
      )
    }
    return (
      <div>
        <h1> Hi, {user.name}!</h1>
        Here you can see your activities or add a new one! <br />
        <div className='container'>
          <div>
            <h2>MY ACTIVITIES:</h2>
            <div>
              <h3>participating:</h3>
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
                  <Container key={index}>
                    <Row xs='4'>
                      <Col>
                        <Card>
                          <CardImg
                            top
                            width='100%'
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
                              {activities.activitie.endHour}{' '}
                            </CardText>{' '}
                            <Button onClick={this.toggle}>
                              Generate QR code!
                            </Button>
                            <Modal
                              isOpen={this.state.modal}
                              toggle={this.toggle}>
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
                      </Col>
                    </Row>
                  </Container>
                )
              })}
            </div>
            <div>
              <h3>organizing:</h3>
              {activities.map(
                activity =>
                  activity.hostingId === user.id && (
                    <Container key={activity.id}>
                      <Row xs='4'>
                        <Col>
                          <Card>
                            <CardImg className='image' src={activity.picture} />
                            <CardBody>
                              <CardTitle>{activity.name}</CardTitle>
                              <CardSubtitle>
                                {activity.address} ({activity.city})
                              </CardSubtitle>
                              <CardText>
                                {dayjs(activity.startDate).format('DD/MM/YYYY')}
                                -{dayjs(activity.endDate).format('DD/MM/YYYY')}
                              </CardText>
                              <CardText>
                                {activity.startHour}-{activity.endHour}{' '}
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  )
              )}
            </div>
            <hr />
            <div>
              Add a new activity and share your experience with others!
              <br />
              <Button
                color='primary'
                className='btn'
                onClick={this.addActivity}>
                Add a new activity
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withUser(Dashboard)
