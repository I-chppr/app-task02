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
		<div>
			
			<div className="flex flex-col  w-full flex-wrap md:flex-nowrap gap-8 justify-center items-center">
				<h1 className={title()}>ArgenTask</h1>
				<h2 className={title()}>Sign up / Registrarse</h2>
				<Input type="text" label="Name" placeholder="Enter your name" isRequired />
      			<Input type="email" label="Email" placeholder="Enter your email"  isRequired/>
     			<Input type="text" label="Cellphone" placeholder="Enter your cellphone" isRequired />
     			<Input type="password" label="Password" placeholder="Enter your password" isRequired />
     			<Input type="password" label="Confirm password" placeholder="Confirm your password"  isRequired/>
				<Link> <Button className={buttonStyles({ className: "bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-lg", radius: "full", variant: "shadow" })}> Sign up / Registrarse</Button> </Link>

			</div>
			
		</div>
	);
}


