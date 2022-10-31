import React, { Component } from 'react';
import Application from './../component/application'
import Interview from './../component/interview'
import Results from './../component/results'

const MainContainer = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <Application />
      <Interview />
      <Results />

    </div>
  )
}

export default MainContainer;
