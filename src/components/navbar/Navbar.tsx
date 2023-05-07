import Link from "next/link";
import Image from "next/image";
import cross from "@/assets/icons/bxs-cross.svg";
import style from "./style.module.css";
import NavItem from "./NavItem";

type Props = {
	setClosed: Function;
	closed: boolean | undefined;
};

export default function Navbar({ setClosed, closed }: Props) {
	return (
		<div
			className={` ${style.navBox} ${!closed ? style.navBoxActive : style.navBoxInactive}`}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<Image src={cross} alt="burger icon" className={style.close} />
			<ul className={style.navList}>
				<NavItem href="/home#services" arialabel="Servicios" title="Servicios" />
				<NavItem href="/portfolio" arialabel="Proyectos" title="Proyectos" />
				<NavItem href="/home#team" arialabel="Equipo" title="Equipo" />
				<NavItem href="/home#contact" arialabel="Contacto" title="Contacto" />
			</ul>
		</div>
	);
}
