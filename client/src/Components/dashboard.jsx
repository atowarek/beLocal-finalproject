import React, { Component } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import QRCode from 'qrcode.react'
import withUser from './withUser'
import BottomNavbar from './bottom-navbar'
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
import './dashboard.css'

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
    axios(`/api/userActivities/${id}`)
      .then(response => {
        //console.log(response.data)
        this.setState({ userActivities: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  getActivities = () => {
    axios(`/api/activities`)
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
    axios(`/api/userActivities/${id}`, {
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
    fetch(`/api/activities/${id}`, {
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
    if (!user) return
    return (
      <div className='dashboard'>
        <br />
        <h2> Hi, {user.name}!</h2>
        <br />
        <h3>
          Here you can see the activities you organize or participate. <br />
          Or create a new one! <br />
          <br />
          <Button className='button-white' size='lg' onClick={this.addActivity}>
            Create a new activity!
          </Button>
          <hr />
        </h3>
        <h3> MY ACTIVITIES: </h3>
        <Container className='card-dash' fluid='sm'>
          <Col xs='6' className='column'>
            <h4> Participating: </h4>
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
                <Card className='super-cute-card' key={index}>
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
                    <CardText className='dates'>
                      {dayjs(activities.activitie.startDate).format(
                        'DD/MM/YYYY'
                      )}
                      -
                      {dayjs(activities.activitie.endDate).format('DD/MM/YYYY')}
                    </CardText>
                    <CardText className='dates'>
                      {activities.activitie.startHour}-
                      {activities.activitie.endHour}
                    </CardText>
                    <Button
                      className='button-green2'
                      onClick={this.deleteUserActivity(
                        activities.activitie.id
                      )}>
                      Delete activity
                    </Button>
                    <Button className='button-green2' onClick={this.toggle}>
                      Generate QR
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                      <ModalHeader toggle={this.toggle}>
                        Scan this QR code for a 30% discount on your selected
                        activity!
                      </ModalHeader>
                      <ModalBody>
                        <QRCode
                          id='123456'
                          value={activities.activitie.name} //'https://i.redd.it/54ss55ix0vwy.jpg'
                          size={400}
                          level={'H'}
                          includeMargin={true}
                        />
                      </ModalBody>
                    </Modal>
                  </CardBody>
                </Card>
              )
            })}
          </Col>
          <Col xs='6' className='column'>
            <h4> Organizing: </h4>
            {activities.map(
              activity =>
                activity.hostingId === user.id && (
                  <Card className='super-cute-card' key={activity.id}>
                    <CardImg className='image' src={activity.picture} />
                    <CardBody>
                      <CardTitle>{activity.name}</CardTitle>
                      <CardSubtitle>
                        {activity.address} ({activity.city})
                      </CardSubtitle>
                      <CardText className='dates'>
                        {dayjs(activity.startDate).format('DD/MM/YYYY')}-
                        {dayjs(activity.endDate).format('DD/MM/YYYY')}
                      </CardText>
                      <CardText className='dates'>
                        {activity.startHour}-{activity.endHour}
                      </CardText>
                      <Button
                        className='button-green2'
                        onClick={this.deleteActivity(activity.id)}>
                        Delete activity
                      </Button>
                    </CardBody>
                  </Card>
                )
            )}
          </Col>
        </Container>
        <br />
        <footer className='page-footer fixed-bottom'>
          <BottomNavbar />
        </footer>
      </div>
    )
  }
}

export default withUser(Dashboard)
