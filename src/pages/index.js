import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Preview.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
