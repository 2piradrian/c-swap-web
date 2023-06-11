import ServiceCard from "@/components/service-card/ServiceCard";
import Title from "@/components/title/Title";
import style from "./style.module.css";
import React from "react";

function Services() {
	return (
		<section className="betweencontainer">
			<Title title="Mira todo lo que tenemos para ofrecerte" />
			<div className={style.serviceContainer}>
				<ServiceCard service="Diseño de identidad" icon="design-service" />
				<ServiceCard service="Programación web" icon="develop-service" />
				<ServiceCard service="Diseño UX/UI" icon="uxui-service" />
			</div>
			<div>Contratame</div>
		</section>
	);
}

export default Services;
