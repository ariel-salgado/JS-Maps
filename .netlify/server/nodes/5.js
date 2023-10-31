

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/maplibre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a928a6e2.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.237a36af.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = [];
export const fonts = [];
