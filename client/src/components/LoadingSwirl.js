import React, { Component } from 'react';
import Swirl from '../assets/icons/loading.svg';
import { connect } from 'react-redux';

const LoadingSwirl = (props) => {
  return (
    <img className="loading-swirl" src={Swirl} alt="loading..."/>
  );
}

export default connect(null)(LoadingSwirl);
