import Nev from "./Nev";

const Layout = ({ mainTitle, footer ,children }) => (
  <div>
    <Nev />
    <h1>{mainTitle}</h1>
    <hr />
    {children}
    <hr />
    <h4>{footer}</h4>
  </div>
);

export default Layout;
