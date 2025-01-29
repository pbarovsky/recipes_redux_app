import { useFavorites } from "../../hooks/useFavorites";
import sc from "./Header.module.css";
import { FaRegHeart } from "react-icons/fa";

export const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className={sc.header}>
      <FaRegHeart fontSize={"16px"} />
      <span className={sc.amount}>{favorites.length}</span>
    </header>
  );
};
