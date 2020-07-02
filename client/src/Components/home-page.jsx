import React, { useState, useEffect } from './node_modules/react'
//import axios from 'axios'
import './home-page.css'
import Search from './search'
import ActivityContainer from './activity-container'

const HomePage = props => {
  //const [activities, setActivities] = useState([])
  //const [error, setError] = useState(false)

  // useEffect(() => {
  //   // const handleShowActivities = () => {
  //   fetch('/api/activities')
  //     .then(response => response.json())
  //     .then(response => {
  //       setActivities(response.results)
  //     })
  //   // .catch(function (error) {
  //   //   setError(true)
  //   //   console.log(error)
  //   // })
  // }, [activities])

  return (
    <div className='home'>
      This web app is amazing! :) <hr />
      Fill in at least one...
      <br></br>
      <Search />
      <ActivityContainer />
    </div>
  )
}

export default HomePage
