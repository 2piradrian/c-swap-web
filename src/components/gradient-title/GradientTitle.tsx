import style from "./style.module.css";

type Props = {
	title: string;
};

export default function GradientTitle({ title }: Props) {
	return <h1 className={style.gradient}>{title}</h1>;
}
