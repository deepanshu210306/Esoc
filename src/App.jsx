import Index from './pages/index'
import { createBrowserRouter, RouterProvider,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Team from './Components/Team';
function App() {

  return (
    <Routes >
      <Route path='/' element={<Index />}>
       <Route path='/' element={<HomePage />} />
       <Route path='/team' element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;