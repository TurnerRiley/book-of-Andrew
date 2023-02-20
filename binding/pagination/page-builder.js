'use strict';

function Slay() {
  console.log('worked');
  return React.createElement(
    'button'
  );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Slay));