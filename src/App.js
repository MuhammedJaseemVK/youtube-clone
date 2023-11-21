import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className='w-full h-screen bg-white'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/videoDetail/:id' element={<VideoDetail />} />
          <Route path='/ChannelDetail/:id' element={<ChannelDetail />} />
          <Route path='/SearchFeed/:searchTerm' element={<SearchFeed />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
