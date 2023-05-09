import GradientTitle from "@/components/gradient-title/GradientTitle";
import style from "./style.module.css";

export default function Hero() {
	return (
		<div className="bigcontainer">
			<GradientTitle title="Creamos productos digitales" />
			<h2 className={style.subtitle}>Centrados en el usuario y en el negocio</h2>
		</div>
	);
}
