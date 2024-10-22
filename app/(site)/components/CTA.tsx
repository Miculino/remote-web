// Components
import Subheading from "./Subheading";
import Button from "./Button";

interface CTAProps {
  subheading: string;
  description: string[];
  btnLabel: string;
}

export default function CTA({ subheading, description, btnLabel }: CTAProps) {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="flex flex-col gap-7">
        <Subheading>{subheading}</Subheading>
        {description.map((paragraph, index) => (
          <p key={index} className="font-poppins text-base">
            {paragraph}
          </p>
        ))}
      </div>
      <Button
        intent="primary"
        label={btnLabel}
        arrow
        arrowPathStrokes="var(--foreground)"
      />
    </div>
  );
}
