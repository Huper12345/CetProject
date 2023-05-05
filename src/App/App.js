import './App.scss';
import React from "react"
import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { CetTablets } from '../pages/CetTablets';
import { Layout } from '../pages/Layout';
import { EatJournalRools } from '../pages/EatJournalRools';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/Food-Diary-Rools' element={<EatJournalRools />} />
          <Route path='CetTablets' element={<CetTablets />} />

        </Route>
      </Routes>
      
    </div>
  );
};

