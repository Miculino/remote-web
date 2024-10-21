export default function Subheading({ children }: React.PropsWithChildren) {
  return (
    <h2 className="font-crimson text-[min(50px,_20px_+_1vw)] font-bold leading-tight">
      {children}
    </h2>
  );
}
