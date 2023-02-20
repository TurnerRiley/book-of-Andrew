'use strict';

function Slay() {
  console.log('worked');
  return (
    <p>
        tada
    </p>
  );
}

const rootNode = document.getElementById('pagination-wrapper');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Slay));