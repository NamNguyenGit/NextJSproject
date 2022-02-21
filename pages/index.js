import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
  <Layout
    mainTitle="My Home Page build with Next"
    footer={` Copyright ${new Date().getFullYear()} `}
  >
    <Head>
      <title>Home Page</title>
     
    </Head>

    <h1>Hello from next</h1>
    <Link href="/about">
      <a> About page</a>
    </Link>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi itaque
      incidunt corporis quos facilis accusamus fugit earum architecto, velit
      fuga sapiente temporibus provident error maiores, minus sunt illo quia
      obcaecati!
    </p>
  </Layout>
);

export default Index;
