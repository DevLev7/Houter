import Link from "next/link";
import { memo, ReactNode } from "react";
import Logo from "../Logo/Logo";
import styles from "./Navigation.module.scss";

interface INavigationProps {
  children?: ReactNode;
}

const Navigation: React.FC<INavigationProps> = ({ children }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Logo />
          </Link>
          <div className={styles.links}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navigation);
