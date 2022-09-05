import React, { useCallback, useMemo, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import toast from 'react-hot-toast';
import { FiType } from 'react-icons/fi';
import { Button } from '..';

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

const Preview = ({ preview, component, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(component);
  }, [component, onClick]);

  return (
    <Button onClick={handleClick} className="!my-2 !w-full !block">
      <div className="w-full border-2 border-[#cccccc40] p-3 py-2 flex items-center justify-start bg-[#ECF1F7] rounded-2xl relative hover:border-blue-500 transition duration-500 !normal-case">
        {preview}
      </div>
    </Button>
  );
};

const Text = ({ children, setChildren }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState('#000000');

  const textArray = useMemo(
    () => [
      {
        preview: (
          <h1 className="font-extrabold text-3xl" style={{ color: color }}>
            Add a Heading
          </h1>
        ),
        component: (
          <h1
            className="font-extrabold text-[6em] outline-none"
            contentEditable="true"
            style={{ color: color }}
          >
            Add a Heading
          </h1>
        ),
      },
      {
        preview: (
          <h3 className="font-semibold text-xl" style={{ color: color }}>
            Add a Sub-Heading
          </h3>
        ),
        component: (
          <h3
            className="font-semibold text-[4.5em] outline-none"
            contentEditable="true"
            style={{ color: color }}
          >
            Add a Sub-Heading
          </h3>
        ),
      },
      {
        preview: (
          <p className="font-[400] text-xs" style={{ color: color }}>
            Add paragraph text Lorem ipsum dolor sit
          </p>
        ),
        component: (
          <p
            className="font-[400] text-[2em] outline-none"
            contentEditable="true"
            style={{ color: color }}
          >
            Add paragraph text Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt, rem? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Reiciendis, eos.
          </p>
        ),
      },
    ],
    [color]
  );

  const handleColorPickerChange = useCallback((color) => setColor(color), []);

  const toggleColorPicker = useCallback(
    () => setDisplayColorPicker((prev) => !prev),
    []
  );

  const addText = useCallback(
    (component) => {
      setChildren([...children, component]);

      toast.success(`Added Text Block`);
    },
    [children, setChildren]
  );

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiType className="text-3xl  text-[#666] bg-gray-100 p-1 rounded-md" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Text</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600 mr-2">Color:</h3>
        <div
          className="w-[30px] border-[2px] border-[#ffffff80] h-[30px] rounded-full relative cursor-pointer"
          style={{ background: color }}
          onClick={toggleColorPicker}
        ></div>
      </div>
      <h4 className="text-xs mb-7 text-gray-400 mt-1">
        You can&apos;t change the color after imported
      </h4>
      {displayColorPicker && (
        <div
          style={popover}
          className="pop-anim mt-2 bg-[#EEF3F9] border-2 border-[#00000010] rounded-2xl p-3 shadow-xl"
        >
          <div className="w-12 overflow-hidden inline-block absolute -top-5 left-6">
            <div className="h-5 w-5 bg-[#EEF3F9] border-2 border-[#00000010] rotate-45 transform origin-bottom-left"></div>
          </div>
          <div style={cover} onClick={toggleColorPicker} className="right-0" />
          <HexColorPicker color={color} onChange={handleColorPickerChange} />
        </div>
      )}
      {textArray.map((text, idx) => (
        <Preview
          key={idx}
          preview={text.preview}
          component={text.component}
          onClick={addText}
        />
      ))}
    </div>
  );
};

export default Text;
