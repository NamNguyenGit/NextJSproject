import Link from "next/link";
import Layout from "../components/Layout";
const myStyle = { color: "red", borderLeft: "5px solid black", padding: "5px" };

const About = () => (
  <Layout>
     
    <h2>About page</h2>
    <Link href="/">
      <a style={myStyle}> Home page</a>
    </Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
      quidem quos totam tenetur quisquam in officiis deserunt. Esse ad unde
      libero tempora. Praesentium obcaecati ab voluptas provident! Iusto, quia
      expedita?
    </p>

    <style jsx>{`
      p {
        color: indigo;
        font-size: 20px;
      }
    `}</style>
  </Layout>
);

export default About;
