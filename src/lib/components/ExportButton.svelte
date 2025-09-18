<script lang="ts">
	export let data: object;

	function downloadFile(content: Blob, filename: string) {
		const url = URL.createObjectURL(content);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	}

	function exportJSON() {
		downloadFile(
			new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
			'analysis.json'
		);
	}

	function exportHTML() {
		downloadFile(
			new Blob(['<pre>' + JSON.stringify(data, null, 2) + '</pre>'], { type: 'text/html' }),
			'analysis.html'
		);
	}

	function exportPDF() {
		// lightweight: rely on browser's print-to-PDF
		window.print();
	}
</script>

<div class="flex gap-2">
	<button class="px-3 py-1 border rounded bg-blue-600 text-white" on:click={exportJSON}>
		Export JSON
	</button>
	<button class="px-3 py-1 border rounded bg-green-600 text-white" on:click={exportHTML}>
		Export HTML
	</button>
	<button class="px-3 py-1 border rounded bg-red-600 text-white" on:click={exportPDF}>
		Export PDF
	</button>
</div>
