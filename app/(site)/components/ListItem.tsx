// Icons
import CheckedIcon from "@/app/icons/CheckedIcon";

interface ListItemProps {
  label: string;
}

export default function ListItem({ label }: ListItemProps) {
  return (
    <li className="flex items-center gap-2 text-white">
      <CheckedIcon
        className="border border-foreground max-w-fit rounded-full p-1"
        width={16}
        height={16}
        pathStrokes="var(--foreground)"
      />
      <span>{label}</span>
    </li>
  );
}
