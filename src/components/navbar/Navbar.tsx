import Link from "next/link";
import style from "./style.module.css";

type Props = {
	setClosed: Function;
};

export default function Navbar({ setClosed }: Props) {
	return (
		<div
			className={style.navBox}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			{/* CLOSE ICON */}
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
