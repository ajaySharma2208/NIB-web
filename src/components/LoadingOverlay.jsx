import React from 'react';

const LoadingOverlay = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      {/* You can replace the above spinner with a GIF */}
     
    </div>
  );
};

export default LoadingOverlay;