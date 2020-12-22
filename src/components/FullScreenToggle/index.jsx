/* eslint-disable */
import React, { useState } from 'react';
import './index.scss';

const FullScreenToggle = ({ setIsFullScreen }) => {
  const isFullScreen = () => setIsFullScreen(prev  => prev === '' ? 'full-screen' : '')
  return (
    <button onClick={isFullScreen} className="full-screen-toggle" type="button" />
  )
};

export default FullScreenToggle;
