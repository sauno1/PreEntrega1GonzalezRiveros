import React from 'react';
import ReactLoading from 'react-loading';  // Cambio de 'Balls' a 'ReactLoading'

const loadingStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function LoadingSpinner() {
  return (
    <div className="loading-spinner" style={loadingStyles}>
      <ReactLoading type="balls" color="#a1a31291" height={100} width={100} />  {/* Cambio de 'Balls' a 'type="balls"' */}
    </div>
  );
}

export default LoadingSpinner;
