<script lang="ts">
	const links: Array<{ name: string; path: string }> = [
		{ name: 'Leaflet', path: 'leaflet' },
		{ name: 'Maplibre', path: 'maplibre' },
		{ name: 'OpenLayers', path: 'openlayers' }
	];
</script>

<div class="w-full h-full grid grid-rows-[auto_1fr]">
	<header class="flex h-20 shadow-md w-full items-center justify-around z-40">
		<span class="text-4xl font-medium">
			<a class="block w-full" href="/">DEMPS</a>
		</span>
		<nav>
			<ul class="flex gap-x-6">
				{#each links as { name, path }}
					<li class="text-lg hover:text-slate-500 transition-colors duration-300">
						<a data-sveltekit-reload href={path}>{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>
