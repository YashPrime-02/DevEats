import Layout from "../../components/Layouts/Layouts";
import Brand from "../Brands/Brand";
import App_Download from "./App_Download";
import Hero from "./Hero";
import Home_about from "./Home_About";
import Home_menu from "./Home_menu";
import Home_Promo from "./Home_Promo";
import Parallax from "./Parallax";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section  */}
      {<Hero />}
      {/* Home's About Section  */}
      {<Home_about />}
      {/* Home's Promo Section  */}
      {<Home_Promo />}
      {/* Home's Parallax Section  */}
      {<Parallax/>}
      {/* App Download  Section  */}
      {<App_Download/>}
      {/* Brand  Section  */}
      {<Brand/>}
      
    </Layout>
  );
}
