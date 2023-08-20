import React, { useContext } from 'react';
import Navigation from '../Navigation';
import ProfileCard from './ProfileCrd';
import './profile.css';
import { GlobalContext } from '../../../context/context';
import { useJwt } from 'react-jwt';

export default function Profile() {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Profile Page</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfileCard adminName={state.adminName} adminEmail={state.adminEmail}  />
        </div>
      </div>
    </>
  );
}
