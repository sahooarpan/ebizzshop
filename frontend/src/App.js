import React,{ useEffect } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch }  from 'react-router-dom'
import Register from './components/Register'
import Shop from './components/Shop'
import { setAuthToken } from "./util/setAuthToken";
import { userLoad } from "./actions/userActions";
import Login from './components/Login'
import PrivateRouter from './components/routing/PrivateRouter'
import { useDispatch } from 'react-redux'
const App = () => {

  const dispatch = useDispatch();
  if (localStorage.getItem("userInfo")) {
    console.log("token is here")
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setAuthToken(userInfo.token);
    
    
  } 
  useEffect(() => {
    
    dispatch(userLoad());
    
  }, [dispatch]);
  
  return (
    <div>
      <Router>
      <Header/>
      <Switch>

      
      <Route path='/register' component={Register} />
      <PrivateRouter exact path='/shop' component={Shop} />
      <Route path='/' component={Login} />
      </Switch>
    
      </Router>
     
    </div>
  )
}

export default App
