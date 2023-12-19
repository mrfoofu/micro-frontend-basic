import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Button = React.lazy(() => import('remote/Button'));

const Loader = () => <div>Loading...</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Button text="Home" />} />
          <Route path="/page1" element={<Button text="Page 1" />} />
          <Route path="/page2" element={<Button text="Page 2" />} />
        </Routes>
      </React.Suspense>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default App;
