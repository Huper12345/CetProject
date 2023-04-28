import './App.scss';
import React from "react"
import {Routes, Route, Link} from 'react-router-dom';
import { Home } from '../pages/Home';
import { CetTablets } from '../pages/CetDrops';
import { Layout } from '../pages/Layout';


export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='CetTablets' element={<CetTablets />} />

        </Route>
      </Routes>
    </div>
  );
};

