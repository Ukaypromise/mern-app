import React from "react";

const Loading = () => {
  return (
    <main className=" mt-20 w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Loading.....
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
