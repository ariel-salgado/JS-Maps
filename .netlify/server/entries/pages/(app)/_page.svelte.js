import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "Leaflet", path: "leaflet" },
    { name: "Maplibre", path: "maplibre" },
    { name: "OpenLayers", path: "openlayers" }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1og8n1u_START -->${$$result.title = `<title>DEMPS | Inicio</title>`, ""}<!-- HEAD_svelte-1og8n1u_END -->`, ""} <div class="w-full h-full grid items-center place-items-center -mt-10"><div class="grid gap-y-12"><div class="text-center" data-svelte-h="svelte-3jbjgp"><h2 class="text-7xl font-medium">Demo</h2> <p class="text-2xl text-neutral-600">Seleccione una librería.</p></div> <ul class="grid items-center place-items-center gap-y-4">${each(links, ({ name, path }) => {
    return `<li class="w-52 bg-slate-700 text-center font-medium text-xl text-neutral-200 rounded-md shadow-md hover:bg-slate-500 transition-colors duration-300"><a class="block w-full px-4 py-2" data-sveltekit-reload${add_attribute("href", path, 0)}>${escape(name)}</a> </li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
