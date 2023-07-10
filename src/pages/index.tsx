import AppLayout from "@/layout/AppLayout";
import Hero from "@/sections/hero/Hero";
import Marketing from "@/sections/marketing/Marketing";
import Services from "@/sections/services/Services";

export default function Home() {
	return (
		<AppLayout title="Home">
			<main>
				<Hero />
				<Services />
				<Marketing />
			</main>
		</AppLayout>
	);
}
