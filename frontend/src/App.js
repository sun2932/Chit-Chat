import './App.css';

import {Route,Routes} from "react-router-dom";

import Home from './components/Home/Home';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatPage/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
