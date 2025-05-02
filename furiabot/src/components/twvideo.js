import React, { useEffect } from 'react';
import './twvideo.css'; // Importa o CSS para estilização

function TwitchPlayer() {
  useEffect(() => {
    if (document.getElementById('twitch-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'twitch-embed-script';
    script.src = 'https://embed.twitch.tv/embed/v1.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.Twitch || !window.Twitch.Embed) return;
      new window.Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 480,
        channel: 'gaules', // Substitua pelo canal desejado
        layout: 'video',
        autoplay: true,
      });
    };

    return () => {
      const embed = document.getElementById('twitch-embed');
      if (embed) embed.innerHTML = '';
    };
  }, []);

  return (
    <div className="twitch-container">
      <div className="twitch-box">
        <h3 style={{ color: '#fff', textAlign: 'center' }}>Transmissão ao vivo da FURIA</h3>
        <div id="twitch-embed"></div>
      </div>
    </div>
  );
}

export default TwitchPlayer;