<script lang="ts">
	import { Leaflet } from '$lib/components/leaflet';
</script>

<svelte:head>
	<title>DEMPS | Leaflet</title>
</svelte:head>

<div class="flex w-full h-full">
	<Leaflet />
	<div class="w-2/5 shadow-md z-10">
		<div class="p-10">
			<h3 class="text-4xl font-medium mb-3">Leaflet</h3>
			<hr />
			<div class="mt-5 text-lg">
				<p>
					Leaflet es agnóstico en cuanto a proveedores de mapas, ahora mismo el mapa es
					proporcionado por OpenStreetMap. Si quiere cambiar el proveedor hay que analizar las
					limitaciones. Si quiere añadir más funcionalidades, lo más probable es que no haya.
					<br />
					<br />
					<a
						class="italic font-medium hover:text-slate-500 transition-colors duration-300 underline"
						href="https://leafletjs.com/plugins.html"
						target="_blank">Plugins</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
