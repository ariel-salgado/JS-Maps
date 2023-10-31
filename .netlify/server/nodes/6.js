

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/openlayers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.857aa325.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.237a36af.js"];
export const stylesheets = [];
export const fonts = [];
