import Navbar from './Navbar';
import Hero from './Hero.jsx'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <Hero />
      <main>{children}</main>
    </>
  );
}
