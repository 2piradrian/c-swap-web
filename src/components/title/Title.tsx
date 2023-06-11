import React from "react";
import style from "./style.module.css";

type Props = {
	title: string;
};

function Title({ title }: Props) {
	return <h2 className={style.text}>{title}</h2>;
}

export default Title;
