// Components
import FooterLinksGroup from "./FooterLinksGroup";

// Constants
import { FOOTER_PRIMARY_LINKS } from "@/app/constants/footerLinks";

export default function FooterLinks() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-full justify-between text-xs p-2">
      {FOOTER_PRIMARY_LINKS.map((link, index) => (
        <div className="flex flex-1 flex-col gap-3 p-2 border-b border-b-white/30 lg:border-b-0">
          <FooterLinksGroup key={index} links={link.links} title={link.title} />
        </div>
      ))}
    </div>
  );
}
