import Link from "next/link";

type MenuBarItemProps = {
  text: string;
  link: string;
};

export const MenuBarItem = ({ text, link }: MenuBarItemProps) => {
  return (
    <Link className="list-none px-3 py-1 rounded hoverable text-2xl font-light" href={link}>
      <p>{text}</p>
    </Link>
  );
};

export default MenuBarItem;
