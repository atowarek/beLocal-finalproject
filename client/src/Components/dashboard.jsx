import React, { Component } from 'react'
import axios from 'axios'
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
import QrCode from './qr-code'
import withUser from './withUser'

class Dashboard extends Component {
  state = {
    isLoggedIn: false,
    activities: [],
    //userActivities: []
  }

  componentDidMount = () => {
    this.getActivities()
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
    const { activities } = this.state
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
                                {activity.startDate}-{activity.endtDate}
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
export default withUser(Dashboard)
