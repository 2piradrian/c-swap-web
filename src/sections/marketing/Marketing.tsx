import Title from "@/components/title/Title";
import React from "react";
import style from "./style.module.css";

import MarketingCard from "@/components/marketing-card/MarketingCard";

function Marketing() {
	return (
		<div className="smallcontainer">
			<Title title="Lleva tu proyecto a la realidad..." />
			<div className={style.marketingContainer}>
				<MarketingCard
					icon="design-service"
					title="Adaptativo y accesible."
					deco="service-card-deco1"
				/>
				<MarketingCard
					icon="design-service"
					title="Diferenciate del resto."
					deco="service-card-deco2"
				/>
				<MarketingCard
					icon="design-service"
					title="Hacé que tu marca crezca."
					deco="service-card-deco3"
				/>
				<MarketingCard
					icon="design-service"
					title="Diseño centrado en el usuario."
					deco="service-card-deco1"
				/>
				<MarketingCard
					icon="design-service"
					title="Rediseñá tu marca."
					deco="service-card-deco2"
				/>
				<MarketingCard
					icon="design-service"
					title="Renová tu web."
					deco="service-card-deco3"
				/>
			</div>
		</div>
	);
}

export default Marketing;
