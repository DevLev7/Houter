import cn from "@/utils/cn";
import { ReactNode } from "react";
import styles from "./AvatarInfo.module.scss";

interface IAvatarInfoProps {
  avatar: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  className?: string;
}

const AvatarInfo: React.FC<IAvatarInfoProps> = ({
  avatar,
  title,
  text,
  className,
}) => {
  return (
    <div className={cn(styles.avatar_info, className)}>
      {avatar}
      <div className={styles.info}>
        {title}
        {text}
      </div>
    </div>
  );
};

export default AvatarInfo;
