import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Argen&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Task&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Aplicación de listas de tareas
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Argentina Programa 4.0
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href="/registro"
					target="_self"
					className={buttonStyles({ className: "bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-lg", radius: "full", variant: "shadow" })}
				>
					Registrarse
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "ghost", radius: "full" })}
					href="/login"  // redirigir al componente login
					target="_self"
				>
					Iniciar sesión
				</Link>
			</div>

			<div className="mt-8">

			</div>
		</section>
	);
}
