import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

const withUser = Component => props => {
  const [userData, setUserData] = useState(null)
  const [userId, setUserId] = useState(null)
  const [error, setError] = useState(false)

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

  //there is somehting worng here, the fetch doesn't stop (on console.log)
  useEffect(() => {
    axios(`http://localhost:5000/users/${userId}`).then(response => {
      setUserData(response.data)
      //console.log(userData)
    })
  }, [userData])

  return <Component {...props} user={userData} />
}

export default withUser
