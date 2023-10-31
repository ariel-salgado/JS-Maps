import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "Leaflet", path: "leaflet" },
    { name: "Maplibre", path: "maplibre" },
    { name: "OpenLayers", path: "openlayers" }
  ];
  return `<div class="w-full h-full grid grid-rows-[auto_1fr]"><header class="flex h-20 shadow-md w-full items-center justify-around z-40"><span class="text-4xl font-medium" data-svelte-h="svelte-30rgfr"><a class="block w-full" href="/">DEMPS</a></span> <nav><ul class="flex gap-x-6">${each(links, ({ name, path }) => {
    return `<li class="text-lg hover:text-slate-500 transition-colors duration-300"><a data-sveltekit-reload${add_attribute("href", path, 0)}>${escape(name)}</a> </li>`;
  })}</ul></nav></header> <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
