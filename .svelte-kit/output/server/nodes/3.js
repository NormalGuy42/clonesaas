import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.D0DLvyDs.js","_app/immutable/chunks/Ce244kTt.js","_app/immutable/chunks/cd50jPoX.js","_app/immutable/chunks/Cd5S5UHh.js","_app/immutable/chunks/wHjTfLwW.js","_app/immutable/chunks/TWxSAWzu.js","_app/immutable/chunks/DhFRS2Hj.js","_app/immutable/chunks/CinzyV4g.js","_app/immutable/chunks/DkcLWEAh.js"];
export const stylesheets = ["_app/immutable/assets/3.CnGiasaY.css"];
export const fonts = [];
