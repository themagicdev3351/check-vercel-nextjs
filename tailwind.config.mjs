/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "DM Sans", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				dmSans: ["DM Sans", "sans-serif"],
			},
			colors: {
				primary: "#A414D5",
				secondary: {
					DEFAULT: "#640D51",
					pink: "#F246CD",
					plum: "#3B1F32",
					light: "#FDE9E7",
				},
				text: {
					black: "#000000",
					navy: "#19192C",
					charcoal: "#334155",
					steel: "#64748B",
					slate: "#9AA3B8",
					light: {
						DEFAULT: "#CBD5E1",
						sky: "#E2E8F0",
						silver: "#F5F5F9",
						white: "#FFFFFF",
					},
				},
				status: {
					green: "#22C55E",
					lime: "#84CC16",
					yellow: "#EAB308",
					orange: "#F97316",
					red: "#EF4444",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				DEFAULT: "0.5rem",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		fontSize: {
			h1: ["69px", { lineHeight: "80px" }],
			h2: ["55px", { lineHeight: "66px" }],
			h3: ["44px", { lineHeight: "80px" }],
			h4: ["35px", { lineHeight: "42px" }],
			h5: ["28px", { lineHeight: "33.6px" }],
			h6: ["23px", { lineHeight: "27.6px" }],
			p1: ["18px", { lineHeight: "21.6px" }],
			p2: ["14px", { lineHeight: "20px" }],
			p3: ["12px", { lineHeight: "80px" }],
			H1: ["calc((69 / 1440) * 100vw)", { lineHeight: "calc((80 / 1440) * 100vw)" }],
			H2: ["calc((55 / 1440) * 100vw)", { lineHeight: "calc((66 / 1440) * 100vw)" }],
			H3: ["calc((44 / 1440) * 100vw)", { lineHeight: "calc((80 / 1440) * 100vw)" }],
			H4: ["calc((35 / 1440) * 100vw)", { lineHeight: "calc((42 / 1440) * 100vw)" }],
			H5: ["calc((28 / 1440) * 100vw)", { lineHeight: "calc((33.6 / 1440) * 100vw)" }],
			H6: ["calc((23 / 1440) * 100vw)", { lineHeight: "calc((27.6 / 1440) * 100vw)" }],
			P1: ["calc((18 / 1440) * 100vw)", { lineHeight: "calc((21.6 / 1440) * 100vw)" }],
			P2: ["calc((14 / 1440) * 100vw)", { lineHeight: "calc((20 / 1440) * 100vw)" }],
			P3: ["calc((12 / 1440) * 100vw)", { lineHeight: "calc((80 / 1440) * 100vw)" }],
		},
		screens: {
			xs: "430px",
			mq: { min: "502px" },
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [require("tailwindcss-animate")],
};
