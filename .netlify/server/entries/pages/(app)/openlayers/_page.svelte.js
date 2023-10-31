import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { OSM, Vector } from "ol/source.js";
import { Tile, Vector as Vector$1 } from "ol/layer.js";
const Map_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let typeSelect;
  new Tile({ source: new OSM() });
  const source = new Vector();
  new Vector$1({
    source,
    style: {
      "fill-color": "rgba(255, 255, 255, 0.2)",
      "stroke-color": "#ffcc33",
      "stroke-width": 2,
      "circle-radius": 7,
      "circle-fill-color": "#ffcc33"
    }
  });
  return `<div class="w-full h-full grid grid-rows-[1fr_auto]"><div class="h-full w-full"></div> <form class="p-10"><label class="text-lg" for="type" data-svelte-h="svelte-bq5tya">Geometry type:  </label> <select class="border border-neutral-700 rounded-md px-2 py-1"${add_attribute("this", typeSelect, 0)}><option value="Point" data-svelte-h="svelte-z3mysu">Point</option><option value="LineString" data-svelte-h="svelte-15hgue6">LineString</option><option value="Polygon" data-svelte-h="svelte-6cqpta">Polygon</option><option value="Circle" data-svelte-h="svelte-1jjvbgu">Circle</option></select></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-w5on0j_START -->${$$result.title = `<title>DEMPS | OpenLayers</title>`, ""}<!-- HEAD_svelte-w5on0j_END -->`, ""} <div class="flex w-full h-full">${validate_component(Map_1, "OpenLayers").$$render($$result, {}, {}, {})} <div class="w-2/5 shadow-md z-10" data-svelte-h="svelte-1fe3txs"><div class="p-10"><h3 class="text-4xl font-medium mb-3">OpenLayers</h3> <hr> <div class="mt-5 text-lg"><p>OpenLayers tiene una API potente y bien desarrollada que permite un control detallado
					sobre la presentación y la interactividad de los mapas. Y es por eso que las
					características avanzadas de OpenLayers pueden resultar excesivas, para la mayoría de las
					interacciones hay que hacerlo desde 0. Su documentación es pésima y los ejemplos tienen
					distintas implementaciones para la misma funcionalidad, pero al tratar de complementar con
					otras funcionalidades no suele adaptarse bien.
					<br> <br> <a class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline" href="https://openlayers.org/3rd-party/" target="_blank">Plugins</a></p></div></div></div></div>`;
});
export {
  Page as default
};
