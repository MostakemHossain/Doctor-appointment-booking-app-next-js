import { Work_Sans } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <div className="md:px-20">
          <Header/>
        {children}
        </div>
      </body>
    </html>
  );
}
