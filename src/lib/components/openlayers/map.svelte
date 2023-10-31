<script lang="ts">
	import Map from 'ol/Map';
	import View from 'ol/View';
	import { Draw, Interaction, Modify, Snap } from 'ol/interaction';
	import { OSM, Vector as VectorSource } from 'ol/source';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
	import type { Action } from 'svelte/action';
	import type { Coordinate } from 'ol/coordinate';
	import type { Type } from 'ol/geom/Geometry';
	import { onMount } from 'svelte';

	let map: Map | undefined;
	let typeSelect: HTMLSelectElement;
	let draw: Interaction | undefined;
	let snap: Interaction | undefined;

	let center: Coordinate = [-71.55183, -33.02457];
	let zoom: number = 4;

	const raster = new TileLayer({
		source: new OSM()
	});

	const source = new VectorSource();
	const vector = new VectorLayer({
		source: source,
		style: {
			'fill-color': 'rgba(255, 255, 255, 0.2)',
			'stroke-color': '#ffcc33',
			'stroke-width': 2,
			'circle-radius': 7,
			'circle-fill-color': '#ffcc33'
		}
	});

	const initMap: Action<HTMLDivElement> = (mapContainer: HTMLDivElement) => {
		onMount(() => {
			map = new Map({
				layers: [raster, vector],
				target: mapContainer,
				view: new View({
					center: center,
					zoom: zoom
				})
			});

			const modify = new Modify({ source: source });
			map.addInteraction(modify);

			const addInteractions = () => {
				draw = new Draw({
					source: source,
					type: typeSelect?.value as Type
				});
				snap = new Snap({ source: source });

				map?.addInteraction(draw);
				map?.addInteraction(snap);
			};

			typeSelect.onchange = function () {
				map?.removeInteraction(draw!);
				map?.removeInteraction(snap!);
				addInteractions();
			};

			addInteractions();
		});
	};
</script>

<div class="w-full h-full grid grid-rows-[1fr_auto]">
	<div class="h-full w-full" use:initMap />

	<form class="p-10">
		<label class="text-lg" for="type">Geometry type: &nbsp;</label>
		<select class="border border-neutral-700 rounded-md px-2 py-1" bind:this={typeSelect}>
			<option value="Point">Point</option>
			<option value="LineString">LineString</option>
			<option value="Polygon">Polygon</option>
			<option value="Circle">Circle</option>
		</select>
	</form>
</div>
