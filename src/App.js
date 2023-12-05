import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import PageNotFound from './components/PageNotFound';
import Playlist from './components/Playlist';


function App() {
  return (
    <div className='w-full h-screen bg-[#0f0f0f]'>
      <BrowserRouter>
        <Navbar />
        <div className='mt-[56px]'>
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/videoDetail/:id' element={<VideoDetail />} />
          <Route path='/ChannelDetail/:id' element={<ChannelDetail />} />
          <Route path='/SearchFeed/:searchTerm' element={<SearchFeed />} />
          <Route path='/Playlist/:id' element={<Playlist />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
