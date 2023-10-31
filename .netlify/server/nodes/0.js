

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.77d887f5.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.237a36af.js"];
export const stylesheets = ["_app/immutable/assets/0.254e5334.css"];
export const fonts = [];
