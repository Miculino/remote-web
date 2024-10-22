// Next
import Link from "next/link";

// Constants
import { FOOTER_PRIMARY_LINKS } from "@/app/constants/footerLinks";

export default function FooterLinks() {
  return (
    <div className="flex  mx-auto w-full justify-between text-xs">
      {FOOTER_PRIMARY_LINKS.map((link, index) => (
        <div className="flex flex-1 flex-col gap-3">
          <span className="opacity-50">{link.title}</span>
          <ul className="flex flex-col gap-3" key={index}>
            {link.links.map(({ label, url }, linkIndex) => (
              <li
                className="max-w-fit rounded-full hover:bg-white hover:text-footer py-1 px-2"
                key={linkIndex}
              >
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
