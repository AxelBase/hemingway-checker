<script lang="ts">
  export let readability: { fleschKincaid: number; ari: number };
  export let passiveCount: number;
  export let adverbCount: number;
  export let adverbDensity: number;
</script>

<div class="card">
  <h2 class="animate-slide-up">Analysis Summary</h2>
  <table class="summary-table">
    <tbody>
      <tr>
        <th>Flesch–Kincaid Grade Level</th>
        <td>{readability.fleschKincaid.toFixed(1)}</td>
      </tr>
      <tr>
        <th>Automated Readability Index (ARI)</th>
        <td>{readability.ari.toFixed(1)}</td>
      </tr>
      <tr>
        <th>Passive Sentences</th>
        <td>{passiveCount}</td>
      </tr>
      <tr>
        <th>Adverbs</th>
        <td>{adverbCount}</td>
      </tr>
      <tr>
        <th>Adverb Density</th>
        <td>{(adverbDensity * 100).toFixed(1)}%</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .animate-slide-up {
    animation: slideUp 0.6s var(--transition-ease);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>