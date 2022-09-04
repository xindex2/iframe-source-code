import React, { useState } from 'react';
import { Sidebar, Main, LeftBar } from '../components';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const App = () => {
  const [imgBlob, setImgBlob] = useState();
  const [children, setChildren] = useState([]);
  const [data, setData] = useState({
    background: {
      color1: '#00F3FF',
      color2: '#3524FF',
      direction: 45,
    },
    threeD: {
      x: 0,
      y: 0,
      z: 0,
    },
    position: {
      x: 16,
      y: 20,
    },
    others: {
      opacity: 100,
      scale: 110,
      shadow: 0,
      border: {
        width: 1,
        color: '#247CD2',
      },
      border_radius: 30,
    },
    mockup: 'normal',
  });

  const props = { data, setData, imgBlob, setImgBlob, children, setChildren };
  return (
    <div className="bg-[#ECF2F5] lg:h-screen xl:h-screen w-screen overflow-hidden flex lg:flex-row xl:flex-row flex-col text-[#444] pb-16 lg:pb-0 xl:pb-0">
      <div className="block lg:hidden xl:hidden pt-6 px-6">
        <h1 className="text-5xl Poppins font-bold text-blue-500 flex items-center">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/waving-hand_1f44b.png"
            height={37}
            width={37}
            alt="Wave"
            className="mr-2"
          />{' '}
          Iframe
        </h1>
        <p className="text-blue-500 text-semibold mb-1 text-xs">
          Turn boring screenshots into <br /> engaging assets
        </p>
      </div>
      <LeftBar {...props} />
      <Main {...props} />
      <Sidebar {...props} />
    </div>
  );
};

export default App;
