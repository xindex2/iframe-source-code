import { Slider, Tooltip } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';
import { FiMapPin, FiRotateCw } from 'react-icons/fi';
import { Button } from '..';

const Position = ({ data, setData }) => {
  const handleSquarePicker = (x, y) => {
    console.log(x, y);
    setData({
      ...data,
      position: {
        ...data.position,
        x: x,
        y: y,
      },
    });
  };
  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiMapPin className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Position</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="bg-[#EEF3F9] rounded-2xl flex items-center justify-between text-[#444] capitalize font-semibold border-2 border-[#00000010] flex-col overflow-hidden">
        <div className="flex items-center justify-between w-[110%] mt-[-15px]">
          <Button onClick={() => handleSquarePicker('0', '0')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('12', '0')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('25', '0')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
        <div className="flex items-center justify-between w-[110%] my-1">
          <Button onClick={() => handleSquarePicker('0', '20')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('12', '20')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('25', '20')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
        <div className="flex items-center justify-between w-[110%] mb-[-15px]">
          <Button onClick={() => handleSquarePicker('0', '42')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('12', '42')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={() => handleSquarePicker('25', '42')}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <h3 className="text-gray-600">Position X:</h3>
        <input
          value={data.position.x}
          onChange={(e) => {
            setData({
              ...data,
              position: {
                ...data.position,
                x: e.target.value,
              },
            });
            console.log(e.target.value);
          }}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.position.x}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            position: {
              ...data.position,
              x: e.target.value,
            },
          })
        }
        min={-100}
        max={100}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Position Y:</h3>
        <input
          value={data.position.y}
          onChange={(e) =>
            setData({
              ...data,
              position: {
                ...data.position,
                y: e.target.value,
              },
            })
          }
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.position.y}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            position: {
              ...data.position,
              y: e.target.value,
            },
          })
        }
        min={-100}
        max={100}
      />
      <Button
        scale={0.98}
        className="!w-min  !mt-4"
        onClick={() => {
          setData({
            ...data,
            position: {
              ...data.position,
              x: 12,
              y: 20,
            },
          });
          toast.success('Position Reseted!');
        }}
      >
        <div className="bg-[#EEF3F9] text-sm border-2 border-[#00000010] rounded-lg py-2 px-3 font-semibold flex items-center w-min !normal-case">
          <FiRotateCw className="text-gray-600 mr-2" />
          Reset
        </div>
      </Button>
    </div>
  );
};

export default Position;
