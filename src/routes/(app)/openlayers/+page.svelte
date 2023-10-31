<script lang="ts">
	import { OpenLayers } from '$lib/components/openlayers';
</script>

<svelte:head>
	<title>DEMPS | OpenLayers</title>
</svelte:head>

<div class="flex w-full h-full">
	<OpenLayers />
	<div class="w-2/5 shadow-md z-10">
		<div class="p-10">
			<h3 class="text-4xl font-medium mb-3">OpenLayers</h3>
			<hr />
			<div class="mt-5 text-lg">
				<p>
					OpenLayers tiene una API potente y bien desarrollada que permite un control detallado
					sobre la presentación y la interactividad de los mapas. Y es por eso que las
					características avanzadas de OpenLayers pueden resultar excesivas, para la mayoría de las
					interacciones hay que hacerlo desde 0. Su documentación es pésima y los ejemplos tienen
					distintas implementaciones para la misma funcionalidad, pero al tratar de complementar con
					otras funcionalidades no suele adaptarse bien.
					<br />
					<br />
					<a
						class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline"
						href="https://openlayers.org/3rd-party/"
						target="_blank">Plugins</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
