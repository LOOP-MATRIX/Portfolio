import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    setInterval(() => {
        navigate('/')
    }, 300);
  return (
    <div>Redirecting...</div>
  )
}

export default NotFound