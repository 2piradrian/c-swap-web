import Link from "next/link";
import Image from "next/image";
import cross from "@/assets/icons/bxs-cross.svg";
import style from "./style.module.css";

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
				<li className={style.navRoutes}>
					<Link href="/home#services" aria-label="Servicios">
						Servicios
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/portfolio" aria-label="Proyectos">
						Proyectos
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/home#team" aria-label="Equipo">
						Equipo
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/home#contact" aria-label="Contacto">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
}
