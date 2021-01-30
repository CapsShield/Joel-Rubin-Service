import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var params = new URL(document.location).searchParams;
console.log(params.get('gameId'));
ReactDOM.render(
  <App gameId={params.get('gameId')} />,
  document.getElementById('head')
);
