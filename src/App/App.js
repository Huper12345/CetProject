import './App.scss';
import "../helpers/colors/colors.scss"
import React from "react"
import {Routes, Route, useLocation} from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web'
import { Home } from '../pages/Home';
import { CetTablets } from '../pages/CetTablets';
import { Layout } from '../pages/Layout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { EatJournalRools } from '../pages/EatJournalRools';
import { CetDrops } from '../pages/CetDrops';
import { Post1 } from '../pages/Publications/Posts/Post1';
import { Post2 } from '../pages/Publications/Posts/Post2';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const location = useLocation()
  const transitions = useTransition(location, {
    config: { 
      duration: 60 
    },
    from: { 
      opacity: "0",
      transition: "200",
    },
    enter: { 
      opacity: "1",
      transition: "200",
    },
    leave: { 
      opacity: "0",
      transition: "200",
    },
  })

  return transitions((styles, item) => (
    <animated.div style={styles}>
      <div className="App">
        <Routes location={item}>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
            <Route path='EatJournal/Food-Diary-Rools' element={<EatJournalRools />} />
            <Route path='Tablets' element={<CetTablets />} />
            <Route path='Drops' element={<CetDrops />} />
            <Route path='Publications/1' element={<Post1 />} />
            <Route path='Publications/2' element={<Post2 />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </div>
        <ToastContainer 
                theme="light"
                />
      </animated.div>
  ))
};

