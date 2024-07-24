import { useEffect, useState } from "react";

export const DeviceInfo = () => {
  const [deviceWith, setDeviceWith] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);

  useEffect(() => {
    setDeviceWith(window?.innerWidth);
    setDeviceHeight(window?.innerHeight);
  }, []);

  window?.addEventListener("resize", () => {
    setDeviceWith(window?.innerWidth);
  });

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-10 flex items-center gap-2">
      <div
        className={
          "flex size-7 items-center justify-center rounded-full border border-black bg-white p-2 lg:p-4"
        }
      >
        <span className="hidden sm:inline-block md:hidden">sm</span>
        <span className="hidden md:inline-block lg:hidden">md</span>
        <span className="hidden lg:inline-block xl:hidden">lg</span>
        <span className="hidden xl:inline-block 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline-block">2xl</span>
      </div>
      <div className="flex items-center gap-x-2 font-semibold">
        <p>{deviceWith}</p>
        <p>X</p>
        <p>{deviceHeight}</p>
      </div>
    </div>
  );
};
