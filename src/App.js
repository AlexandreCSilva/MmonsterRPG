import React from 'react';
import Reset from './assets/Reset';
import { SocketContext, socket } from './contexts/socket';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Game } from './pages/Game';

function App() {
  return (
    <div className='App'>
      <Reset />
      <SocketContext.Provider value={socket}>
        <Router>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route index path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
