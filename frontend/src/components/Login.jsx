import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../actions/userActions';


const Login = ({history}) => {
    const auth = useSelector((state) => state.user);
    const { userInfo } = auth;
    const dispatch = useDispatch();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    useEffect(() => {
        if (userInfo) {
          history.push("/shop");
        }
      }, [userInfo]);
    
    
    const onSubmit=e=>{
        e.preventDefault();
        dispatch(login(email,password))
    }
    

    return (
        <div className="d-flex justify-content-center ">
        
        <form className="form-container bg-light" onSubmit={onSubmit}>
        
        <h3 className="display-4 text-primary">Login</h3>

            <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" 
            name="email" placeholder="Enter email" 
            required value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" 
            id="password" name="password" placeholder="Password" required value={password} 
            onChange={e=>setPassword(e.target.value)} />
            </div>
            <button disabled={email === "" || password===""} type="submit" class="btn btn-primary px-3">Submit</button>
            <p className="form-text">Do not have an account ? <Link className="form-link" to="/register">Please </Link>register</p>
        </form>
        </div>  
    )
}

export default Login
