import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import ConfigProvider from 'miroirPackage/Contexts/ConfigContext'

/**
 * Renderer for the app
 */
function render() {
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(
      <ConfigProvider>
          <App/>
      </ConfigProvider>);
}

render();
