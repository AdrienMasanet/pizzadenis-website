import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuBarItemProps = {
  text: string;
  link: string;
  onClickCallback?: () => void;
};

export const MenuBarItem = ({ text, link, onClickCallback }: MenuBarItemProps) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [router]);

  return (
    <Link className={`${link === currentPath ? "active" : ""} list-none rounded hoverable select-none`} href={link} onClick={onClickCallback}>
      {text}
    </Link>
  );
};

export default MenuBarItem;
