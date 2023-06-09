import Header from "@/components/header/Header";
import Head from "next/head";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function AppLayout({ children, title }: Props) {
	return (
		<>
			<Head>
				<title>{"C-Swap | " + title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
}
