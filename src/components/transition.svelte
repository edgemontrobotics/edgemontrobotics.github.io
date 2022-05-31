<script>
	import { fade } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div transition:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}
