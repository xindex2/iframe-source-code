import React, { useState } from "react";
import {
  Annotation,
  BackgroundTab,
  Button,
  Mockup,
  Others,
  Position,
  Text,
  ThreeD,
} from "..";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiBox,
  FiLayers,
  FiMapPin,
  FiPenTool,
  FiSun,
  FiX,
  FiType,
} from "react-icons/fi";
import { GoBrowser } from "react-icons/go";
import { BiPalette } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

const LeftBar = (props) => {
  const [x, setX] = useState(-350);
  const [sidebarProperty, setSidebarProperty] = useState("");

  const toggleSidebar = (property) => {
    if (property === sidebarProperty) {
      setX(-350);
      setSidebarProperty("");
    } else {
      setX(125);
      setSidebarProperty(property);
    }
  };

  const sidebarProperties = [
    {
      name: "Mockup",
      icon: (
        <GoBrowser className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },
    {
      name: "3d",
      icon: <FiBox className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />,
    },
    {
      name: "Position",
      icon: (
        <FiMapPin className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },

    {
      name: "Other Properties",
      icon: (
        <FiLayers className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },
    {
      name: "Annotation",
      icon: (
        <FiPenTool className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },
    {
      name: "Text",
      icon: (
        <FiType className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },
    {
      name: "Background",
      icon: (
        <BiPalette className="text-lg xl:text-2xl lg:text-2xl text-gray-700" />
      ),
    },
  ];
  return (
    <>
      <div className="w-full lg:w-[7%] xl:w-[7%] min-w-[130px] h-0 lg:h-full xl:h-full lg:p-6 xl:p-6 relative z-[15]">
        <div className="fixed lg:relative xl:relative bottom-0 left-0 w-full h-auto lg:h-full xl:h-full rounded-t-[1.5em] lg:rounded-b-[1.5em] xl:rounded-b-[1.5em] shadow-2xl lg:shadow-lg xl:shadow-lg p-1 bg-[#FEFEFE] flex items-center justify-evenly xl:justify-center lg:justify-center flex-row-reverse lg:flex-col xl:flex-col flex-wrap z-5  border border-[#eee]">
          {sidebarProperty && (
            <div
              className="block lg:hidden xl:hidden absolute top-[-50px] left-1/2 transform -translate-x-1/2 rounded-2xl h-fit w-fit"
              onClick={() => setSidebarProperty("")}
            >
              <AnimatePresence>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="shadow-xl shadow-blue-600/40 rounded-2xl"
                >
                  <Button className="!w-fit !h-fit" scale={0.95}>
                    <div className="bg-[#fff] py-[6px] lg:py-[8px] xl:py-[8px] px-5 lg:px-[10px] xl:px-[10px] rounded-2xl flex items-center justify-center text-blue-600 capitalize font-semibold border-2 border-[#00000005]">
                      <FiX className="text-xl mr-3" />
                      Close
                    </div>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
          {sidebarProperties.map((property, index) => (
            <Button
              className="!block !my-2"
              key={index}
              onClick={() => toggleSidebar(property.name)}
              hoverScale={1.1}
            >
              <Tooltip title={property.name} placement="right" arrow>
                <div
                  className={`p-2 lg:p-3 xl:p-3 bg-[#EEF3F9] rounded-lg border-2 border-[#eee] transition duration-200 text-[#444] ${
                    sidebarProperty === property.name && "border-blue-500"
                  }`}
                >
                  {property.icon}
                </div>
              </Tooltip>
            </Button>
          ))}
        </div>
        </div>
      {sidebarProperty && (
        <div className="block lg:hidden xl:hidden glassmorphism text-34xl h-full shadow-lg w-full absolute top-0 left-0 z-[10] rounded-[1.5em] overflow-x-hidden">
          {sidebarProperty === "Background" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <BackgroundTab {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "3d" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ThreeD {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "Text" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Text {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "Position" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Position {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "Mockup" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Mockup {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "Other Properties" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Others {...props} />
              </motion.div>
            </AnimatePresence>
          )}
          {sidebarProperty === "Annotation" && (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Annotation {...props} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
      <motion.div
        animate={{
          x: x,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block xl:block glassmorphism text-34xl h-[95vh] shadow-lg my-6 w-[35vh] absolute top-0 left-0 z-[10] rounded-[1.5em] overflow-x-hidden"
      >
        {sidebarProperty === "Background" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <BackgroundTab {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "3d" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ThreeD {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "Text" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Text {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "Position" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Position {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "Mockup" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Mockup {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "Other Properties" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Others {...props} />
            </motion.div>
          </AnimatePresence>
        )}
        {sidebarProperty === "Annotation" && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Annotation {...props} />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </>
  );
};

export default LeftBar;
