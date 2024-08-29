import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const VimeoPlayer = ({ videoId,width, height, autoplay = false, onEnd }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize the Vimeo player
    const player = new Player(playerRef.current, {
      id: videoId,
      width,
      height,
      autoplay,
    });

    // Add event listener for when the video ends
    player.on('ended', () => {
      console.log('Video has ended');
      if (onEnd) onEnd(); // Call the onEnd callback if provided
    });

    // Cleanup on component unmount
    return () => {
      player.off('ended'); // Remove the event listener
      player.destroy();    // Destroy the player instance
    };
  }, [videoId,width, height, onEnd]);

  return <div ref={playerRef}></div>;
};

export default VimeoPlayer;