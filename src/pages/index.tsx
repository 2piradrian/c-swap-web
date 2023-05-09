import AppLayout from "@/layout/AppLayout";
import Hero from "@/sections/hero/Hero";

export default function Home() {
	return (
		<AppLayout title="Home">
			<main>
				<Hero />
			</main>
		</AppLayout>
	);
}
