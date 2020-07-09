import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

class Dashboard extends React.Component {
  state = {
    isLoggedIn: false,
    user: [],
    activities: [],
    //userActivities: []
  }

  componentDidMount = () => {
    this.getUserInfo()
    this.getActivities()
  }

  getUserInfo = id => {
    // axios(`http://localhost:5000/users/${id}`)
    axios(`http://localhost:5000/users/2`)
      .then(response => {
        this.setState({ user: response.data })
        console.log(this.state.user)
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

  // getUserActivities = hostingId => {
  //   axios(`http://localhost:5000/userActivities/1`)
  //     .then(response => {
  //       this.setState({ userActivities: response.data })
  //       console.log(this.state.userActivities)
  //     })
  //     .catch(error => {
  //       this.setState({ error: true })
  //     })
  // }

  addActivity = event => {
    event.preventDefault()
    this.props.history.push('/activity')
  }

  render() {
    const { user, activities } = this.state

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
      </div>
    )
  }
}

export default Dashboard
