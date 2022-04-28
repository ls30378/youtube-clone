import './App.scss';
import Header from './components/header/header';
import SideNav from './components/sidenav/sidenav';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import VideoPage from './pages/video/video';
import MobileSearch from './components/mobilesearch/mobilesearch';

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <BrowserRouter>
      <MobileSearch />
      <Header setActive={setActive} />
      <SideNav isActive={isActive} setActive={setActive} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/youtube-clone/' element={<Homepage />} />
        <Route path='video/:video' element={<VideoPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
