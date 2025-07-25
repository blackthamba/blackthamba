
import { useTheme } from 'contexts/ThemeContext';
import React, { useEffect, useState } from 'react';
import Hero from 'pages/home/components/hero';
import About from 'pages/home/components/about'
import Statute from 'pages/home/components/statute';
import Events from 'pages/home/components/events';
import Footer from 'pages/home/components/footer';
import { Divider } from '@mui/material';
import FrequentQuestions from './components/frequent-questions';

function BlackThambaLandingPage() {
  const { changeTheme, mode } = useTheme();
  const [previousMode] = useState(mode);


  const changeFavicon = (image: string) => {
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (favicon) {
      let path = process.env.PUBLIC_URL;  
      console.log(path);
      favicon.href = path + "/" + image;
    }
  }

  useEffect(() => {
    changeTheme('dark');
    changeFavicon('blackthamba.png');
    document.title = "Black Thamba";
    return () => {
      if (previousMode) changeTheme(previousMode);
      changeFavicon('favicon.png');
      document.title = "João Maciel";
    }
  }, [changeTheme, previousMode]);

  return (
    <React.Fragment>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Statute />
      <FrequentQuestions />
      <Divider />
      <Events />
      <Divider />
      <Footer />
    </React.Fragment>
  );
}

export default BlackThambaLandingPage;
