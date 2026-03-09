
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/privacy" | "/refund" | "/terms";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/privacy": Record<string, never>;
			"/refund": Record<string, never>;
			"/terms": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/privacy" | "/refund" | "/terms";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/clonesaas.png" | "/favicon.png" | "/faviconS/android-chrome-192x192.png" | "/faviconS/android-chrome-512x512.png" | "/faviconS/apple-touch-icon.png" | "/faviconS/favicon-16x16.png" | "/faviconS/favicon-32x32.png" | "/faviconS/favicon.ico" | "/faviconS/site.webmanifest" | string & {};
	}
}