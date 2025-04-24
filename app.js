import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', { id: parent }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Namaste React by Shubhangi Kumbhars'),
    React.createElement('h2', {}, 'I am an h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am an h1 tag'),
    React.createElement('h2', {}, 'I am an h2 tag'),
  ]),
]);
console.log('Heading : ', heading); //It's an object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
