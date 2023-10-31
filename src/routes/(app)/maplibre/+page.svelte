<script lang="ts">
	import { Maplibre } from '$lib/components/maplibre';
</script>

<svelte:head>
	<title>DEMPS | Maplibre</title>
</svelte:head>

<div class="flex w-full h-full">
	<Maplibre />
	<div class="w-2/5 shadow-md z-10">
		<div class="p-10">
			<h3 class="text-4xl font-medium mb-3">Maplibre</h3>
			<hr />
			<div class="mt-5 text-lg">
				<p>
					MapLibre es independiente y de código abierto, pero está atado a Mapbox GL JS, la mayoría
					de las funcionalidades provienen de Mapbox cuando era de código abierto. La documentación
					es pésima. Y para que los plugins funcionen hay que modificar el código generado por
					Maplibre.
					<br />
					<br />
					<a
						class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline"
						href="https://maplibre.org/maplibre-gl-js/docs/plugins/"
						target="_blank">Plugins</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
