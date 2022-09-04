import { Slider } from '@mui/material';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import toast from 'react-hot-toast';
import { FiLayers, FiRotateCw } from 'react-icons/fi';
import { Button } from '..';

const Other = ({ data, setData }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

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
  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiLayers className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Others</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Scale:</h3>
        <input
          value={data.others.scale}
          onChange={(e) => {
            setData({
              ...data,
              others: {
                ...data.others,
                scale: e.target.value,
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.others.scale}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            others: {
              ...data.others,
              scale: e.target.value,
            },
          })
        }
        min={0}
        max={200}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Opacity:</h3>
        <input
          value={data.others.opacity}
          onChange={(e) => {
            setData({
              ...data,
              others: {
                ...data.others,
                opacity: e.target.value,
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.others.opacity}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            others: {
              ...data.others,
              opacity: e.target.value,
            },
          })
        }
        min={0}
        max={100}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Shadow:</h3>
        <input
          value={data.others.shadow}
          onChange={(e) => {
            setData({
              ...data,
              others: {
                ...data.others,
                shadow: e.target.value,
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.others.shadow}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            others: {
              ...data.others,
              shadow: e.target.value,
            },
          })
        }
        min={0}
        max={200}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Border Width:</h3>
        <input
          value={data.others.border.width}
          onChange={(e) => {
            setData({
              ...data,
              others: {
                ...data.others,
                border: {
                  ...data.others.border,
                  width: e.target.value,
                },
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.others.border.width}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            others: {
              ...data.others,
              border: {
                ...data.others.border,
                width: e.target.value,
              },
            },
          })
        }
        min={0}
        max={100}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Border Radius:</h3>
        <input
          value={data.others.border_radius}
          onChange={(e) => {
            setData({
              ...data,
              others: {
                ...data.others,
                border_radius: e.target.value,
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.others.border_radius}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            others: {
              ...data.others,
              border_radius: e.target.value,
            },
          })
        }
        min={0}
        max={100}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600 mr-2">Border Color:</h3>
        <div
          className="w-[30px] border-[2px] border-[#ffffff80] h-[30px] rounded-full relative cursor-pointer"
          style={{ background: data.others.border.color }}
          onClick={() => setDisplayColorPicker(true)}
        ></div>
      </div>
      {displayColorPicker && (
        <div
          style={popover}
          className="pop-anim mt-2 bg-[#EEF3F9] border-2 border-[#00000010] rounded-2xl p-3 shadow-xl"
        >
          <div className="w-12 overflow-hidden inline-block absolute -top-5 left-6">
            <div className="h-5 w-5 bg-[#EEF3F9] border-2 border-[#00000010] rotate-45 transform origin-bottom-left"></div>
          </div>
          <div
            style={cover}
            onClick={() => setDisplayColorPicker(false)}
            className="right-0"
          />
          <HexColorPicker
            color={data.others.border.color}
            onChange={(color) =>
              setData({
                ...data,
                others: {
                  ...data.others,
                  border: {
                    ...data.others.border,
                    color: color,
                  },
                },
              })
            }
          />
        </div>
      )}
      <Button
        scale={0.98}
        className="!mt-4"
        onClick={() => {
          setData({
            ...data,
            others: {
              ...data.others,
              opacity: 100,
              scale: 110,
              shadow: 0,
              border: {
                width: 1,
                color: '#247CD2',
              },
              border_radius: 30,
            },
          });
          toast.success('Reseted all Other Properties!');
        }}
      >
        <div className="bg-[#EEF3F9] text-sm border-2 border-[#00000010] rounded-lg py-2 px-3 font-semibold flex items-center !normal-case">
          <FiRotateCw className="text-gray-600 mr-2" />
          Reset All
        </div>
      </Button>
    </div>
  );
};

export default Other;
