import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', width: '60%' }}>
      <img src="https://7thlouthcoastalscouts.com/wp-content/uploads/2021/04/92-926428_free-welcome-worship-motion-background-1024x576.jpg" style={{width: '60%', height: "auto"}} alt="" />
      </div>
      <div className="vertical-text" style={{ position: 'absolute', right: '100px' }}>
        <p>Welcome to Admin Page</p>
      </div>
    </div>
  );
}
