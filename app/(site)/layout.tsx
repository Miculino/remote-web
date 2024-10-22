import type { Metadata } from "next";
import { Crimson_Pro, Poppins } from "next/font/google";
import "../globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
});

console.log(poppins, crimsonPro);

export const metadata: Metadata = {
  title:
    "Global HR Solutions & Employment Tools for Distributed Teams | Remote",
  description:
    "Hire international talent in minutes. Remote is the most disruptive global payroll, tax, HR and compliance solution for distributed teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${crimsonPro.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
