import { Route, Routes } from 'react-router';
import { AboutProject, History, Home, Result } from 'pages';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutProject />} />
        <Route path='/history' element={<History />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
};


