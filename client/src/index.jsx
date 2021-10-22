import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import ModeContext from './contexts/ModeContext';
import store from '@/store';

render(
  <Router>
    <ModeContext>
      <Provider store={store}>
        <App />
      </Provider>
    </ModeContext>
  </Router>,
  document.getElementById('root'),
);
