import React, { Component } from 'react';
import Login from './LogIn'
import Application from './../component/application'
import Interview from './../component/interview'
import Results from './../component/results'

const MainContainer = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    <Login />
      <Application />
      <Interview />
      <Results />

    </div>
  )
}

export default MainContainer;
