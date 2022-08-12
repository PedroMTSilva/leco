import React from "react";

export const SectionStructure = ({ name, children }) => {
  return (
    <div
      name={name}
      className="w-full px-8 mb-16 pt-[10%] dark:bg-warm-gray-900"
    >
      {children}
    </div>
  );
};

export const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <p className="dark:text-warm-gray-50 lg:text-8xl md:text-8xl sm:text-5xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400">
            {title}
          </p>
        </div>
        <div className="basis-1/5"></div>
      </div>
    </div>
  );
};

export const SectionText = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="basis-1/5"></div>
      <div className="basis-3/5">
        <p className="dark:text-warm-gray-50 lg:text-xl md:text-xl sm:text-lg text-md font-medium text-center">
          {text}
        </p>
      </div>
      <div className="basis-1/5"></div>
    </div>
  );
};

export const SectionContent = ({ children }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full mt-16">
      {children}
    </div>
  );
};
