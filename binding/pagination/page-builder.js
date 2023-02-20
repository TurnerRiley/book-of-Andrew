'use strict';
import PageNavigation from "./PageNavigation";

function Slay() {
  console.log('worked');
  return PageNavigation;
}

const rootNode = document.getElementById('pagination-wrapper');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Slay));
