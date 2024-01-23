import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginSignupForm = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const switchForm = (form) => {
    setActiveForm(form);
  };

  return (
    <section className="forms-section">
      <div className="forms">
        <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
          <button type="button" className="switcher switcher-login" onClick={() => switchForm('login')}>
            Login
            <span className="underline"></span>
          </button>
          <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
            </fieldset>
            <Link to="/home">
              <button type="submit" className="btn-login">
                Login
              </button>
            </Link>
          </form>
        </div>
        <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
          <button type="button" className="switcher switcher-signup" onClick={() => switchForm('signup')}>
            Sign Up
            <span className="underline"></span>
          </button>
          <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`}>
            <fieldset>
              <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-username">Username</label>
                <input
                  id="signup-username"
                  type="text"
                  required
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input
                  id="signup-email"
                  type="email"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
            </fieldset>
            <Link to="/home">
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSignupForm;
