"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Menu,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  Building2,
} from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    id: "enterprise-projects",
    label: "Enterprise",
    icon: Building2,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
  },
  {
    id: "personal-projects",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-lg">
            SV
          </div>

          <div>
            <h1 className="font-bold text-lg">
              Sowmya Vejerla
            </h1>

            <p className="text-xs text-muted-foreground">
              Senior Backend Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all duration-200 ${
                activeSection === item.id
                  ? "font-semibold text-blue-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}

        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px]"
            >
              {/* Profile */}

              <div className="border-b pb-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
                    SV
                  </div>

                  <div>
                    <h2 className="font-bold">
                      Sowmya Vejerla
                    </h2>

                    <p className="text-sm text-muted-foreground">
                      Senior Backend Engineer
                    </p>
                  </div>

                </div>

              </div>

              {/* Links */}

              <nav className="mt-8 flex flex-col gap-2">

                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white"
                          : "hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </a>
                  );
                })}

              </nav>

              {/* Footer */}

              <div className="mt-10 border-t pt-6">

                <p className="text-sm leading-6 text-muted-foreground">
                  Building scalable backend systems
                  using Go, PostgreSQL, Kafka,
                  Docker and Kubernetes.
                </p>

              </div>

            </SheetContent>
          </Sheet>

        </div>

      </div>
    </nav>
  );
}