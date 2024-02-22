import React from 'react';

function Logo({width = '100px'}) {
  const logoStyle = {
    backgroundImage: 'url(\'https://static.vecteezy.com/system/resources/thumbnails/010/778/952/small/luxury-royal-wing-letter-gk-crest-gold-color-logo-victory-logo-crest-logo-wing-logo-logo-template-vector.jpg\')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '140px',
    height: '90px'
  };

  return (
    <div style={logoStyle}>Logo</div>
  );
}

export default Logo;
