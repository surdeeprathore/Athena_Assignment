import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const slides = [
  {
    text: 'Manage all HR Operations from the comfort of your home.',
    highlight: 'HR Operations',
    image: 'https://t3.ftcdn.net/jpg/03/99/24/82/360_F_399248286_Ogm0T8CFeauN4Hdn42FqWfsCE02dJBbX.jpg'
  },
  {
    text: 'Track employee attendance and leave in real-time.',
    highlight: 'attendance and leave',
    image: 'https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=612x612&w=0&k=20&c=hZ14F6Fa4edYWwg0BduAj0is8gdcORsBBHpQcQbAPKc='
  },
  {
    text: 'Automate Employe and performance reviews with ease.',
    highlight: 'Automate payroll',
    image: 'https://www.cpomagazine.com/wp-content/uploads/2022/11/privileged-access-basics-and-policies-relevant-to-businesses_1500.jpg'
  }
];

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLogin = () => {
    const dummyEmail = 'Athena@gmail.com';
    const dummyPassword = '123456';

    if (email === dummyEmail && password === dummyPassword) {
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Login</h2>
        <p>Login to your account.</p>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Reset Password?</a>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Sign In
        </button>

        <p className="signup-text">
          Don’t have an account yet? <a href="#">Join KRIS today.</a>
        </p>
      </div>

      <div
        className="login-right"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`
        }}
      >
        <div className="overlay" />
        <div className="login-text">
          <p>
            {slides[currentSlide].text.split(slides[currentSlide].highlight)[0]}
            <span className="highlight">{slides[currentSlide].highlight}</span>
            {slides[currentSlide].text.split(slides[currentSlide].highlight)[1]}
          </p>
        </div>
        <div className="login-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
