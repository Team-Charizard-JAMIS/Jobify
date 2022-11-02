import React, { useEffect, useState } from 'react';
import Application from '../component/application/application';
import Interview from '../component/Interview/Interview';
import LogIn from './LogIn';
import Offer from '../component/offer/offer';
import { App } from '../Types/applicationTypes';
import { InterviewType } from '../Types/interviewTypes';
import { OfferType } from '../Types/offerTypes';
// import { getApplicants } from '../controllers/api'
// import Results from './../component/results'

const MainContainer = (props:any) => {
  let loggedIn =  props.loggedIn
  const [appName, setAppName] = useState('');
  const [apps, setApps] = useState<Array<App>>([
    // { application_id: 1, appname: 'Spotify', appdate: String(Date.now()), user_id: 1 },
    // { application_id: 2, appname: 'Amazon', appdate: String(Date.now()), user_id: 1 },
    // { application_id: 3, appname: 'Youtube', appdate: String(Date.now()), user_id: 1 },
    // { application_id: 4, appname: 'Spotify', appdate: String(Date.now()), user_id: 2 },
    // { application_id: 5, appname: 'LinkedIn', appdate: String(Date.now()), user_id: 2 },
    // { application_id: 6, appname: 'Chevron', appdate: String(Date.now()), user_id: 2 }
  ]);
  const [fetchApps, setFetchApps] = useState<boolean>(true);

  const [interviews, setInterviews] = useState<Array<InterviewType>>([
    // { user_id: 1, interviewId: 1, interviewname: 'Spotify', interviewdate: '10/31/2022' },
    // { user_id: 1, interviewId: 2, interviewname: 'Amazon', interviewdate: '10/31/2022' },
    // { user_id: 1, interviewId: 3, interviewname: 'Youtube', interviewdate: '11/1/2022' },
    // { user_id: 2, interviewId: 4, interviewname: 'Spotify', interviewdate: '10/30/2022' },
    // { user_id: 2, interviewId: 5, interviewname: 'LinkedIn', interviewdate: '10/31/2022' },
    // { user_id: 2, interviewId: 6, interviewname: 'Chevron', interviewdate: '11/1/2022' }
  ]);
  const [fetchInterviews, setFetchInterviews] = useState<boolean>(true);

  const [offers, setOffers] = useState<Array<OfferType>>([
    // { user_id: 1, offerID: 1, offername: 'Spotify', offerdate: '11/1/2022', result: true },
    // { user_id: 2, offerID: 2, offername: 'Chevron', offerdate: '11/2/2022', result: true }
  ]);
  const [fetchOffers, setFetchOffers] = useState<boolean>(true);

  // const getApplications = async (): Promise<App[]> => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/applications')
  //   }
  //   catch (error: any) {
  //     return error;
  //   }
  // };

  const getApplications = () => {
    fetch('/api/applications')
      .then((res) => res.json())
      .then((data) => {
        console.log('getting dta', data)
        setApps(data)
      })
      .catch((err) => {
        console.log('Frontend applications get error', err);
      })
  };

  const getInterviews = () => {
    fetch('/api/interviews')
      .then((res) => res.json())
      .then((data) => {
        console.log('getting dta', data)
        setInterviews(data);
      })
      .catch((err) => {
        console.log('Frontend Interviews get error', err);
      });
  }//end of getInterviews

  const getOffers = () => {
    fetch('/api/offers')
      .then((res) => res.json())
      .then((data) => {
        console.log('getting dta', data)
        setOffers(data);
      })
      .catch((err) => {
        console.log('Frontend Offers get error', err);
      });
  }//end of getOffers

  useEffect(() => {
    console.log('getApplicationsUseEffect')
    getApplications();
  }, [fetchApps])

  useEffect(() => {
    getInterviews();
  }, [fetchInterviews])

  useEffect(() => {
    getOffers();
  }, [fetchOffers])

  const applied = (name: string) => {
    const appName = name;
    fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appName })
    })
      .then(res => res.json())
      .then(data => {
        console.log('application posted success', data);
        const fetching = fetchApps;
        setFetchApps(!fetching);
      })
      .catch((err) => {
        console.log('Application Post method error front end', err);
      })
  }

  const interviewed = (appName: string) => {
    console.log('appID', appName)
    fetch('/api/interviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appName })
    })
      .then(res => res.json())
      .then(data => {
        console.log('interview posted success', data);
        const fetching = fetchInterviews;
        setFetchInterviews(!fetching);
      })
      .catch((err) => {
        console.log('interviewed Post method error front end', err);
      })
  }

  const offered = (interviewName: string) => {
    fetch('/api/offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ interviewName })
    })
      .then(res => res.json())
      .then(data => {
        console.log('offer posted success', data);
        const fetching = fetchOffers;
        setFetchOffers(!fetching);
      })
      .catch((err) => {
        console.log('offer Post method error front end', err);
      })
  }

  return (
    (!loggedIn) ? 
      <LogIn 
        handleSubmit={props.handleSubmit} 
        hasAccount={props.hasAccount} 
        setHasAccount={props.setHasAccount} 
      /> :        
      <div>
      <h2>Dashboard</h2>
      <Application applications={apps} interviewed={interviewed} applied={applied} />
      <Interview interviews={interviews} offered={offered} />
      <Offer offers={offers} />
    </div > 
  )
};

export default MainContainer;
