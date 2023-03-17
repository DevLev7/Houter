import GreenCloud from "@/component/icons/GreenCloud";
import Image from "next/image";
import HeaderSection from "../HeasderSection/HeaderSection";
import MainSection from "../MainSection/MainSection";
import styles from "./HeaderMainSection.module.scss";

const HeaderMainSection = () => {
  return (
    <>
      <GreenCloud className={styles.green_cloud} />
      <HeaderSection />
      <Image
        className={styles.house}
        width={720}
        height={720}
        src="/images/house.jpg"
        alt="house"
      />
      <MainSection />
    </>
  );
};

export default HeaderMainSection;
