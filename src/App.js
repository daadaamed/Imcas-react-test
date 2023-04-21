/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FeedbackPage from './FeedbackPage';
import NotFound from './NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/feedback/:id" element={<FeedbackPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
