import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import * as L from "leaflet";
import "leaflet-draw";
import "leaflet-path-drag";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { center = [-33.02457, -71.55183] } = $$props;
  let { zoom = 15 } = $$props;
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });
  new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: "bar"
  });
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  return `<div class="h-full w-full"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wprpt2_START -->${$$result.title = `<title>DEMPS | Leaflet</title>`, ""}<!-- HEAD_svelte-wprpt2_END -->`, ""} <div class="flex w-full h-full">${validate_component(Map, "Leaflet").$$render($$result, {}, {}, {})} <div class="w-2/5 shadow-md z-10" data-svelte-h="svelte-1thnfxz"><div class="p-10"><h3 class="text-4xl font-medium mb-3">Leaflet</h3> <hr> <div class="mt-5 text-lg"><p>Leaflet es agnóstico en cuanto a proveedores de mapas, ahora mismo el mapa es
					proporcionado por OpenStreetMap. Si quiere cambiar el proveedor hay que analizar las
					limitaciones. Si quiere añadir más funcionalidades, lo más probable es que no haya.
					<br> <br> <a class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline" href="https://leafletjs.com/plugins.html" target="_blank">Plugins</a></p></div></div></div></div>`;
});
export {
  Page as default
};
