import ServiceCard from "@/components/service-card/ServiceCard";
import Title from "@/components/title/Title";
import React from "react";
import style from "./style.module.css";

function Services() {
	return (
		<section className="betweencontainer">
			<Title title="Mira todo lo que tenemos para ofrecerte" />
			<div className={style.serviceContainer}>
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
			<div>Contratame</div>
		</section>
	);
}

export default Services;
