// Next
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer w-full h-screen">
      <div className="flex justify-center w-full bg-gray-200">
        <Image
          src={"/illustration/Bump_Illustration.svg"}
          alt=""
          width={136}
          height={29}
        />
      </div>
      <div className="lg:py-20 flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-white font-semibold text-[min(48px,21px_+_1.56vw)] font-crimson">
            Grow further with Remote
          </h3>
          <Button label="Show all plans" arrow intent={"secondary"} />
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Link
            href={
              "https://apps.apple.com/app/apple-store/id1613496903?pt=122685638&ct=Remote.com&mt=8"
            }
          >
            <Image
              src={"/mobile_download/AppStore_Download.svg"}
              width={145}
              height={48}
              alt="Download Remote Mobile App For iOS"
            />
          </Link>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.remote.employ&referrer=utm_source%3DRemote.com%26utm_medium%3Dbanner"
            }
          >
            <Image
              src={"/mobile_download/GooglePlay_Download.svg"}
              width={145}
              height={48}
              alt="Download Remote Mobile App For Android"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
