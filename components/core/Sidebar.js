import { Tooltip } from "@mui/material";
import domtoimage from "dom-to-image";
import { AnimatePresence, motion } from "framer-motion";
import html2canvas from "html2canvas";
import React, { useCallback, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { BiCommand } from "react-icons/bi";
import { FiCopy, FiDownload, FiTwitter, FiUpload } from "react-icons/fi";
import { Button } from "..";
import ReactCanvasConfetti from "react-canvas-confetti";
import toast from "react-hot-toast";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 9999999999999,
};

const Sidebar = ({ imgBlob, setImgBlob, setData, data }) => {
  const handleImageUpload = (e) => {
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
      baseString = reader.result;
      setImgBlob(baseString);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const addInnerHtml = () => {
    const coverImage = document.querySelector("#cover_image_download");

    coverImage.innerHTML = document.getElementById(
      "cover_image_preview"
    ).innerHTML;
  };

  // download image as a .png
  const download = () => {
    addInnerHtml();

    const downloadImage = domtoimage
      .toPng(document.querySelector("#cover_image_download"), {
        height: 1350,
        width: 2400,
      })
      .then(function (dataUrl) {
        const a = document.createElement("a");

        a.href = dataUrl;
        a.download = "screenshot.png";
        a.click();
        fire();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    // toasting
    toast.promise(downloadImage, {
      loading: "Saving...",
      success: `Saved Successfully!`,
      error: "Error Saving File",
    });
  };

  const copyImage = () => {
    addInnerHtml();

    const downloadImage = domtoimage
      .toBlob(document.querySelector("#cover_image_download"), {
        height: 1350,
        width: 2400,
      })
      .then(function (dataUrl) {
        navigator.clipboard.write([
          new ClipboardItem({
            "image/png": dataUrl,
          }),
        ]);
        fire();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    // toasting
    toast.promise(downloadImage, {
      loading: "Copying...",
      success: "Copied Successfully!",
      error: "Error Saving File",
    });
  };

  useHotkeys("ctrl+c", () => copyImage());
  useHotkeys("ctrl+m", () => download());

  const templates = [
    {
      func: () =>
        setData({
          ...data,
          position: {
            x: "35",
            y: "35",
          },
          threeD: {
            x: "0",
            y: "22",
            z: "-7",
          },
          others: {
            ...data.others,
            shadow: "193",
            scale: "138",
          },
        }),
    },
    {
      func: () =>
        setData({
          ...data,
          position: {
            x: "12",
            y: "20",
          },
          threeD: {
            x: "-34",
            y: "-23",
            z: "-5",
          },
          others: {
            ...data.others,
            shadow: "200",
            scale: "106",
          },
        }),
    },
    {
      func: () =>
        setData({
          ...data,
          position: {
            x: "18",
            y: "15",
          },
          threeD: {
            x: "32",
            y: "-7",
            z: "-3",
          },
          others: {
            ...data.others,
            shadow: "200",
            scale: "117",
          },
        }),
    },
    {
      func: () =>
        setData({
          ...data,
          position: {
            x: "20",
            y: "30",
          },
          threeD: {
            x: "-24",
            y: "-20",
            z: "11",
          },
          others: {
            ...data.others,
            shadow: "200",
            scale: "106",
          },
        }),
    },
  ];

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <div className="h-full w-full lg:w-[22%] p-6">
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="w-full h-fit lg:h-full xl:h-full rounded-[1.5em] shadow-lg bg-white relative overflow-hidden flex items-center justify-between flex-col">
        <div className="w-full h-auto p-6 pb-0 overflow-y-scroll">
          <h4 className="text-[#aaa] font-[500] mb-2 ">Templates</h4>
          <div className="flex flex-wrap lg:block xl:block">
            {templates.map((template, index) => (
              <Button key={index} onClick={template.func} scale={0.95}>
                <div className="border-2 m-1 lg:m-2 xl:m-2 lg:mx-0 xl:mx-0 border-[#cccccc40] hover:border-blue-500 transition duration-500 lg:p-2 xl:p-2 rounded-xl lg:rounded-[1em] xl:rounded-[1em]">
                  <img
                    src={`/assets/templates/${index + 1}.png`}
                    alt="Screenshot"
                    className="rounded-xl lg:rounded-[1em] xl:rounded-[1em] h-[67px] lg:h-auto xl:h-auto"
                  />
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#ddd] w-full p-4 px-6 glassmorphism-2">
          {imgBlob ? (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Button className="!w-full" scale={0.95} onClick={download}>
                  <div className="bg-blue-600 py-[6px] lg:py-[8px] xl:py-[8px] px-2 lg:px-[10px] xl:px-[10px] rounded-2xl flex items-center justify-between text-white capitalize font-semibold">
                    <div className="flex items-center ml-3">
                      <FiDownload className="text-xl mr-3" />
                      Download
                    </div>
                    <div className=" p-2 py-1 text-[#ffffff90] rounded-md flex items-center">
                      <BiCommand className="mr-1" />M
                    </div>
                  </div>
                </Button>
                <Button
                  className="!w-full !mt-2"
                  scale={0.95}
                  onClick={copyImage}
                >
                  <div className="bg-[#EEF3F9] py-[6px] lg:py-[8px] xl:py-[8px] px-2 lg:px-[10px] xl:px-[10px] rounded-2xl flex items-center justify-between text-[#444] capitalize font-semibold border-2 border-[#00000010]">
                    <div className="flex items-center ml-3">
                      <FiCopy className="text-xl mr-3" />
                      Copy Image
                    </div>
                    <div className=" p-2 py-1 text-[#00000060] rounded-md flex items-center">
                      <BiCommand className="mr-1" />C
                    </div>
                  </div>
                </Button>
                <a
                  href="https://twitter.com/intent/tweet?text=Iframe%20-%20Turn%20boring%20screenshots%20into%20engaging%20assets%0A%0A%E2%86%92%20https://iframe.so"
                  className="hidden lg:flex xl:flex items-center text-center justify-center mt-3 text-sm text-[#55555597] font-[400] hover:text-blue-500 transition duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share to Twitter <FiTwitter className="ml-2" />
                </a>
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Button className="!w-full" scale={0.95} type="file">
                  <input
                    type="file"
                    name="screenshot"
                    id="screenshot"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/png, image/jpeg"
                  />
                  <label
                    htmlFor="screenshot"
                    className="bg-blue-600 py-[6px] lg:py-[8px] xl:py-[8px] px-2 lg:px-[10px] xl:px-[10px] rounded-2xl hover:bg-blue-700 flex items-center justify-between text-white capitalize font-semibold cursor-pointer"
                  >
                    <div className="flex items-center ml-3">
                      <FiUpload className="text-xl mr-3" />
                      Upload Image
                    </div>
                    <div className=" p-2 py-1 text-[#ffffff90] rounded-md flex items-center">
                      <BiCommand className="mr-1" />V
                    </div>
                  </label>
                </Button>
                <a className="hidden lg:flex xl:flex items-center text-center justify-center mt-3 text-[16px] text-[#555555] font-[400] hover:text-[#444] transition duration-500">
                  Or Paste the Copied Image
                </a>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
