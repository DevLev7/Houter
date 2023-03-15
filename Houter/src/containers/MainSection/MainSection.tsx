import Text from "@/component/Text/Text";
import styles from "./MainSections.module.scss";

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Text tag="h1" style="h1">
              Find the place to live your dreams easily here
            </Text>
            <Text>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
