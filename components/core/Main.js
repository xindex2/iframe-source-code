import React, { useEffect } from "react";
import {
  FiArrowDownCircle,
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiHeart,
  FiHome,
  FiLayout,
  FiMoreVertical,
  FiPlus,
  FiRotateCw,
  FiUpload,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";
import { BsShieldShaded, BsTrophy, BsUpload } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineTrophy, AiTwotoneLock } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Button, Rnd } from "..";
import { BiCommand } from "react-icons/bi";

const Main = ({
  data,
  setData,
  imgBlob,
  setImgBlob,
  children,
  setChildren,
}) => {
  // resize cover image to fit the view
  const resizeCoverImage = () => {
    const cover_image = document.querySelector("#cover_image_preview");
    const container = document.querySelector(".container");

    // get width and height of cover_image
    const maxWidth = cover_image.offsetWidth;
    const maxHeight = cover_image.offsetHeight;

    // get width and height of window
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    let scale; // scale to be used

    // early exit
    if (width >= maxWidth && height >= maxHeight) {
      cover_image.style.transform = "";
      return;
    }

    scale = Math.min(width / maxWidth, height / maxHeight); // trick to get scale

    cover_image.style.transform = `scale(${scale})`; // transform scale applied
  };

  // useEffect to control window resize and all
  useEffect(() => {
    resizeCoverImage();

    window.addEventListener("resize", resizeCoverImage);

    var IMAGE_MIME_REGEX = /^image\/(p?jpeg|gif|png)$/i;

    var loadImage = function (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setImgBlob(e.target.result);
      };
      reader.readAsDataURL(file);
    };

    document.onpaste = function (e) {
      var items = e.clipboardData.items;

      for (var i = 0; i < items.length; i++) {
        if (IMAGE_MIME_REGEX.test(items[i].type)) {
          loadImage(items[i].getAsFile());
          return;
        }
      }
    };
  });
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const handleImageUpload = (file) => {
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
      baseString = reader.result;
      setImgBlob(baseString);
    };
    reader.readAsDataURL(file);
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleImageUpload(files[0]);
    }
  };

  return (
    <div className="h-[30vh] lg:h-full xl:h-full w-full lg:w-[71%] xl:w-[71%] relative">
      <div
        id="cover_image_download"
        className="absolute z-[-10] cover_image"
        style={{
          background: `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`,
        }}
      ></div>
      <div className="h-full overflow-hidden w-full relative flex items-center justify-center container z-[0]">
        <div className="scale-[.9] lg:scale-[.85] xl:scale-[.85] z-[0]">
          <div
            id="cover_image_preview"
            className="relative cover_image overflow-hidden select-none rounded-[2em] z-[0]"
            style={{
              background: `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`,
            }}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
          >
            <div
              className="w-[1800px] overflow-hidden"
              style={{
                transform: `translateX(${data.position.x}%) translateY(${
                  data.position.y
                }%) rotateX(${data.threeD.x}deg) rotateY(${
                  data.threeD.y
                }deg) rotateZ(${data.threeD.z}deg) scale(${
                  data.others.scale / 100
                })`,
                borderRadius: `${data.others.border_radius}px`,
                opacity: data.others.opacity / 100,
                border: `${data.others.border.width}px solid ${data.others.border.color}`,
                boxShadow: `0px 0px ${data.others.shadow}px rgba(0, 0, 0, 0.2`,
              }}
            >
              {!imgBlob && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h3 className="text-[2em] mb-5">
                    Drag and Drop your screenshot, Paste from Clipboard or
                  </h3>
                  <Button className="!w-full" scale={0.95} type="file">
                    <input
                      type="file"
                      name="screenshot"
                      id="screenshot"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                      accept="image/png, image/jpeg"
                    />
                    <label
                      htmlFor="screenshot"
                      className="text-[2em] bg-blue-600 py-[20px] px-[25px] rounded-[1.1em] hover:bg-blue-700 flex items-center justify-between text-white capitalize font-semibold cursor-pointer"
                    >
                      <div className="flex items-center ml-3">
                        <FiUpload className="text-[1em] mr-3" />
                        Upload Image
                      </div>
                      <div className=" p-2 py-1 text-[#ffffff90] rounded-md flex items-center">
                        <BiCommand className="mr-1 text-[1em]" />V
                      </div>
                    </label>
                  </Button>
                </div>
              )}

              {data.mockup === "normal" && (
                <div className="px-8 py-6 bg-[#EDF2F7] w-[1800px]">
                  <div className="flex items-center">
                    <div className="rounded-full h-[25px] w-[25px] bg-red-500 mx-2"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-yellow-500 mx-2"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-green-500 mx-2"></div>
                  </div>
                </div>
              )}
              {data.mockup === "firefox" && (
                <div className="w-[1800px]">
                  <div className="bg-[#565656] w-full flex items-center pl-8">
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-red-500 mx-2"></div>
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-yellow-500 mx-2"></div>
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-green-500 mx-2"></div>
                    <div className="h-[63px] bg-[#F9F9FA] w-[400px] flex items-center justify-end ml-6">
                      <FiX className="text-4xl mr-3" />
                    </div>
                    <FiPlus className="text-4xl text-white ml-3" />
                  </div>
                  <div className="bg-[#F9F9FA] w-full flex items-center justify-between px-4 py-3 mt-[-1px]">
                    <div className="flex items-center">
                      <FiArrowLeft className="text-4xl mr-3 rounded-full border-[2px] border-[#000] p-1" />
                      <FiArrowRight className="text-4xl mr-3 p-1" />
                      <FiRotateCw className="text-4xl mr-3 p-1" />
                      <FiHome className="text-4xl mr-3 p-1" />
                    </div>
                    <div className="w-[750px] border-2 py-1 px-2 border-[#BBB] rounded-xl">
                      <AiTwotoneLock className="text-4xl mr-3 p-1" />
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAccountCircle className="text-4xl mr-3" />
                      <div className="h-[40px] bg-gray-500 w-[1px]"></div>
                      <FaBars className="text-4xl ml-3 p-1" />
                    </div>
                  </div>
                </div>
              )}
              {data.mockup === "chrome" && (
                <div className="w-[1800px]">
                  <div className="bg-[#DFE1E5] w-full flex items-center pl-8">
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-red-500 mx-2"></div>
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-yellow-500 mx-2"></div>
                    <div className="my-5 rounded-full h-[25px] w-[25px] bg-green-500 mx-2"></div>
                    <div className="h-[65px] bg-[#F9F9FA] w-[30px] flex items-center justify-end ml-6 z-[0]">
                      <div className="h-[65px] bg-[#DFE1E5] w-[30px] flex items-center justify-end rounded-br-[1em]"></div>
                    </div>
                    <div className="h-[50px] mt-3 bg-[#F9F9FA] w-[400px] flex items-center justify-end rounded-t-xl z-[0]">
                      <FiX className="text-3xl mr-3" />
                    </div>
                    <div className="h-[65px] bg-[#F9F9FA] w-[200px] flex items-center justify-end z-[0]">
                      <div className="h-[65px] bg-[#DFE1E5] w-[200px] flex items-center justify-start rounded-bl-[1em]">
                        <FiPlus className="mt-2 text-3xl text-[#777] ml-3" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F9FA] w-full flex items-center justify-between px-4 py-3 mt-[-4px] relative border-t border-white">
                    <div className="flex items-center">
                      <FiArrowLeft className="text-4xl mr-3 p-1" />
                      <FiArrowRight className="text-4xl mr-3 p-1" />
                      <FiRotateCw className="text-4xl mr-3 p-1" />
                      <div className="w-[1550px] py-1 px-2 bg-[#ededed] rounded-full ml-3">
                        <AiTwotoneLock className="text-[34px] mr-3 p-1" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FiMoreVertical className="text-4xl ml-3 p-1" />
                    </div>
                  </div>
                </div>
              )}
              {data.mockup === "macOS" && (
                <div className="px-8 py-6 bg-[#EDF2F7] w-[1800px] text-[#666]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rounded-full h-[20px] w-[20px] bg-red-500 mx-2"></div>
                      <div className="rounded-full h-[20px] w-[20px] bg-yellow-500 mx-2"></div>
                      <div className="rounded-full h-[20px] w-[20px] bg-green-500 mx-2"></div>
                      <FiLayout className="text-4xl ml-9 mx-4" />
                      <FiChevronLeft className="text-4xl mx-4" />
                      <FiChevronRight className="text-4xl mx-4" />
                    </div>
                    <div className="flex items-center">
                      <BsShieldShaded className="text-3xl mx-4" />
                      <div className="w-[750px] border-2 py-1 px-2 border-[#BBB] rounded-xl flex items-center justify-end">
                        <FiRotateCw className="text-3xl p-1" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FiArrowDownCircle className="text-4xl mx-4" />
                      <FiUploadCloud className="text-4xl mx-4" />
                      <FiPlus className="text-4xl mx-4" />
                      <FiCopy className="text-4xl mx-4" />
                    </div>
                  </div>
                </div>
              )}

              <img
                src={imgBlob ? imgBlob : "/white.png"}
                alt="Screenshot"
                className="w-[1800px] border-t border-[#ccc] mt-[-1px]"
              />
            </div>
            {children.map((child, key) => (
              <Rnd key={key}>{child.component}</Rnd>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block xl:block absolute top-[25px] left-[25px]">
        <h1 className="text-5xl Poppins font-bold text-blue-500 flex items-center">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/waving-hand_1f44b.png"
            height={37}
            width={37}
            alt="Wave"
            className="mr-2"
          />{" "}
          Iframe
        </h1>
        <p className="text-blue-500 text-semibold mb-1 text-xs">
          Turn boring screenshots into <br /> engaging assets
        </p>
        {/* <Button>
          <div className="relative w-fit !overflow-hidden shiny-button bg-[#2563EB95] hover:bg-blue-500 py-1 font-semibold rounded-md px-2 text-[10px] capitalize text-[#fff]">
            BuilderHacks 2022 Winner
          </div>
        </Button> */}
      </div>
      {/* <div className="absolute top-[25px] right-[25px] flex items-center">
        <Button className="!overflow-hidden !ml-2" scale={0.95}>
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=334049&theme=light&period=daily"
            alt=""
            width="200"
          />
        </Button>
      </div> */}
      <div className="hidden lg:flex xl:flex  absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <h3 className="flex items-center justify-center font-[500]">
          {/*Built by*/}
          {/*<a*/}
          {/*  href="https://twitter.com/saviomartin7"*/}
          {/*  className="font-semibold mx-[5px] mr-[10px] text-blue-600 border-b-2 border-blue-500 hover:border-blue-600 hover:border-b-[3px] transition duration-500"*/}
          {/*>*/}
          {/*  Savio Martin*/}
          {/*</a>*/}
          {/*Supported by*/}
          {/*<a*/}
          {/*  href="https://devdojo.com/"*/}
          {/*  className="font-semibold mx-[5px] mr-[20px] text-blue-600 border-b-2 border-blue-500 hover:border-blue-600 hover:border-b-[3px] transition duration-500"*/}
          {/*>*/}
          {/*  DevDojo*/}
          {/*</a>*/}
        </h3>
      </div>
      <div className="hidden lg:block xl:block absolute bottom-7 right-0 scale-x-[-1] rotate-[75deg]">
        <img
          src="arrow.svg"
          className="animate__animated animate__tada animate__infinite"
          height={60}
          width={60}
          alt="Arrow"
        />
      </div>
    </div>
  );
};

export default Main;
