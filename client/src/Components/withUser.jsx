import React, { useState, useEffect } from 'react'
import axios from 'axios'

const withUser = Component => props => {
  const [userData, setUserData] = useState(null)
  const [userId, setUserId] = useState(null)
  const [error, setError] = useState(false)
  const [userActivities, setUserActivities] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    axios('http://localhost:5000/profile', {
      headers: {
        'x-access-token': token,
      },
    })
      .then(response => {
        const id = response.data.userId
        //console.log(id)
        setUserId(id)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios(`http://localhost:5000/users/${userId}`).then(response => {
      console.log(response.data)
      setUserData(response.data)
    })
  }, [userId])

  useEffect(() => {
    const fetchUserActivities = () => {
      axios(`http://localhost:5000/userActivities/${userId}`)
        .then(response => {
          //console.log(response.data)
          setUserActivities(response.data)
        })
        .catch(error => {
          setError(true)
          //console.log(error)
        })
    }
    fetchUserActivities()
  }, [userId])

  //only working when refresh
  const deleteUserActivity = userId => () => {
    axios(`http://localhost:5000/userActivities/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(error => {
      setError(true)
      console.log(error)
    })
    this.fetchUserActivities()
    // .then(response => {
    //   //console.log(response.data)
    //   setUserActivities(response.data)
    // })
  }

  return (
    <Component
      {...props}
      userActivities={userActivities}
      user={userData}
      deleteUserActivity={deleteUserActivity}
    />
  )
}

export default withUser
