import Link from "next/link";
import Nev from "../components/Nev";



const Index = () => (
  <div>
     <Nev />
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
  </div>
);

export default Index;
