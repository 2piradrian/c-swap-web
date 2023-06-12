import React from "react";
import style from "./style.module.css";
import Image from "next/image";

type Props = {
	service: string;
	icon: string;
	deco: string;
};

function ServiceCard({ service, icon, deco }: Props) {
	return (
		<div className={style.container}>
			<Image
				src={require(`../../assets/icons/${icon}.svg`)}
				alt={service}
				className={style.icon}
			/>
			<h3>{service}</h3>
			<Image
				src={require(`../../assets/decoration/${deco}.svg`)}
				alt={service}
				className={style.deco}
			/>
		</div>
	);
}

export default ServiceCard;
