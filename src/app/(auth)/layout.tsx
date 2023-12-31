import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Terms from "@/components/shared/terms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Complaint Register",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white max-w-[1920px] max-h-screen">
        <main className="flex flex-col justify-center items-center">
          {children}
        </main>
        <Terms />
      </body>
    </html>
  );
}
