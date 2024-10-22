// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Button from "../components/Button";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";

// Constants
import { FOOTER_SECONDARY_LINKS } from "@/app/constants/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="flex justify-center w-full bg-gray-200">
        <Image
          src={"/illustration/Bump_Illustration.svg"}
          alt=""
          width={136}
          height={29}
        />
      </div>
      <div className="py:10 md:py-20 lg:py-30 md:px-10 lg:px-20 flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4 mb-10 lg:mb-40">
          <h3 className="text-white font-semibold text-[min(48px,21px_+_1.56vw)] font-crimson">
            Grow further with Remote
          </h3>
          <Button label="Show all plans" arrow intent={"secondary"} />
        </div>
        <FooterLinks />
        <div className="flex gap-3 justify-center">
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
        <p className="text-xs opacity-20 -mb-5">
          Copyright © 2024. Remote Technology, Inc. All rights reserved.
        </p>
        <div className="border-t border-t-white/20 p-2 flex items-center justify-between gap-8 flex-wrap">
          <Image
            src="/Cookie.svg"
            alt="Manage Cookies Preferences"
            width={54}
            height={54}
          />
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs">
            {FOOTER_SECONDARY_LINKS.map(({ label, url }, index) => (
              <Link
                className="max-w-fit rounded-full hover:bg-white hover:text-footer py-1 px-2"
                key={index}
                href={url}
              >
                {label}
              </Link>
            ))}
          </div>

          <Socials />
        </div>
      </div>
    </footer>
  );
}
