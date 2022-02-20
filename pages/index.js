import Link from "next/link";
const Index = () => (
  <div>
    <h1>Hello from next</h1>
    <Link href="/about">
      <a> About page</a>
    </Link>
  </div>
);

export default Index;
