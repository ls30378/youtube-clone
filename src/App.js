import './App.scss';
import Header from './components/header/header';
import SideNav from './components/sidenav/sidenav';
import { useEffect, useState } from 'react';
import Ad from './ad/ad';
import VideoCard from './components/video-card/video-card';
function App() {
  const [isActive, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam vitae quidem, a fugit suscipit doloribus explicabo vero molestias?`)
  }, []);
  useEffect(() => {
    setDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`)
  }, [])
  return (
    <>
      <Header setActive={setActive} />
      <SideNav isActive={isActive} setActive={setActive} />
      <Ad title={title} description={description} />
      <div className="videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </>

  );
}

export default App;
