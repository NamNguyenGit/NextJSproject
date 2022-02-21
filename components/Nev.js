import Link from "next/link";

const Nev = () => (
  <div>
    <Link href="/">
      <a> Home page </a>
    </Link>
    <Link href="/about">
      <a> About page </a>
    </Link>
  </div>
);

export default Nev;
