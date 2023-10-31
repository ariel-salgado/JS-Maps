import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import "maplibre-gl";
import "@stadiamaps/maplibre-search-box";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
const Map_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { center = [-71.55183, -33.02457] } = $$props;
  let { zoom = 14 } = $$props;
  MapboxDraw.constants.classes.CONTROL_BASE = "maplibregl-ctrl";
  MapboxDraw.constants.classes.CONTROL_PREFIX = "maplibregl-ctrl-";
  MapboxDraw.constants.classes.CONTROL_GROUP = "maplibregl-ctrl-group";
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  return `<div class="w-full h-full"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-hivth_START -->${$$result.title = `<title>DEMPS | Maplibre</title>`, ""}<!-- HEAD_svelte-hivth_END -->`, ""} <div class="flex w-full h-full">${validate_component(Map_1, "Maplibre").$$render($$result, {}, {}, {})} <div class="w-2/5 shadow-md z-10" data-svelte-h="svelte-nsehi6"><div class="p-10"><h3 class="text-4xl font-medium mb-3">Maplibre</h3> <hr> <div class="mt-5 text-lg"><p>MapLibre es independiente y de código abierto, pero está atado a Mapbox GL JS, la mayoría
					de las funcionalidades provienen de Mapbox cuando era de código abierto. La documentación
					es pésima. Y para que los plugins funcionen hay que modificar el código generado por
					Maplibre.
					<br> <br> <a class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline" href="https://maplibre.org/maplibre-gl-js/docs/plugins/" target="_blank">Plugins</a></p></div></div></div></div>`;
});
export {
  Page as default
};
