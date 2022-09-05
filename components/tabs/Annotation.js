import { Tooltip } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import toast from 'react-hot-toast';
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiAward,
  FiBox,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiCircle,
  FiGift,
  FiHeadphones,
  FiHeart,
  FiLink,
  FiPenTool,
  FiSend,
  FiSmile,
  FiThumbsDown,
  FiThumbsUp,
  FiTriangle,
  FiXCircle,
  FiZap,
} from 'react-icons/fi';
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

const Shape = ({ name, icon, component, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(name, component);
  }, [onClick, name, component]);

  return (
    <>
      <Button onClick={handleClick} className="!m-1">
        <Tooltip title={name} arrow placement="bottom">
          <div className="m-1 border-2 border-[#cccccc40] p-4 bg-[#ECF1F7] rounded-2xl relative hover:border-blue-500 transition duration-500">
            {icon}
          </div>
        </Tooltip>
      </Button>
    </>
  );
};

const Annotation = ({ children, setChildren }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState('#000000');

  const shapesArray = useMemo(
    () => [
      {
        name: 'Circle',
        icon: (
          <FiCircle className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiCircle className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Heart',
        icon: (
          <FiHeart className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiHeart className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Smile',
        icon: (
          <FiSmile className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiSmile className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Thumbs Up',
        icon: (
          <FiThumbsUp className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiThumbsUp className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Thumbs Down',
        icon: (
          <FiThumbsDown
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiThumbsDown
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Zap',
        icon: <FiZap className="h-[42px] w-[42px]" style={{ color: color }} />,
        component: (
          <FiZap className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Triangle',
        icon: (
          <FiTriangle className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiTriangle className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Cross Circle',
        icon: (
          <FiXCircle className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiXCircle className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Box',
        icon: <FiBox className="h-[42px] w-[42px]" style={{ color: color }} />,
        component: (
          <FiBox className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Award',
        icon: (
          <FiAward className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiAward className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Gift',
        icon: <FiGift className="h-[42px] w-[42px]" style={{ color: color }} />,
        component: (
          <FiGift className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Headphones',
        icon: (
          <FiHeadphones
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiHeadphones
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Link',
        icon: <FiLink className="h-[42px] w-[42px]" style={{ color: color }} />,
        component: (
          <FiLink className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Send',
        icon: <FiSend className="h-[42px] w-[42px]" style={{ color: color }} />,
        component: (
          <FiSend className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Chevrons Down',
        icon: (
          <FiChevronsDown
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiChevronsDown
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Chevrons Up',
        icon: (
          <FiChevronsUp
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiChevronsUp
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Chevrons Left',
        icon: (
          <FiChevronsLeft
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiChevronsLeft
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Chevrons Right',
        icon: (
          <FiChevronsRight
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiChevronsRight
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Arrow Up',
        icon: (
          <FiArrowUp className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiArrowUp className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Arrow Down',
        icon: (
          <FiArrowDown className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiArrowDown className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
      {
        name: 'Arrow Right',
        icon: (
          <FiArrowRight
            className="h-[42px] w-[42px]"
            style={{ color: color }}
          />
        ),
        component: (
          <FiArrowRight
            className="h-[100%] w-[100%]"
            style={{ color: color }}
          />
        ),
      },
      {
        name: 'Arrow Left',
        icon: (
          <FiArrowLeft className="h-[42px] w-[42px]" style={{ color: color }} />
        ),
        component: (
          <FiArrowLeft className="h-[100%] w-[100%]" style={{ color: color }} />
        ),
      },
    ],
    [color]
  );

  const showColorPicker = useCallback(() => setDisplayColorPicker(true), []);

  const hideColorPicker = useCallback(() => {
    setDisplayColorPicker(false);
  }, []);

  const handleColorPickerChange = useCallback((color) => setColor(color), []);

  const addIcon = useCallback(
    (name, component) => {
      setChildren([...children, { component }]);

      toast.success(`Added ${name} Icon`);
    },
    [children, setChildren]
  );

  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiPenTool className="text-2xl  text-[#666]" />{' '}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Annotation</h2>{' '}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600 mr-2">Color:</h3>
        <div
          className="w-[30px] border-[2px] border-[#ffffff80] h-[30px] rounded-full relative cursor-pointer"
          style={{ background: color }}
          onClick={showColorPicker}
        ></div>
      </div>
      <h4 className="text-xs mb-4 text-gray-400 mt-1">
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
          <div style={cover} onClick={hideColorPicker} className="right-0" />
          <HexColorPicker color={color} onChange={handleColorPickerChange} />
        </div>
      )}
      <div className="flex items-center flex-wrap">
        {shapesArray.map((shape) => (
          <Shape
            key={shape.name}
            name={shape.name}
            icon={shape.icon}
            component={shape.component}
            onClick={addIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Annotation;
