"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Kasparro
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/platform" className="text-sm hover:text-gray-600">
            Platform
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-600">
            About
          </Link>
          <Button asChild variant="default">
            <Link href="/app/dashboard">Launch App</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/platform"
              className="text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="/about"
              className="text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button asChild>
              <Link href="/app/dashboard">Launch App</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}