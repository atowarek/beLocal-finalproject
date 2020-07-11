import React from 'react'
import axios from 'axios'
import { Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import QrCode from './qr-code'


class Dashboard extends React.Component {
  state = {
    isLoggedIn: false,
    user: [],
    activities: [],
    userActivities: []
  }

  componentDidMount = () => {
    this.getUserInfo()
    this.getUserActivities()
    this.getActivities()
  }

  getUserInfo = id => {
    //axios(`http://localhost:5000/users/?id=${id}`)
    axios(`http://localhost:5000/users/2`)
      .then(response => {
        this.setState({ user: response.data })
        console.log(this.state.user)
      })
      .catch(error => {
        this.setState({ error: true })
      })
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

  render() {
    const { user, activities, userActivities } = this.state

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
                        <CardImg top width='100%' src={activities.activitie.picture}/>
                        <CardBody>
                          <CardTitle>{activities.activitie.name}</CardTitle>
                          <CardSubtitle>{activities.activitie.address}</CardSubtitle>
                          <CardSubtitle>{activities.activitie.city}</CardSubtitle>
                          <CardText>{activities.activitie.startDate}</CardText>
                          <CardText>{activities.activitie.endtDate} </CardText>
                          <CardText>{activities.activitie.startHour} {activities.activitie.endHour} </CardText>
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
                    <li key={activity.id}>{activity.name}</li>
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
        <Button onClick={this.toggle}>Generate QR code!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Scan this QR code for a 20% discount on your selected activity!
          </ModalHeader>
          <ModalBody>
            <QrCode />
          </ModalBody>
          <ModalFooter>Send the QR Code by email (??)</ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Dashboard
