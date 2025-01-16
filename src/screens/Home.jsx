import React from 'react';
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import { useSelector } from "react-redux";

const OpenLink = ({ redirectURL, logoImage }) => (
  <a href={redirectURL} target="_blank" rel="noopener noreferrer">
    <img src={logoImage} alt="logo" width={40} height={40} />
  </a>
);

const Body = () => (
  <div>
    <h2>Bienvenido a la Aplicación</h2>
    <p>Explora nuestra página de productos filtrados.</p>
  </div>
);

const Footer = () => (
  <footer style={{ textAlign: 'center', marginTop: '20px' }}>
    <p>© 2025 Tu Proyecto</p>
  </footer>
);

const Home = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contador: {count}</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <OpenLink
          redirectURL="https://vite.dev"
          logoImage={viteLogo}
        />
        <OpenLink
          redirectURL="https://react.dev"
          logoImage={reactLogo}
        />
        <OpenLink
          redirectURL="https://github.com/dheeyi/desarrollo-frontend-react-2025"
          logoImage={githubLogo}
        />
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
