import HeadSection from "@/containers/HeadSectoin/HeadSection";
import HeaderSection from "@/containers/HeasderSection/HeaderSection";
import MainSection from "@/containers/MainSection/MainSection";
import { NextPage } from "next";
import "../styles/globals.css";

const Home: NextPage = () => {
  return (
    <>
      <HeadSection />
      <main>
        <HeaderSection />
        <MainSection />
      </main>
    </>
  );
};

export default Home;
