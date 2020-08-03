import React from 'react'
import Search from './search'
import ActivityContainer from './activity-container'
import ActivityMaps from './activity-maps'
import { Container, Row, Col } from 'reactstrap'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import './home-page.css'
import BottomNavbar from './bottom-navbar'

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
    if(!query && category === ''){
      this.getActivities()
      return
    }
    fetch(`/api/search?city=${query}&category=${category}`)
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
    fetch('/api/activities')
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
            hosting: activity.hosting,
            longitude: activity.longitude,
            latitude: activity.latitude,
            address: activity.address,
            description: activity.description,
            category: activity.category,
            picture: activity.picture,
            city: activity.city,
            price: activity.price,
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

  render() {
    const { user } = this.props
    const { activities } = this.state
    return (
      <div className='home'>
        <br />
        <Container className='home-container'>
          <Row className='search-container'>
            <Col size={12}>
              <Search onSearch={this.fetchSearchResults} />
            </Col>
          </Row>
          <Row xs='3'>
            {this.state.message ? (
              <div className='Message-add'>
                <br />
                <h5>
                  There is no activity in this city yet. Add the first one{' '}
                  <Link to='/activity'> here</Link>.
                </h5>
              </div>
            ) : (
              this.state.activities.map(activity => {
                return (
                  <Col size={4}>
                    <ActivityContainer
                      key={activity.id}
                      id={activity.id}
                      name={activity.name}
                      startDate={activity.startDate}
                      endDate={activity.endDate}
                      startHour={activity.startHour}
                      endHour={activity.endHour}
                      hosting={activity.hosting}
                      longitude={activity.longitude}
                      latitude={activity.latitude}
                      address={activity.address}
                      description={activity.description}
                      category={activity.category}
                      picture={activity.picture}
                      city={activity.city}
                      price={activity.price}
                      history={this.props.history}
                    />
                  </Col> 
                )
              })
            )}
          </Row>
          <div
            style={{ height: '400px', width: '400px', position: 'relative' }}>
            <ActivityMaps activities={activities} />
          </div>
        </Container>

        <footer className='page-footer'>
          <BottomNavbar />
        </footer>
      </div>
    )
  }
}
export default HomePage
