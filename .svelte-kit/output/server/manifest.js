export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clonesaas.png","favicon.png","faviconS/android-chrome-192x192.png","faviconS/android-chrome-512x512.png","faviconS/apple-touch-icon.png","faviconS/favicon-16x16.png","faviconS/favicon-32x32.png","faviconS/favicon.ico","faviconS/site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.Cut6Pw6-.js",app:"_app/immutable/entry/app._qcVYG3G.js",imports:["_app/immutable/entry/start.Cut6Pw6-.js","_app/immutable/chunks/B-TRy3kG.js","_app/immutable/chunks/cd50jPoX.js","_app/immutable/chunks/to1KES5G.js","_app/immutable/entry/app._qcVYG3G.js","_app/immutable/chunks/cd50jPoX.js","_app/immutable/chunks/wHjTfLwW.js","_app/immutable/chunks/Ce244kTt.js","_app/immutable/chunks/to1KES5G.js","_app/immutable/chunks/BjCd4HgB.js","_app/immutable/chunks/BLXSpHto.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/about","/privacy","/refund","/terms"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
