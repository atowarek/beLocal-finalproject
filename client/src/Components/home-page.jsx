import React from 'react'
import './home-page.css'
import Search from './search'
import ActivityContainer from './activity-container'



class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: [],
      error: false,
      allCities: false,
    }
  }
  


  componentDidMount = () => {
    this.getActivities() 
  }

  getActivities = () => {
    fetch('http://localhost:5000/activities')
      .then(response => response.json())
      .then(response => {
        this.setState({ activities: response })
        console.log(response)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  fetchSearchResults = (query = '') => {
    fetch(`http://localhost:5000/searchByCity/${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          activities: data.activities,
          allCities: false
        })
      })
      .catch(error => {
        this.setState({ error: true })
        console.log('Error fetching')
      })
  }
  

  render() {
    return (
      <div className='home'>
        This web app is amazing! :) <hr />
        Fill in at least one...
        <br></br>
        <div>
          <Search onSearch = {this.fetchSearchResults}/>
        </div>
        {/* <ActivityContainer activities={this.state.activities} /> */}
        {this.state.activities.map(activity => {
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
            city,
          } = activity
          return (
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
            />
          )
        })}
      </div>
      
    )
  }
}
export default HomePage
