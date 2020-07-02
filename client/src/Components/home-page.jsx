import React from 'react'

//import axios from 'axios'
import './home-page.css'
import Search from './search'
import ActivityContainer from './activity-container'

class HomePage extends React.Component {
  state = {
    activities: [],
    error: false,
  }

  handleShowActivities = (city = '') => {
    // fetch(`/api/activities/${city}`)
    fetch(`/api/activities`)
      .then(response => response.json())
      .then(response => {
        this.setState({ activities: response })
        console.log(response)
      })
      .catch(error => {
        this.setState({ error: true })
        //console.log(error)
      })
  }

  render() {
    return (
      <div className='home'>
        This web app is amazing! :) <hr />
        Fill in at least one...
        <br></br>
        <Search getActivities={this.handleShowActivities} />
        <ActivityContainer />
      </div>
    )
  }
}
export default HomePage
