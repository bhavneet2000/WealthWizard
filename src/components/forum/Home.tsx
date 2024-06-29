import React from 'react';
import Rightbar from './Rightbar.tsx';

type HomeProps = {
  search: string;
  setSearch: (search: string) => void;
  darkMode: boolean;
  username: string;
}

const Home = ({ search, setSearch, darkMode, username }: HomeProps) => {
  console.log("usernamehome",username);
  return (
    <div className={`h-screen bg-gray-100 ${darkMode ? 'dark' : ''}`}>
      
      <Rightbar search={search} setSearch={setSearch} darkMode={darkMode} userFirstName={username}
       />
  
    </div>
  );
};

export default Home;