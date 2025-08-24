import React from 'react';

function WhatsAppButton() {
  return (
    <a href="https://wa.me/2348037869368" target="_blank" rel="noopener noreferrer"
       style={{
         position: 'fixed',
         bottom: '20px',
         right: '20px',
         backgroundColor: '#25D366',
         color: 'white',
         borderRadius: '50%',
         padding: '15px',
         textAlign: 'center',
         fontSize: '20px',
         boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
       }}>
      💬
    </a>
  );
}

export default WhatsAppButton;
