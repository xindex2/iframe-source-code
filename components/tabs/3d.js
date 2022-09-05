import React, { useCallback } from 'react';
import { FiBox, FiRotateCw } from 'react-icons/fi';
import Slider from '@mui/material/Slider';
import toast from 'react-hot-toast';
import { Button } from '..';

const ThreeD = ({ data, setData }) => {
  const handleTiltXChange = useCallback(
    (e) =>
      setData((data) => ({
        ...data,
        threeD: {
          ...data.threeD,
          x: e.target.value,
        },
      })),
    [setData]
  );

  const handleTiltYChange = useCallback(
    (e) =>
      setData((data) => ({
        ...data,
        threeD: {
          ...data.threeD,
          y: e.target.value,
        },
      })),
    [setData]
  );

  const handleTiltZChange = useCallback(
    (e) =>
      setData((data) => ({
        ...data,
        threeD: {
          ...data.threeD,
          z: e.target.value,
        },
      })),
    [setData]
  );

  const handleResetClick = useCallback(() => {
    setData((data) => ({
      ...data,
      threeD: {
        ...data.threeD,
        x: 0,
        y: 0,
        z: 0,
      },
    }));

    toast.success('3d Reseted!');
  }, [setData]);

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiBox className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">3d</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center mt-2">
        <h3 className="text-gray-600">Tilt X:</h3>
        <input
          value={data.threeD.x}
          onChange={handleTiltXChange}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.x}
        valueLabelDisplay="auto"
        onChange={handleTiltXChange}
        min={-50}
        max={50}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Tilt Y:</h3>
        <input
          value={data.threeD.y}
          onChange={handleTiltYChange}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.y}
        valueLabelDisplay="auto"
        onChange={handleTiltYChange}
        min={-50}
        max={50}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Tilt Z:</h3>
        <input
          value={data.threeD.z}
          onChange={handleTiltZChange}
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.z}
        valueLabelDisplay="auto"
        onChange={handleTiltZChange}
        min={-50}
        max={50}
      />
      <Button scale={0.98} className="!w-min !mt-4" onClick={handleResetClick}>
        <div className="bg-[#EEF3F9] text-sm border-2 border-[#00000010] rounded-lg py-2 px-3 font-semibold flex items-center w-min !normal-case">
          <FiRotateCw className="text-gray-600 mr-2" />
          Reset
        </div>
      </Button>
    </div>
  );
};

export default ThreeD;
