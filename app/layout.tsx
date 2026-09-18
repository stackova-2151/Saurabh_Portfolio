import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Ganjale | Software & Flutter Developer",
  icons: {
    icon: "/my_img.png",
    shortcut: "/my_img.png",
    apple: "/my_img.png",
  },
  description:
    "Portfolio of Saurabh Ganjale, a Software & Flutter Developer specializing in mobile applications, web platforms, admin dashboards and custom business software.",
  keywords: [
    "Saurabh Ganjale",
    "Flutter Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "Mobile App Developer",
    "Pune",
    "India",
  ],
  authors: [{ name: "Saurabh Ganjale" }],
  creator: "Saurabh Ganjale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saurabhganjale.dev",
    title: "Saurabh Ganjale | Software & Flutter Developer",
    description:
      "Portfolio of Saurabh Ganjale, a Software & Flutter Developer specializing in mobile applications, web platforms, admin dashboards and custom business software.",
    siteName: "Saurabh Ganjale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Ganjale | Software & Flutter Developer",
    description:
      "Software & Flutter Developer specializing in mobile applications, web platforms and custom business software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
