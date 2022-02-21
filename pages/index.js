import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="React-App with Next JS" />
      <meta name="keywords" content="next react " />
      <meta name="author" content="Nam" />
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
