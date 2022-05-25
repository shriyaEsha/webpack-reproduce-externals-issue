import React, { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import CCEModal from './CCEModal';
// const CCEModal = lazy(() => import('./CCEModal'));

function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

// Simple Portal Wrapper
function ReactPortal({ children, wrapperId }) {
    return ReactDOM.createPortal(children, document.getElementById(wrapperId));
  }

// Simple Portal Component
function CCEModalPortal () {
    const portalId = 'portal';
    let portalComponent = document.getElementById(portalId);
    
    if (!portalComponent) {
        portalComponent = document.createElement('div');
        portalComponent.setAttribute("id", portalId);
        document.body.appendChild(portalComponent);  
    }
    return <ReactPortal wrapperId={portalId}>
        <CCEModal />
        </ReactPortal>;
}
const e = React.createElement;

const portalContainer = document.querySelector('#portal-root');
const rootPortal = ReactDOM.createRoot(portalContainer);
rootPortal.render(e(CCEModalPortal));


