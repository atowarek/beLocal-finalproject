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
        <ActivityContainer activities={this.state.activities} />
      </div>
    )
  }
}
export default HomePage
