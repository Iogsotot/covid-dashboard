/* eslint-disable react/prop-types */
import React from 'react';
import './index.scss';

const FullScreenToggle = ({ setIsFullScreen }) => {
  const isFullScreen = () => setIsFullScreen((prev) => (prev === '' ? 'full-screen' : ''));
  return (
    <>
      <button
        onClick={isFullScreen}
        className="full-screen-toggle"
        type="button"
        aria-label="Full screen toggle"
      />
    </>
  );
};

export default FullScreenToggle;
