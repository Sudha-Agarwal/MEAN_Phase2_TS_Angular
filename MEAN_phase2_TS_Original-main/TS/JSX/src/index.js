import * as React from 'react';
import { createRoot } from 'react-dom/client';
const App = () => {
    return React.createElement("h1", null, "Hello, world!");
};
//ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(React.createElement(App, null));
export default App;
