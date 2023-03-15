import Link from "next/link";
import { memo } from "react";
import Text from "../Text/Text";
import styles from "./NavigationsLinks.module.scss";

type Links = {
  name: string;
  value: string;
};

interface INavigationLinks {
  links: Links[];
}

const NavigationsLinks: React.FC<INavigationLinks> = ({ links }) => {
  return (
    <div className={styles.list}>
      {links.map((link) => (
        <Link key={link.value} href={link.value}>
          <div className={styles.item}>
            <Text tag="span" size="xs" color="white" weight="600">
              {link.name}
            </Text>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default memo(NavigationsLinks);
