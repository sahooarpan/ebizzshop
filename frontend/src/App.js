import React,{ useEffect } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router,Route, Switch }  from 'react-router-dom'
import Register from './components/Register'
import Shop from './components/Shop'
import { setAuthToken } from "./util/setAuthToken";
import { userLoad } from "./actions/userActions";
import Login from './components/Login'
import PrivateRoute from './components/routing/PrivateRouter'
import { useDispatch } from 'react-redux'
import CreateProduct from './components/CreateProduct'
import UpdateProduct from './components/UpdateProduct'

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
      <PrivateRoute exact path='/shop' component={Shop} />
      <PrivateRoute exact path='/create-product' component={CreateProduct} />
      <PrivateRoute exact path='/update-product/:id' component={UpdateProduct} />
      <Route path='/signin' component={Login} />
      <Route path='/' component={Login} />
      
      </Switch>
    
      </Router>
     
    </div>
  )
}

export default App
