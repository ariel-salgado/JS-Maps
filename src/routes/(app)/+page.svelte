<script lang="ts">
	const links: Array<{ name: string; path: string }> = [
		{ name: 'Leaflet', path: 'leaflet' },
		{ name: 'Maplibre', path: 'maplibre' },
		{ name: 'OpenLayers', path: 'openlayers' }
	];
</script>

<svelte:head>
	<title>DEMPS | Inicio</title>
</svelte:head>

<div class="w-full h-full grid items-center place-items-center -mt-10">
	<div class="grid gap-y-12">
		<div class="text-center">
			<h2 class="text-7xl font-medium">Demo</h2>
			<p class="text-2xl text-neutral-600">Seleccione una librería.</p>
		</div>

		<ul class="grid items-center place-items-center gap-y-4">
			{#each links as { name, path }}
				<li
					class="w-52 bg-slate-700 text-center font-medium text-xl text-neutral-200 rounded-md shadow-md hover:bg-slate-500 transition-colors duration-300"
				>
					<a class="block w-full px-4 py-2" data-sveltekit-reload href={path}>{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
