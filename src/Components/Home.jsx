import React, { useState, useEffect, useRef } from 'react';
import { TbSwitchHorizontal } from 'react-icons/tb';
import Home_ATMOX from './ATMOX/Home_ATMOX';
import Home_KATOMORI from './KATOMORI/Home_KATOMORI';

const Home = () => {
  const [change, setChange] = useState(true);

  return (
    <>
      {change ? <Home_ATMOX /> : <Home_KATOMORI />}
      <div
        className={`switchWrap ${change ? 'atok' : 'ktoa'}`}
        onClick={() => setChange(!change)}>
        <TbSwitchHorizontal className='switchIcon' />
      </div>
    </>
  );
};

export default Home;
