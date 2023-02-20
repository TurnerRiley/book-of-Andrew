'use strict';

function PageNavigation() {
  console.log('worked');
  return (
    <p>
        tada
    </p>
  );
}

const rootNode = document.getElementById('pagination-wrapper');
const root = ReactDOM.createRoot(rootNode);
const pageNavElement = <PageNavigation/>;
root.render(pageNavElement);
