import './App.scss';
import React from "react"
import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { CetTablets } from '../pages/CetTablets';
import { Layout } from '../pages/Layout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { EatJournalRools } from '../pages/EatJournalRools';
import { CetDrops } from '../pages/CetDrops';
import { Post1 } from '../pages/Publications/Posts/Post1';
import { Post2 } from '../pages/Publications/Posts/Post2';

export const App = () => {
  

  return (
    <div className="App">
      <Routes>
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
  );
};

