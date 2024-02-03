import { Link } from "react-router-dom";
import { Account } from "./account";
import styles from "./Header.module.scss";

type Props = {
  isAccountVisible: boolean;
};

function OptionMenu({ to, children }: { to: string; children: string }) {
  return (
    <li>
      <Link to={to} className="p-2 rounded-lg bg-transparent hover:bg-emerald-200/50 hover:transition-colors">
        {children}
      </Link>
    </li>
  );
}

function Menu() {
  return (
    <ul className="flex items-center gap-4 ">
      <OptionMenu to="/">Home</OptionMenu>
      <OptionMenu to="/about">About Us</OptionMenu>
      <OptionMenu to="/vote">Surveys</OptionMenu>
    </ul>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/recursos/webp/icono.webp"
        alt="JEL logo"
        title="JEL"
        className="w-16"
      />
      <span className="font-medium text-6xl font-BebasNeue">JEL</span>
    </div>
  );
}

function Header({ isAccountVisible }: Props) {
  return (
    <header className={`sticky top-0 z-50 w-full flex items-center justify-center backdrop-blur-sm bg-white/70 `}>
      <div className="w-[1400px] p-2 flex items-center justify-between ">
        <Logo />
        <div className="flex gap-4 font-medium">
          <Menu />
          <div>{isAccountVisible && <Account />}</div>
        </div>
      </div>
    </header>
  );
}

export { Header };
