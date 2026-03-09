import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.4KvAdXeR.js","_app/immutable/chunks/Ce244kTt.js","_app/immutable/chunks/cd50jPoX.js","_app/immutable/chunks/BjCd4HgB.js","_app/immutable/chunks/BLXSpHto.js","_app/immutable/chunks/to1KES5G.js","_app/immutable/chunks/TWxSAWzu.js","_app/immutable/chunks/B-TRy3kG.js","_app/immutable/chunks/Cd5S5UHh.js","_app/immutable/chunks/CuLdKrlW.js","_app/immutable/chunks/wHjTfLwW.js","_app/immutable/chunks/DhFRS2Hj.js"];
export const stylesheets = ["_app/immutable/assets/PurchaseModal._l6n4i7s.css"];
export const fonts = [];
