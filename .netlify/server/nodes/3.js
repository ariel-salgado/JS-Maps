

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.473c20a0.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.237a36af.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
