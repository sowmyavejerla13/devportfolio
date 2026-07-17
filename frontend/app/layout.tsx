import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://devportfolio-gamma-beige.vercel.app"
  ),

  title: {
    default: "Sowmya Vejerla | Senior Backend Engineer",
    template: "%s | Sowmya Vejerla",
  },

  description:
    "Senior Backend Engineer specializing in Go, Microservices, Distributed Systems, PostgreSQL, Kafka, Docker, Kubernetes and Cloud Native applications.",

  applicationName: "Sowmya Vejerla Portfolio",

  keywords: [
    "Sowmya Vejerla",
    "Senior Backend Engineer",
    "Backend Engineer",
    "Go Developer",
    "Golang",
    "Microservices",
    "Distributed Systems",
    "REST API",
    "PostgreSQL",
    "Kafka",
    "Docker",
    "Kubernetes",
    "Cloud Native",
    "Software Engineer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Sowmya Vejerla",
    },
  ],

  creator: "Sowmya Vejerla",
  publisher: "Sowmya Vejerla",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Sowmya Vejerla | Senior Backend Engineer",
    description:
      "Senior Backend Engineer specializing in Go, Microservices, Distributed Systems.",
    url: "/",
    siteName: "Sowmya Vejerla Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sowmya Vejerla | Senior Backend Engineer",
    description:
      "Senior Backend Engineer | Go | Microservices | Distributed Systems",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}