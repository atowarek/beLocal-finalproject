import React from 'react'
import './home-page.css'
import Search from './search'
import ActivityContainer from './activity-container'
import ActivityMaps from './activity-maps'
import { Container, Row, Col } from 'reactstrap'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: [],
      error: false,
      message: false,
    }
  }

  componentDidMount = () => {
    this.getActivities()
  }

  fetchSearchResults = (query = ' ', category = ' ') => {
    fetch(`http://localhost:5000/search?city=${query}&category=${category}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.length === 0) {
          this.setState({ message: true })
        } else {
          this.setState({
            activities: data,
            message: false,
          })
          //console.log(data)
        }
      })
  }

  getActivities = () => {
    fetch('http://localhost:5000/activities')
      .then(response => {
        return response.json()
      })
      .then(response => {
        const parsedData = response.map(activity => {
          const startDate = dayjs(activity.startDate).format('DD/MM/YYYY')
          const endDate = dayjs(activity.endDate).format('DD/MM/YYYY')
          return {
            id: activity.id,
            name: activity.name,
            startDate,
            endDate,
            startHour: activity.startHour,
            endHour: activity.endHour,
            hostingId: activity.hostingId,
            longitude: activity.longitude,
            latitude: activity.latitude,
            address: activity.address,
            description: activity.description,
            category: activity.category,
            picture: activity.picture,
            city: activity.city,
          }
        })
        this.setState({
          activities: parsedData,
          allCities: true,
        })
        console.log(parsedData)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  handleAddActivity = id => {
    const currentActivity = this.state.activities.filter(
      activity => activity.id === id
    )
    console.log(currentActivity)
    //this.props.addActivity(currentActivity)
  }

  render() {
    return (
      <Container>
        <Row>
          <Search onSearch={this.fetchSearchResults} />
        </Row>
        <Row xs='2'>
          {this.state.message ? (
            <div className='Message-add'>
              <h5>
                There is no activity in this city yet. Add the first one{' '}
                <Link to='/activity'>here</Link>
              </h5>
            </div>
          ) : (
            this.state.activities.map(activity => {
              return (
                <Col xs='6'>
                  <ActivityContainer
                    key={activity.id}
                    id={activity.id}
                    name={activity.name}
                    startDate={activity.startDate}
                    endDate={activity.endDate}
                    startHour={activity.startHour}
                    endHour={activity.endHour}
                    hostingId={activity.hostingId}
                    longitude={activity.longitude}
                    latitude={activity.latitude}
                    address={activity.address}
                    description={activity.description}
                    category={activity.category}
                    picture={activity.picture}
                    city={activity.city}
                    addActivity={this.handleAddActivity}
                    history={this.props.history}
                  />
                </Col>
              )
            })
          )}
        </Row>
        <Row>
          <ActivityMaps className='map'></ActivityMaps>
        </Row>
      </Container>
    )
  }
}
export default HomePage
