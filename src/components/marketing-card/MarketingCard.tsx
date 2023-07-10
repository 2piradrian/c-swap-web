import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
	icon: string;
	title: string;
	deco: string;
};

function MarketingCard({ icon, title, deco }: Props) {
	return (
		<div className={style.container}>
			<Image
				src={require(`../../assets/icons/${icon}.svg`)}
				alt={title}
				className={style.icon}
			/>
			<h3>{title}</h3>
			<Image
				src={require(`../../assets/decoration/${deco}.svg`)}
				alt={title}
				className={style.deco}
			/>
		</div>
	);
}

export default MarketingCard;
