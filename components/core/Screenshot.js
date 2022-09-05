/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Screenshot = React.memo(({ imgBlob }) => {
  return (
    <img
      src={imgBlob ? imgBlob : '/white.png'}
      alt="Screenshot"
      className="w-[1800px] border-t border-[#ccc] mt-[-1px]"
    />
  );
});

Screenshot.displayName = 'Screenshot';

export default Screenshot;
