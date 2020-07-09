import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

class Dashboard extends React.Component {
  state = {
    isLoggedIn: false,
    user: [],
    activities: [],
    //userActivities: [],
    selectedActivities: [],
  }

  componentDidMount = () => {
    this.getUserInfo()
    this.getActivities()
  }

  getUserInfo = id => {
    // axios(`http://localhost:5000/users/${id}`)
    axios(`http://localhost:5000/users/3`)
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
        console.log(this.state.activities)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  addMyActivity = ({ id }) => {
    this.setState({})
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
    const { user, activities, selectedActivities } = this.state

    return (
      <div>
        <h1> Hi, {user.name}!</h1>
        Here you can see your activities or add a new one! <br />
        <div className='container'>
          <div>
            Add a new activity and share your experience with others!
            <br />
            <Button color='primary' className='btn' onClick={this.addActivity}>
              Add a new activity
            </Button>
          </div>
          <h2>My activities:</h2>
          <h3>organizing:</h3>
          {/* not really working, showing all activities */}
          {activities.map(activity => (
            //activities.hostingId === user.id &&
            <li key={activity.id}>{activity.name}</li>
          ))}
          <h3>participating:</h3>
          {selectedActivities.name}
        </div>
      </div>
    )
  }
}

export default Dashboard
