import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/shared/sidebar";
import Footer from "@/components/shared/Footer";
import SearchComponent from "@/components/shared/search";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SideBar/>
        <SearchComponent/>
        <main className="flex flex-row">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
