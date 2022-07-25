import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DateSet from './Date/DateSet';
import VideoPlay from "./VideoPlayer/VideoPlay";
import LoginPage from "./Login/LoginPage";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='date' element={<DateSet />}/>
      <Route path='video' element={<VideoPlay/>}/>
      <Route path='login' element={<LoginPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

