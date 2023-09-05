'use client'
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";


import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";


export default function AboutPage() {
	return (
		<section>
			
			<div className="flex flex-col  w-full flex-wrap md:flex-nowrap gap-8 justify-center items-center">
				<h1 className={title()} style={{ display: "inline-block", fontSize: "30px"}}>Argen</h1>
				<h1 className={title({ color: "violet" })} style={{ display: "inline-block", fontSize: "30px" }}>Task</h1>
				<h2 className={title()}>Registrarse</h2>
				<Input type="text" label="Nombre" placeholder="Ingresa tu nombre de usuario" isRequired />
      			<Input type="email" label="Email" placeholder="Ingresa tu email"  isRequired/>
      			<Input type="password" label="Contraseña" placeholder="Ingresa tu contraseña" isRequired />
     			<Input type="password" label="Confirmar contraseña" placeholder="Confirma tu contraseña"  isRequired/>
				<Link> <Button className={buttonStyles({ className: "bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-lg", radius: "full", variant: "shadow" })}> Sign up/Registrarse</Button> </Link>

			</div>
			
		</section>
	);
}


