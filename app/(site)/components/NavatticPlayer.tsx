// Components
import Button from "./Button";

// Icons
import RocketShipIcon from "@/app/icons/RocketShipIcon";

export default function NavatticPlayer() {
  return (
    <div className="mr-30">
      <div className="flex">
        <div className="flex-grow flex-1 max-w-full w-full rounded-3xl border-[6px] border-white shadow-md">
          <div className="border-[16px] border-[#EFF3FF] rounded-3xl">
            <div className="rounded-3xl">
              <iframe
                className="w-full aspect-video rounded-2xl"
                src="https://remote.navattic.com/vk830kbm"
              />
            </div>
          </div>
        </div>
        <div className="relative w-52">
          <div className="sticky top-1/2 py-20">
            <Button
              rounded="rounded-full rounded-l-none"
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
