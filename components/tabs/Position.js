import { Slider } from '@mui/material';
import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import { FiMapPin, FiRotateCw } from 'react-icons/fi';
import { Button } from '..';

const Position = ({ data, setData }) => {
  const handleSquarePicker = useCallback(
    (x, y) => {
      setData((data) => ({
        ...data,
        position: {
          ...data.position,
          x: x,
          y: y,
        },
      }));
    },
    [setData]
  );

  const handleButton1Click = useCallback(() => {
    handleSquarePicker('0', '0');
  }, [handleSquarePicker]);

  const handleButton2Click = useCallback(() => {
    handleSquarePicker('12', '0');
  }, [handleSquarePicker]);

  const handleButton3Click = useCallback(() => {
    handleSquarePicker('25', '0');
  }, [handleSquarePicker]);

  const handleButton4Click = useCallback(() => {
    handleSquarePicker('0', '20');
  }, [handleSquarePicker]);

  const handleButton5Click = useCallback(() => {
    handleSquarePicker('12', '20');
  }, [handleSquarePicker]);

  const handleButton6Click = useCallback(() => {
    handleSquarePicker('25', '20');
  }, [handleSquarePicker]);

  const handleButton7Click = useCallback(() => {
    handleSquarePicker('0', '42');
  }, [handleSquarePicker]);

  const handleButton8Click = useCallback(() => {
    handleSquarePicker('12', '42');
  }, [handleSquarePicker]);

  const handleButton9Click = useCallback(() => {
    handleSquarePicker('25', '42');
  }, [handleSquarePicker]);

  const handlePositionXChange = useCallback(
    (e) => {
      setData((data) => ({
        ...data,
        position: {
          ...data.position,
          x: e.target.value,
        },
      }));
    },
    [setData]
  );

  const handlePositionYChange = useCallback(
    (e) => {
      setData((data) => ({
        ...data,
        position: {
          ...data.position,
          y: e.target.value,
        },
      }));
    },
    [setData]
  );

  const handleResetClick = useCallback(() => {
    setData((data) => ({
      ...data,
      position: {
        ...data.position,
        x: 12,
        y: 20,
      },
    }));

    toast.success('Position reset!');
  }, [setData]);

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiMapPin className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Position</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="bg-[#EEF3F9] rounded-2xl flex items-center justify-between text-[#444] capitalize font-semibold border-2 border-[#00000010] flex-col overflow-hidden">
        <div className="flex items-center justify-between w-[110%] mt-[-15px]">
          <Button onClick={handleButton1Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton2Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton3Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
        <div className="flex items-center justify-between w-[110%] my-1">
          <Button onClick={handleButton4Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton5Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton6Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
        <div className="flex items-center justify-between w-[110%] mb-[-15px]">
          <Button onClick={handleButton7Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton8Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
          <Button onClick={handleButton9Click}>
            <div className="bg-white px-6 py-4 border-2 border-dashed border-[#00000025] hover:border-blue-500 transition duration-500 hover:bg-[#2563EB20]"></div>
          </Button>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <h3 className="text-gray-600">Position X:</h3>
        <input
          value={data.position.x}
          onChange={handlePositionXChange}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.position.x}
        valueLabelDisplay="auto"
        onChange={handlePositionXChange}
        min={-100}
        max={100}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Position Y:</h3>
        <input
          value={data.position.y}
          onChange={handlePositionYChange}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.position.y}
        valueLabelDisplay="auto"
        onChange={handlePositionYChange}
        min={-100}
        max={100}
      />
      <Button scale={0.98} className="!w-min  !mt-4" onClick={handleResetClick}>
        <div className="bg-[#EEF3F9] text-sm border-2 border-[#00000010] rounded-lg py-2 px-3 font-semibold flex items-center w-min !normal-case">
          <FiRotateCw className="text-gray-600 mr-2" />
          Reset
        </div>
      </Button>
    </div>
  );
};

export default Position;
