"use client"

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import {
  DumbbellIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  XIcon,
  ZapIcon,
} from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { dark } from "@clerk/themes"
import { useState } from "react"

const Navbar = () => {
  const { isSignedIn } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            Meta<span className="text-primary">Shred</span>.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton
                appearance={{
                  baseTheme: dark,
                  variables: { colorPrimary: "green" },
                }}
              />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <DumbbellIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>

                <div className="flex gap-2 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/generate-program">Get Started</Link>
                  </Button>
                  <div className="flex items-center justify-center">
                    <UserButton
                      appearance={{
                        baseTheme: dark,
                        variables: { colorPrimary: "green" },
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-3 pt-2">
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
export default Navbar
