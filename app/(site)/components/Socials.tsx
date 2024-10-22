// Next
import Link from "next/link";

// Constants
import { SOCIAL_MEDIA_LIST } from "@/app/constants/socialMediaList";

export default function Socials() {
  return (
    <div className="flex items-center mx-auto md:mx-0 gap-3 p-2 py-3">
      {SOCIAL_MEDIA_LIST.map(({ url, logo: SocialLogo }, index) => (
        <Link key={index} href={url}>
          <SocialLogo />
        </Link>
      ))}
    </div>
  );
}
