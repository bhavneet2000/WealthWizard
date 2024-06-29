import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.tsx';
import Home from './Home.tsx';
import { auth, db } from "../../utils/firebase";
import { getDoc, doc } from 'firebase/firestore';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const fetchUsername = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          console.log("userdoc",userDoc.data());
          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          }
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };
    

    fetchUsername();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar setSearch={setSearch} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Home search={search} setSearch={setSearch} darkMode={darkMode} username={username} />
    </div>
  );
}

export default Main;