import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Menu, Twitter } from "lucide-react";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dinstack",
  description:
    "A software service company specialized in creating scalable web and Mobile services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-sky-500 text-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              <Image src="/dinstack.png" alt="Din" width={75} height={75} />{" "}
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="hover:text-sky-200 transition duration-300">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-sky-200 transition duration-300">
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-sky-200 transition duration-300">
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-sky-200 transition duration-300">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className="text-sky-600 hover:text-sky-800 transition duration-300">
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-sky-600 hover:text-sky-800 transition duration-300">
                      About
                    </Link>
                    <Link
                      href="/services"
                      className="text-sky-600 hover:text-sky-800 transition duration-300">
                      Services
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sky-600 hover:text-sky-800 transition duration-300">
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-sky-700 text-white hover:bg-sky-800 hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>
        {children}
        {/*  */}
        <footer className="bg-sky-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About DinStack</h3>
                <p className="text-sm">
                  Empowering businesses with cutting-edge web solutions and
                  unparalleled expertise.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm hover:text-sky-300 transition duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-sm hover:text-sky-300 transition duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-sm hover:text-sky-300 transition duration-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm hover:text-sky-300 transition duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm">Email: info@dinstack.com</p>
                <p className="text-sm">Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-sky-300 transition duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-sky-300 transition duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-sky-300 transition duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-sky-300 transition duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-sky-700 text-center text-sm">
              © {new Date().getFullYear()} DinStack. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
