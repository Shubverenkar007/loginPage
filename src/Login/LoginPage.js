import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='main'>
      <div className='amazon-card'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='amazon'></img>
      </div>
      <div className='login-page'>
      
        <h1>Login</h1>
        <img className='tree-img' src='https://previews.123rf.com/images/freaktor/freaktor1908/freaktor190800005/128099288-simple-silhouette-of-tree-logo-vector-graphics-illustrations.jpg' alt='tree' />
        <hr />

        <div className='input-fields'>
          <form>
            <input type='email' placeholder='Email' required/><br />
            <input type='password' placeholder='Password'/><br />
            <button type='submit'>Sign In</button>
            </form>
        </div>
        <div className='signin-methods'>
            <div className='login-options'>
                <p>Forgot Password?</p>
                <p className='newUser'>New User? Sign Up</p>
            </div>

            <p className='or'>or</p>

            <div className='google-link'><p>CONTINUE WITH GOOGLE</p></div>
            <div className='facebook-link'><i></i><p>CONTINUE WITH FACEBOOK</p></div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
