<script lang="ts">
	import type { Action } from 'svelte/action';
	import { Map, type LngLatLike, type IControl } from 'maplibre-gl';
	import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
	import { default as MapboxDraw, default as Draw } from '@mapbox/mapbox-gl-draw';

	let map: Map | undefined;
	let draw: Draw | undefined;
	let control: MapLibreSearchControl | undefined;

	export let center: LngLatLike = [-71.55183, -33.02457] as LngLatLike;
	export let zoom: number = 14;

	// @ts-ignore - constants are readonly
	MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
	// @ts-ignore - constants are readonly
	MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
	// @ts-ignore - constants are readonly
	MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';

	const initMap: Action<HTMLDivElement> = (mapContainer: HTMLDivElement) => {
		map = new Map({
			container: mapContainer,
			style: 'https://tiles.stadiamaps.com/styles/outdoors.json',
			center: center,
			zoom: zoom
		});

		draw = new Draw({
			displayControlsDefault: false,
			controls: {
				polygon: true,
				trash: true
			}
		});

		control = new MapLibreSearchControl({
			searchOnEnter: true,
			mapFocusPointMinZoom: zoom
		});

		map.addControl(control);

		// @ts-expect-error - addControl expects maplibre-gl Map
		map.addControl(draw);

		return {
			destroy() {
				map?.remove();
				map = undefined;
			}
		};
	};
</script>

<div class="w-full h-full" use:initMap />
