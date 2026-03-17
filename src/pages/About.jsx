import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate()

  return (
    <div>
     {/* //to navigate */}
     
      <h1>About Page</h1>
    </div>
  )
}

export default About