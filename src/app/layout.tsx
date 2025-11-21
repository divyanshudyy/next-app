import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Default Name / Fallback",
    template: "%s | My Website",
  },
  description: "This is a global description for all pages.",
};

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotpassword" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            height: "4rem",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "white",
            fontSize: "22px",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "white" }}>
              {link.name}
            </Link>
          ))}
        </header>

        <main>{children}</main>

        <footer
          style={{
            backgroundColor: "lightblue",
            height: "4rem",
            padding: "1rem",
            color: "white",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
