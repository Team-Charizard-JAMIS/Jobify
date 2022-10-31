import React, { useEffect, useState } from 'react';
import Application from './../component/application'
import Results from './../component/results'
import { App } from '../Types/applicationTypes';

const MainContainer = () => {
  // const [apps, setApps] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const apps: App[] = [
    { id: 1, appName: 'Spotify', appDate: 'Date.now()', user_id: 1 }, 
    { id: 2, appName: 'Discord', appDate: 'Date.now()', user_id: 1 }
  ]

  useEffect(() => {
    // getInterviews();
  }, []) 

  const interviewed = (appID: number) => {
    fetch('/interview', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appID })
    })
      .then(res => res.json())
      .then(data => {

      })
      .catch((err) => {
        console.log('interviewed Post method error front end', err);
      })
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <Application applications={apps} interviewed={interviewed} />
      <Results />

    </div>
  )
}

export default MainContainer;
