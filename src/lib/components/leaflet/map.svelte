<script lang="ts">
	import { onMount } from 'svelte';
	import type { Action } from 'svelte/action';

	import * as L from 'leaflet';
	import 'leaflet-draw';
	import 'leaflet-path-drag';
	import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

	export let center: L.LatLngExpression = [-33.02457, -71.55183];
	export let zoom: number = 15;

	let map: L.Map | undefined;
	let features: L.FeatureGroup;
	let draw: L.Control.Draw;

	const raster = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});

	// @ts-expect-error - no types for leaflet-geosearch
	const search = new GeoSearchControl({
		provider: new OpenStreetMapProvider(),
		style: 'bar'
	});

	const initMap: Action<HTMLDivElement> = (mapContainer: HTMLDivElement) => {
		onMount(() => {
			map = new L.Map(mapContainer, { drawControl: false }).setView(center, zoom);
			features = new L.FeatureGroup();
			draw = new L.Control.Draw({
				draw: {
					marker: false,
					polyline: false,
					rectangle: false,
					circlemarker: false
				},
				edit: {
					featureGroup: features
				}
			});

			map.addLayer(raster);
			map.addControl(search);
			map.addLayer(features);
			map.addControl(draw);

			map.on('draw:created', (e: L.LeafletEvent) => {
				// layer is deprecated but the new way doesn't work
				const coordinates = [...e.layer._latlngs][0];

				const polygon = new L.Polygon([coordinates], {
					// @ts-expect-error - bad types for leaflet-path-drag
					draggable: true
				});

				features.addLayer(polygon);
			});
		});

		return {
			destroy() {
				map?.remove();
				map = undefined;
			}
		};
	};
</script>

<div class="h-full w-full" use:initMap />
