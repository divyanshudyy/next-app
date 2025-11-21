import Link from "next/link";

export const metadata = {
  title: "Next Home",
  description: "abc",
};

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/blog"}>Blog</Link>
      <br />
      <Link href={"/products"}>products</Link>
      <br />
      <Link href={"/dashboard"}>dashboard</Link>
      <br />
      <Link href={"/docs"}>docs</Link>
      <br />
      <Link href={"/about"}>about</Link>
      <br />
      <Link href={"/profile"}>profile</Link>
      <br />
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      &nbsp;&nbsp;&nbsp;
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French</Link>
      &nbsp;&nbsp;&nbsp;
      <Link href={"/articles/breaking-news-123?lang=es"}>Read in Spanish</Link>
    </>
  );
}
