import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1721195349955.json';

const LottieAnimation = ({ speed = 1 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} speed={speed} height={200} width={200} />;
};

export default LottieAnimation;
