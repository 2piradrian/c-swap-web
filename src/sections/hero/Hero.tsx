import GradientTitle from "@/components/gradient-title/GradientTitle";
import heroimage from "../../assets/images/heroimage.svg";
import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<div className="bigcontainer">
			<GradientTitle title="Creamos productos digitales" />
			<h2 className={style.subtitle}>Centrados en el usuario y en el negocio</h2>
			<Image src={heroimage} alt="" className={style.decoration} />
			<div className={style.arrow}>
				<Image src={arrow} alt="arrow" />
			</div>
		</div>
	);
}
