import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import homeicon from "@/assets/icons/bxs-home.svg";
import menuicon from "@/assets/icons/bxs-menu.svg";
import style from "./style.module.css";

export default function Header() {
	const [closed, setClosed] = useState<boolean>();

	useEffect(() => {
		setClosed(window.innerWidth < 900);
		window.addEventListener("resize", () => setClosed(window.innerWidth < 900), false);
	}, []);

	return (
		<header className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<Link href="/" aria-label="home" className={style.homelink}>
					<div className={style.homelink}>
						<Image src={homeicon} alt="home icon" className={style.homeicon} />
						<span>Home</span>
					</div>
				</Link>
				<Image
					src={menuicon}
					alt="burger icon"
					className={style.burger}
					onClick={() => setClosed(!closed)}
				/>
				<Navbar setClosed={setClosed} closed={closed} />
			</div>
		</header>
	);
}
