export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Argen Task",
	description: "App para crear, editar y eliminar tareas",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},

    {
      label: "Registro",
      href: "/registro",
    }
	],

	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		docs: "https://nextui.org",
		discord: "https://discord.gg/",
	},
};
