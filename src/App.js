import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './components/home/home.js';
import Login from './components/login/login.js'; 
import Register from './components/register/register.js'; 
import Posts from './components/posts/posts.js'
import Comments from './components/comments/comments.js'  
import Images from './components/images/images.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
