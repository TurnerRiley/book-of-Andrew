'use strict';

function Slay() {
  console.log('worked');
  return React.createElement(
    'PageNavigation'
  );
}

const rootNode = document.getElementById('pagination-wrapper');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Slay));
