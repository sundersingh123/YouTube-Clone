import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Layout from './layout/Layout';
import HomeSlider from './slidebarcomponents/Home';
import Shorts from './slidebarcomponents/Shorts';
import Subscriptions from './slidebarcomponents/Subscriptions';
// import Sidebar from './sidebar/Sidebar';
import Fashion from './slidebarcomponents/Fashion';
import Films from './slidebarcomponents/Films';
import Gaming from './slidebarcomponents/Gaming';
import History from './slidebarcomponents/History';
import Learning from './slidebarcomponents/Learning';
import Trending from './slidebarcomponents/Trending';
import Shoping from './slidebarcomponents/Shoping';
import Sport from './slidebarcomponents/Sport';
import Tv from './slidebarcomponents/Tv';
import YouTubePremium from './slidebarcomponents/YouTubePremium';
import YouTubeKids from './slidebarcomponents/YouTubeKids';
import YouTubeMusic from './slidebarcomponents/YouTubeMusic';
import Setting from './slidebarcomponents/Setting';
import Help from './slidebarcomponents/Help';
import Feedback from './slidebarcomponents/Feedback';
import Library from './slidebarcomponents/Library';
import Watchlater from './slidebarcomponents/Watchlater';
import Liked from './slidebarcomponents/Liked';
import Music from './slidebarcomponents/Music';
import News from './slidebarcomponents/News';
import Flag from './slidebarcomponents/Flag';

function App() {
  return (
    <>
    <Router>
    <Header/>
    {/* <Layout/> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomeSlider/>}/>
        <Route path='/home' element={<HomeSlider/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path='/subscriptions' element={<Subscriptions/>}/>         
        <Route path='/library' element={<Library/>}/>         
        <Route path='/history' element={<History/>}/>         
        <Route path='/watch_later' element={<Watchlater/>}/>         
        <Route path='/like' element={<Liked/>}/>         
        <Route path='/trending' element={<Trending/>}/>         
        <Route path='/shoping' element={<Shoping/>}/>         
        <Route path='/music' element={<Music/>}/>         
        <Route path='/film' element={<Films/>}/>         
        <Route path='/live' element={<Tv/>}/>         
        <Route path='/gaming' element={<Gaming/>}/>         
        <Route path='/news' element={<News/>}/>         
        <Route path='/sport' element={<Sport/>}/>         
        <Route path='/learning' element={<Learning/>}/>         
        <Route path='/fashion' element={<Fashion/>}/>         
        <Route path='/youtubepremium' element={<YouTubePremium/>}/>         
        <Route path='/youtubekid' element={<YouTubeKids/>}/>         
        <Route path='/youtubemusic' element={<YouTubeMusic/>}/>         
        <Route path='/setting' element={<Setting/>}/>         
        <Route path='/flag' element={<Flag/>}/>         
        <Route path='/help' element={<Help/>}/>         
        <Route path='/feedback' element={<Feedback/>}/>         
        </Route>  
      </Routes>
    </Router>
    </>
  );
}

export default App;
