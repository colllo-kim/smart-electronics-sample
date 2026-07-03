"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Moon,
  Sun,
  GitCompare,
  Heart,
  User,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Offers", href: "/deals" },
  { name: "All Products", href: "/products" },
  { name: "New Arrivals", href: "/arrivals" },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Load dark mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", String(newDark));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50">
      <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Top Utility Bar */}
        <div className="flex items-center justify-between py-stack-sm border-b border-outline-variant/30">
          <div className="flex items-center gap-stack-md flex-1">
            <Link
              href="/"
              className="text-headline-lg-mobile md:text-headline-lg font-headline-lg font-black text-primary dark:text-inverse-primary tracking-tighter"
            >
              Smart Electronics
            </Link>
            {/* Search - hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <Input
                type="text"
                placeholder="Search washers, fridges, TVs and more..."
                className="w-full bg-surface-container pl-10 py-2 rounded-full border-none focus:ring-2 focus:ring-primary text-body-sm font-body-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-stack-md">
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={toggleDark}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Compare - hidden on small */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hidden sm:inline-flex"
              aria-label="Compare products"
            >
              <GitCompare className="w-5 h-5" />
            </Button>

            {/* Heart / Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full relative hidden sm:inline-flex"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Button>

            {/* User - hidden on tablet/mobile */}
            <div className="hidden lg:flex items-center gap-2 group cursor-pointer px-3 py-1.5 rounded-full hover:bg-surface-container transition-all">
              <User className="w-5 h-5" />
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant leading-none">Hi, collins</p>
                <p className="text-label-lg font-label-lg leading-none">Account</p>
              </div>
            </div>

            {/* Cart */}
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-surface-container-high px-3 sm:px-4 py-2 rounded-full hover:bg-surface-container-highest transition-all border-none"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <div className="hidden sm:block text-right">
                <p className="text-[10px] text-on-surface-variant leading-tight">Your Cart</p>
                <p className="text-label-lg font-label-lg leading-tight">Ksh 0</p>
              </div>
            </Button>

            {/* Hamburger Menu Button - visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop (hidden on mobile) */}
        <nav className="hidden md:flex items-center justify-between py-stack-sm overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-stack-lg min-w-max">
            <Button
              variant="default"
              className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-label-lg text-label-lg hover:bg-primary/20"
            >
              <Menu className="w-5 h-5" />
              All Categories
            </Button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-lg text-label-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1"
                    : "text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button className="ml-stack-lg bg-inverse-surface text-surface py-2 px-6 rounded-lg flex items-center gap-2 hover:scale-95 duration-150 ease-in-out font-label-lg text-label-lg">
            Visit Outlet
            <ArrowRight className="w-4 h-4" />
          </Button>
        </nav>

        {/* Mobile Menu - collapsible */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-outline-variant/30 space-y-4 animate-in slide-in-from-top duration-200">
            {/* Search Bar - mobile version */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <Input
                type="text"
                placeholder="Search washers, fridges, TVs and more..."
                className="w-full bg-surface-container pl-10 py-2 rounded-full border-none focus:ring-2 focus:ring-primary text-body-sm font-body-sm"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button
                variant="default"
                className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-label-lg text-label-lg hover:bg-primary/20 w-full justify-start"
              >
                <Menu className="w-5 h-5" />
                All Categories
              </Button>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-lg text-label-lg transition-colors ${
                    isActive(link.href)
                      ? "text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1"
                      : "text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button className="bg-inverse-surface text-surface py-2 px-6 rounded-lg flex items-center gap-2 hover:scale-95 duration-150 ease-in-out font-label-lg text-label-lg w-full justify-center">
                Visit Outlet
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Mobile user info */}
              <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/30 mt-2">
                <User className="w-5 h-5 text-on-surface-variant" />
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant leading-none">Hi, collins</p>
                  <p className="text-label-lg font-label-lg leading-none">My Account</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}