export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Argen Task",
	description: "App para crear, editar y eliminar tareas",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
	],

	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
	},
};
