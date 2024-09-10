import Image from "next/image";
import localFont from "next/font/local";
import React, { useState, useEffect } from 'react';
export default HomePage;


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
function HomePage() {
  const names = ['Ambatukam', 'Ambatublow', 'Ambasing'];
 
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div className="text-center font-bold text-6xl">
      <Header title="Develop. Preview. Ship." />
      <br></br>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
        
      <br></br>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}