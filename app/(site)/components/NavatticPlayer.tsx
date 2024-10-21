// Components
import Button from "./Button";

// Icons
import RocketShipIcon from "@/app/icons/RocketShipIcon";

// SVGs
import DottedArrow from "@/app/svg/DottedArrow";
import GridPatternLeft from "@/app/svg/GridPatternLeft";
import GridPatternRight from "@/app/svg/GridPatternRight";

export default function NavatticPlayer() {
  return (
    <div className=" relative pb-60 -mb-96 z-10">
      <div className="absolute bottom-0 -translate-y-40 lg:-translate-y-10 left-20 flex gap-8 -z-1">
        <DottedArrow className="opacity-50 h-40" />
        <DottedArrow />
        <DottedArrow className="opacity-50 h-28" />
      </div>
      <GridPatternLeft className="absolute left-0 -translate-x-1/2 hidden lg:block" />
      <GridPatternRight className="absolute -right-40 top-[calc(50%-160px)] -translate-y-1/2 rotate-90 hidden lg:block" />
      <div className="flex flex-col lg:flex-row relative z-10">
        <div className="flex-grow flex-1 max-w-full w-full rounded-3xl lg:border-[6px] border-4 border-white shadow-md">
          <div className="lg:border-[16px] border-8 border-[#EFF3FF] rounded-3xl">
            <div className="rounded-3xl">
              <iframe
                className="w-full h-auto aspect-video rounded-2xl"
                src="https://remote.navattic.com/vk830kbm"
              />
            </div>
          </div>
        </div>
        <div className="relative w-52 mx-auto mt-6 lg:mt-0">
          <div className="lg:sticky lg:top-1/2 lg:py-20">
            <Button
              rounded="rounded-full lg:rounded-l-none"
              className="rounded-l-none hover:bg-rocketship-hover"
              label="Book a Live Demo"
              icon={RocketShipIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
