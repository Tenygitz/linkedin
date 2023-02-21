import {BrowserRouter,Routes,Route} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Main from './Main';
import Login from './Login';
import Register from './Register';
import { useEffect } from 'react';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {login,logout} from "./redux/userSlice";
import OverView from "./OverView";
import './App.css';

function App() {
  const {user}=useSelector((state)=>state.user)
  console.log("thrrr", user);
  const dispatch=useDispatch()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    const uid = user.uid;
    dispatch(login({
              uid:user.uid,
              displayName:user.displayName,
              email:user.email,
              photoURL:user.photoURL,
                  }))
    } else {
    // User is signed out
    dispatch(logout())
    }
  });
  }, [])
  
 
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="home" element={<Main/>}/>
    <Route path="overview" element={<OverView/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
