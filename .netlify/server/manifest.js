export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","about/.DS_Store","about/grass.svg","about/owner.jpg","about/owner.webp","android-chrome-192x192.png","apple-touch-icon.png","browserconfig.xml","check.svg","contact/.DS_Store","contact/emailg.svg","contact/locationg.svg","contact/phone-callg.svg","down-chevron.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","home/.DS_Store","home/01.svg","home/02.svg","home/03.svg","home/about.webp","home/img02.jpeg","home/img02.webp","home/img02m.webp","img08l.webp","img08m.webp","mstile-150x150.png","portfolio/.DS_Store","portfolio/img01.webp","portfolio/img02.webp","portfolio/img03.webp","portfolio/img05M.webp","portfolio/img07.webp","portfolio/img11.webp","reviews/.DS_Store","reviews/star.svg","reviews/user.svg","robots.txt","safari-pinned-tab.svg","site.webmanifest","social/.DS_Store","social/facebook.svg","social/google.svg","social/instagram.svg","social/tiktok.svg","social/twitter.svg","social/youtube.svg","subfooter/.DS_Store","subfooter/subfooter.webp","twig.png","up-chevron.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-6d0a1be8.js","imports":["_app/immutable/start-6d0a1be8.js","_app/immutable/chunks/index-1ed6e7ce.js","_app/immutable/chunks/singletons-49e27f91.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/sitemap.xml/_server.js')
			},
			{
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "portfolio",
				pattern: /^\/portfolio\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "testimonials",
				pattern: /^\/testimonials\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
