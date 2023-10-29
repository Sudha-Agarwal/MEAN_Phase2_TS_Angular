import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>Hello, world!</h1>;
};

//ReactDOM.render(<App />, document.getElementById('root'));

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
