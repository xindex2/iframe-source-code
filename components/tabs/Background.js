import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { BiPalette } from 'react-icons/bi';
import { Button } from '..';
import CircularSlider from '@fseehawer/react-circular-slider';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const BackgroundTab = ({ data, setData }) => {
  const [displayColorPicker1, setDisplayColorPicker1] = useState(false);
  const [displayColorPicker2, setDisplayColorPicker2] = useState(false);
  const [showMoreGradients, setShowMoreGradients] = useState(false);

  // styles to make the sketchbar pop over
  const popover = {
    position: 'absolute',
    zIndex: '12',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  // gradients array for gallery
  const gradients = [
    {
      colors: ['#0FF0B3', '#736EFE'],
    },
    {
      colors: ['#CE9FFC', '#7367F0'],
    },
    {
      colors: ['#C56CD6', '#3425AF'],
    },
    {
      colors: ['#fad961', '#f76b1c'],
    },
    {
      colors: ['#5b247a', '#1bcedf'],
    },
    {
      colors: ['#fcdf8a', '#f38381'],
    },
    {
      colors: ['#184e68', '#57ca85'],
    },
    {
      colors: ['#7117ea', '#ea6060'],
    },
    {
      colors: ['#17ead9', '#FF57B9'],
    },
    {
      colors: ['#FF57B9', '#A704FD'],
    },
    {
      colors: ['#E3E3E3', '#5D6874'],
    },
    {
      colors: ['#F5515F', '#0470dc'],
    },
    {
      colors: ['#fad961', '#57ca85'],
    },
    {
      colors: ['#3bb2b8', '#555'],
    },
    {
      colors: ['#622774', '#c53364'],
    },
    {
      colors: ['#f65599', '#4d0316'],
    },
    {
      name: 'Noon to Dusk',
      colors: ['#ff6e7f', '#bfe9ff'],
    },
    {
      name: 'YouTube',
      colors: ['#e52d27', '#b31217'],
    },
    {
      name: 'Cool Brown',
      colors: ['#603813', '#b29f94'],
    },
    {
      name: 'Harmonic Energy',
      colors: ['#16A085', '#F4D03F'],
    },
    {
      name: 'Playing with Reds',
      colors: ['#D31027', '#EA384D'],
    },
    {
      name: 'Sunny Days',
      colors: ['#EDE574', '#E1F5C4'],
    },
    {
      name: 'Pinky',
      colors: ['#DD5E89', '#F7BB97'],
    },
    {
      name: 'Cherry',
      colors: ['#EB3349', '#F45C43'],
    },
    {
      name: 'Mojito',
      colors: ['#1D976C', '#93F9B9'],
    },
    {
      name: 'Juicy Orange',
      colors: ['#FF8008', '#FFC837'],
    },
    {
      name: 'Mirage',
      colors: ['#16222A', '#3A6073'],
    },
    {
      name: 'Steel Gray',
      colors: ['#1F1C2C', '#928DAB'],
    },
    {
      name: 'Meridian',
      colors: ['#283c86', '#45a247'],
    },
    {
      name: 'Relay',
      colors: ['#3A1C71', '#D76D77', '#FFAF7B'],
    },
    {
      name: 'Alive',
      colors: ['#CB356B', '#BD3F32'],
    },
    {
      name: 'Scooter',
      colors: ['#36D1DC', '#5B86E5'],
    },
    {
      name: 'Terminal',
      colors: ['#000000', '#0f9b0f'],
    },
    {
      name: 'Telegram',
      colors: ['#1c92d2', '#f2fcfe'],
    },
    {
      name: 'Summer',
      colors: ['#22c1c3', '#fdbb2d'],
    },
    {
      name: 'King Yna',
      colors: ['#1a2a6c', '#b21f1f', '#fdbb2d'],
    },
    {
      name: 'Velvet Sun',
      colors: ['#e1eec3', '#f05053'],
    },
    {
      name: 'Zinc',
      colors: ['#ADA996', '#F2F2F2', '#DBDBDB', '#EAEAEA'],
    },
    {
      name: 'Hydrogen',
      colors: ['#667db6', '#0082c8', '#0082c8', '#667db6'],
    },
    {
      name: 'JShine',
      colors: ['#12c2e9', '#c471ed', '#f64f59'],
    },
    {
      name: 'Moonlit Asteroid',
      colors: ['#0F2027', '#203A43', '#2C5364'],
    },
    {
      name: 'MegaTron',
      colors: ['#C6FFDD', '#FBD786', '#f7797d'],
    },
    {
      name: 'Cool Blues',
      colors: ['#2193b0', '#6dd5ed'],
    },
    {
      name: 'Piggy Pink',
      colors: ['#ee9ca7', '#ffdde1'],
    },
    {
      name: 'Electric Peacock',
      colors: ['#8a2be2', '#0000cd', '#228b22', '#ccff00'],
    },
    {
      name: 'Under Blue Green',
      colors: ['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12'],
    },
    {
      name: 'Lensod',
      colors: ['#6025F5', '#FF5555'],
    },
    {
      name: 'Newspaper',
      colors: ['#8a2be2', '#ffa500', '#f8f8ff'],
    },
    {
      name: 'Dark Blue Gradient',
      colors: ['#2774ae', '#002E5D', '#002E5D'],
    },
    {
      name: 'Dark Blu Two',
      colors: ['#004680', '#4484BA'],
    },
    {
      name: 'Lemon Lime',
      colors: ['#7ec6bc', '#ebe717'],
    },
    {
      name: 'Beleko',
      colors: ['#ff1e56', '#f9c942', '#1e90ff'],
    },
    {
      name: 'Unicorn Rainbow',
      colors: ['#f7f0ac', '#acf7f0', '#f0acf7'],
    },
    {
      name: 'Flame',
      colors: ['#ff0000', '#fdcf58'],
    },
    {
      name: 'Blue Red',
      colors: ['#36B1C7', '#960B33'],
    },
    {
      name: 'Twitter',
      colors: ['#1DA1F2', '#009ffc'],
    },
    {
      name: 'Blooze',
      colors: ['#6da6be', '#4b859e', '#6da6be'],
    },
    {
      name: 'Bleem',
      colors: ['#4284DB', '#29EAC4'],
    },
    {
      name: 'Coffee Gold',
      colors: ['#554023', '#c99846'],
    },
    {
      name: 'Compass',
      colors: ['#516b8b', '#056b3b'],
    },
    {
      name: "Andreuzza's",
      colors: ['#D70652', '#FF025E'],
    },
    {
      name: 'Moonwalker',
      colors: ['#152331', '#000000'],
    },
    {
      name: 'Whinehouse',
      colors: ['#f7f7f7', '#b9a0a0', '#794747', '#4e2020', '#111111'],
    },
    {
      name: 'Hyper Blue',
      colors: ['#59CDE9', '#0A2A88'],
    },
    {
      name: 'Racker',
      colors: ['#EB0000', '#95008A', '#3300FC'],
    },
    {
      name: 'After the Rain',
      colors: [
        '#ff75c3',
        '#ffa647',
        '#ffe83f',
        '#9fff5b',
        '#70e2ff',
        '#cd93ff',
      ],
    },
    {
      name: 'Ultra Voilet',
      colors: ['#654ea3', '#eaafc8'],
    },
    {
      name: 'By Design',
      colors: ['#009FFF', '#ec2F4B'],
    },
    {
      name: 'Kyoo Tah',
      colors: ['#544a7d', '#ffd452'],
    },
    {
      name: 'Kye Meh',
      colors: ['#8360c3', '#2ebf91'],
    },
    {
      name: 'Kyoo Pal',
      colors: ['#dd3e54', '#6be585'],
    },
    {
      name: 'Metapolis',
      colors: ['#659999', '#f4791f'],
    },
    {
      name: 'Flare',
      colors: ['#f12711', '#f5af19'],
    },
    {
      name: 'Ash',
      colors: ['#606c88', '#3f4c6b'],
    },
    {
      name: 'Cherryblossoms',
      colors: ['#FBD3E9', '#BB377D'],
    },
    {
      name: 'Parklife',
      colors: ['#ADD100', '#7B920A'],
    },
    {
      name: 'Dance To Forget',
      colors: ['#FF4E50', '#F9D423'],
    },
    {
      name: 'Starfall',
      colors: ['#F0C27B', '#4B1248'],
    },
    {
      name: 'Red Mist',
      colors: ['#000000', '#e74c3c'],
    },
    {
      name: 'Omolon',
      colors: ['#091E3A', '#2F80ED', '#2D9EE0'],
    },
    {
      name: 'Farhan',
      colors: ['#9400D3', '#4B0082'],
    },
    {
      name: 'Purple',
      colors: ['#c84e89', '#F15F79'],
    },
    {
      name: 'Ibtesam',
      colors: ['#00F5A0', '#00D9F5'],
    },
    {
      name: 'Radioactive Heat',
      colors: ['#F7941E', '#72C6EF', '#00A651'],
    },
    {
      name: 'The Sky And The Sea',
      colors: ['#F7941E', '#004E8F'],
    },
    {
      name: 'From Ice To Fire',
      colors: ['#72C6EF', '#004E8F'],
    },
  ];

  const showMore = () => {
    if (!showMoreGradients) {
      setShowMoreGradients(true);
    } else {
      setShowMoreGradients(false);
    }
  };

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <BiPalette className="text-2xl mt-1 text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 text-[#666]">Background</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>

      <h3 className="text-gray-600 text-sm my-2">Choose Colours:</h3>
      <div className="flex items-center relative justify-between">
        <div
          className="w-full h-[10px] absolute rounded-lg border-[2px] border-[#ffffff80]"
          style={{
            background: `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`,
          }}
        ></div>
        <div
          className="w-[25px] border-[2px] border-[#ffffff80] h-[25px] rounded-full relative cursor-pointer"
          style={{ background: data.background.color1 }}
          onClick={() => setDisplayColorPicker1(true)}
        ></div>
        <div
          className="w-[25px] border-[2px] border-[#ffffff80] h-[25px] rounded-full relative cursor-pointer"
          style={{ background: data.background.color2 }}
          onClick={() => setDisplayColorPicker2(true)}
        ></div>
      </div>
      {displayColorPicker1 && (
        <div
          style={popover}
          className="pop-anim mt-2 bg-[#EEF3F9] border-2 border-[#00000010] rounded-2xl p-3 shadow-xl"
        >
          <div className="w-12 overflow-hidden inline-block absolute -top-5 left-6">
            <div className="h-5 w-5 bg-[#EEF3F9] border-2 border-[#00000010] rotate-45 transform origin-bottom-left"></div>
          </div>
          <div style={cover} onClick={() => setDisplayColorPicker1(false)} />
          <HexColorPicker
            color={data.background.color1}
            onChange={(color) =>
              setData({
                ...data,
                background: {
                  ...data.background,
                  color1: color,
                },
              })
            }
          />
        </div>
      )}
      {displayColorPicker2 && (
        <div
          style={popover}
          className="pop-anim mt-2 right-6 bg-[#EEF3F9] border-2 border-[#00000010] rounded-2xl p-3 shadow-xl"
        >
          <div className="w-12 overflow-hidden inline-block absolute -top-5 right-0">
            <div className=" h-5 w-5 bg-[#EEF3F9] border-2 border-[#00000010] rotate-45 transform origin-bottom-left"></div>
          </div>
          <div
            style={cover}
            onClick={() => setDisplayColorPicker2(false)}
            className="right-0"
          />
          <HexColorPicker
            color={data.background.color2}
            onChange={(color) =>
              setData({
                ...data,
                background: {
                  ...data.background,
                  color2: color,
                },
              })
            }
          />
        </div>
      )}
      <h3 className="text-gray-600 text-sm my-4">Choose Direction:</h3>
      <div className="circularPicker">
        <CircularSlider
          width={90}
          valueFontSize="20px"
          labelFontSize="9px"
          className="!z-0"
          verticalOffset="0em"
          dataIndex={data.background.direction}
          onChange={(angle) => {
            setData({
              ...data,
              background: {
                ...data.background,
                direction: angle,
              },
            });
          }}
        />
      </div>
      <h3 className="text-gray-600 text-sm my-4">Choose from Gallery:</h3>
      <div className="flex items-center flex-wrap">
        {gradients
          .slice(0, showMoreGradients ? gradients.length : 24)
          .map(({ colors }, index) => (
            <Button
              className="!m-[4px]"
              onClick={() => {
                setData({
                  ...data,
                  background: {
                    ...data.background,
                    color1: colors[0],
                    color2: colors[1],
                  },
                });
              }}
              key={index}
            >
              <div
                className="h-[25px] w-[25px] rounded-md !m-[4px]"
                style={{
                  background: `linear-gradient(${data.background.direction}deg, ${colors[0]}, ${colors[1]})`,
                }}
              ></div>
            </Button>
          ))}
      </div>
      <h3
        className="text-gray-600 text-sm my-4 flex items-center cursor-pointer"
        onClick={showMore}
      >
        Show {showMoreGradients ? 'less' : 'more'}
        {showMoreGradients ? (
          <FiChevronUp className="text-xl ml-1" />
        ) : (
          <FiChevronDown className="text-xl ml-1" />
        )}
      </h3>
    </div>
  );
};

export default BackgroundTab;
