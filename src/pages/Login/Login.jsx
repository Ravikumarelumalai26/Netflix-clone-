import React, { useState } from 'react';
import './login.css'; 
import logo from '../../assets/logo.png'; 
import { login, signup } from '../../firebase';


function Login() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [signState, setSignState] = useState('Sign In');
  const [loading, setLoading] = useState(false); 
  const handleLogin = async (event) => {
    event.preventDefault(); 
    setLoading(true); 

    if (signState === 'Sign In') {
      await login(email, password); 
    } else {
      await signup(name, email, password); 
    }
    setLoading(false); 
  };

  return (
    loading ? 
       
        <div className="login-spinner">
          
        </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="Login form logo" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form onSubmit={handleLogin}>
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Add required attribute for email validation
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Add required attribute for password validation
          />

          <button type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;