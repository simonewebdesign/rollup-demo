import './foo';
import './bar';
import baz from './baz'; // default import

import React from 'react';
import ReactDOM from 'react-dom';

baz();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('div', { className: 'app-content' });
    // return <div>Hello World</div>;
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

console.log('main done.');
