import Logo from "@/component/Logo/Logo";
import Navigation from "@/component/Navigation/Navigation";
import NavigationLinks from "@/component/NavigationLinks/NavigationLinks";
import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
  const links = [
    { name: "About Us", value: "/about" },
    { name: "Article", value: "/article" },
    { name: "FAQ", value: "/faq" },
  ];

  return (
    <header className={styles.header}>
      <Navigation>
        <NavigationLinks links={links} />
      </Navigation>
    </header>
  );
};

export default HeaderSection;
