<script>
	import '@brainandbones/skeleton/themes/theme-skeleton.css';
	import '@brainandbones/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@brainandbones/skeleton';
</script>

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<!-- Insert the App Bar: -->
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>Skeleton</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/">GitHub</a>
			</svelte:fragment>
		</AppBar>
		<!-- --- -->
	</svelte:fragment>
	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">(sidebar)</svelte:fragment>
	<!-- Page Content Slot -->
	<slot />
</AppShell>
