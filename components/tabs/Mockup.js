import React from 'react';
import { GoBrowser } from 'react-icons/go';
import { Button } from '..';

const Mockup = ({ data, setData }) => {
  const mockups = ['normal', 'chrome', 'firefox', 'macOS', 'none'];

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <GoBrowser className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Mockup</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      {mockups.map((mockup, index) => (
        <Button
          key={index}
          scale={0.95}
          onClick={() =>
            setData({
              ...data,
              mockup: mockup,
            })
          }
        >
          <div
            className={`border-2 border-[#cccccc40] p-2 rounded-2xl relative ${
              data.mockup === mockup && 'border-[#2563EB]'
            }`}
          >
            <img
              src={`/assets/mockups/${index + 1}.png`}
              alt=""
              className="rounded-2xl z-0 relative"
              width={185}
              height={185}
            />
            <h4 className="absolute bottom-2 left-2 bg-gray-200 border border-[#ccc] py-1 px-2 rounded-md text-sm capitalize font-semibold z-[3]">
              {mockup}
            </h4>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Mockup;
