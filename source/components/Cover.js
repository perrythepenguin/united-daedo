import React from 'react';

export default function Cover({text, subText, textColor}) {
  return (
    <div
      className="jumbotron jumbotron-fluid site-cover-photo"
      style={{
        height: '20em',
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0px'
      }}
    >
      <div className="container-fluid">
        <h1
          className="display-3"
          style={{
            color: textColor || '#fff',
            marginTop: '0px',
            marginBottom: '0px',
            fontWeight: 'bold'
          }}
        >
          {text}
        </h1>
        <h2
          style={{
            fontFamily: 'Brush Script Std'
          }}
        >
          {subText}
        </h2>
      </div>
    </div>
  )
}
