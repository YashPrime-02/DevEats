import Layout from "../../components/Layouts/Layouts";
import Hero from "./Hero";
import Home_about from "./Home_About";
import Home_menu from "./Home_menu";

export default function Home() {
  return (
    <Layout>
      
      {/* Hero Section  */}
      {<Hero/>}
      {/* Home's About Section  */}
      {<Home_about/>}
      {/* Home's Menu Section  */}
      {<Home_menu/>}
      
      

    </Layout>
  );
}
