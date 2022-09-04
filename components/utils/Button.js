import { Button } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Btn = ({
  children,
  className,
  onClick,
  href,
  scale = 0.8,
  hoverScale = 1.0,
}) => {
  return (
    <motion.div
      whileTap={{ scale: scale }}
      whileHover={{ scale: hoverScale }}
      onClick={onClick}
    >
      <button
        className={`cursor-pointer overflow-hidden !lowercase !p-0 !m-0 !min-w-0 !min-h-0 !bg-transparent !rounded-md ${className}`}
        href={href}
        target="_blank"
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Btn;
