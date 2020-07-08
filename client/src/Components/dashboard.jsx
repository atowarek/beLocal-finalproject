import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

class Dashboard extends React.Component {
  state = {
    isLoggedIn: false,
    user: [],
    userActivities: [],
  }

  componentDidMount = () => {
    this.getUserInfo()
    //this.getUserActivities()
  }
  // getUserInfo = id => {
  //   // axios(`http://localhost:5000/users/${id}`)
  //   axios(`http://localhost:5000/users/3`)
  //     .then(response => {
  //       this.setState({ user: response.data })
  //       console.log(this.state.user)
  //     })
  //     .catch(error => {
  //       this.setState({ error: true })
  //     })
  // }

  getUserInfo = id => {
    axios(`http://localhost:5000/userInfo/3`)
      .then(response => {
        this.setState({ user: response.data })
        console.log(this.state.user)
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
    this.props.history.push('/') //REDIRECT TO ADD ACTIVITY URL
  }

  render() {
    const { user } = this.state
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
        </div>
      </div>
    )
  }
}

export default Dashboard
