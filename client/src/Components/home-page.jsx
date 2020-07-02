import React from 'react'
import axios from 'axios'
import './home-page.css'
import Search from './search'
import ActivityContainer from './activity-container'

class HomePage extends React.Component {
  state = {
    activities: [],
    error: false,
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

  render() {
    return (
      <div className='home'>
        This web app is amazing! :) <hr />
        Fill in at least one...
        <br></br>
        <Search />
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
