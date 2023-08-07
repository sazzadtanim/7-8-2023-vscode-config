/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    backgroundImage: {
      mybg1: `radial-gradient(at 53% 92%, hsla(301,74%,65%,1) 0px, transparent 50%),
			radial-gradient(at 82% 4%, hsla(189,67%,67%,1) 0px, transparent 50%),
			radial-gradient(at 37% 99%, hsla(155,70%,61%,1) 0px, transparent 50%),
			radial-gradient(at 95% 9%, hsla(129,88%,79%,1) 0px, transparent 50%),
			radial-gradient(at 21% 28%, hsla(169,88%,63%,1) 0px, transparent 50%),
			radial-gradient(at 89% 39%, hsla(205,97%,73%,1) 0px, transparent 50%),
			radial-gradient(at 2% 57%, hsla(341,82%,73%,1) 0px, transparent 50%),
			radial-gradient(at 84% 76%, hsla(202,75%,64%,1) 0px, transparent 50%),
			radial-gradient(at 79% 14%, hsla(173,72%,73%,1) 0px, transparent 50%),
			radial-gradient(at 73% 7%, hsla(179,88%,72%,1) 0px, transparent 50%),
			radial-gradient(at 2% 29%, hsla(202,88%,61%,1) 0px, transparent 50%)`,
    },
  },
  plugins: [],
};
