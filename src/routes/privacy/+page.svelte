<script lang="ts">
  import { fade, fly } from "svelte/transition";
</script>

<div class="w-full flex flex-col items-center gap-6">
  <div id="privacy" class="text-center text-slate-300 p-10 text-lg">
    <h2 class="text-yellow-400 text-3xl mb-4">Privacy Policy</h2>
  </div>

  <div class="w-full max-w-3xl px-4 py-6 text-slate-300 text-md italic" in:fly={{ y: 30, duration: 500 }} out:fade={{ duration: 300 }}>
    <p>
      <strong>Our Commitment to Privacy</strong><br/>
      At AxelLab, we believe privacy is not a feature—<em>it's a principle</em>. The Hemingway-Style Readability Checker is built on a stateless, client-side architecture that ensures your data remains entirely yours. We do not collect, store, or transmit any personal information. Your content never leaves your browser.
    </p><br/>

    <p>
      <strong>Stateless by Design</strong><br/>
      This utility operates without accounts, cookies, or server-side processing. Every analysis is performed locally, and every result is generated in real time within your device. <em>No logs, no tracking, no external dependencies</em>. This stateless model eliminates risk and reinforces user autonomy.
    </p><br/>

    <p>
      <strong>Zero Data Collection</strong><br/>
      We do not collect or retain any personally identifiable information (PII). There are no analytics scripts, no behavioral profiling, and no third-party integrations. Your writing, usage patterns, and device data are never accessed or stored by us.
    </p><br/>

    <p>
      <strong>Transparency and Reproducibility</strong><br/>
      All readability scoring is based on deterministic, rule-based formulas such as <em>Flesch-Kincaid</em>, <em>Gunning Fog</em>, and <em>ARI</em>. These methods are fully documented and reproducible, ensuring that users understand exactly how their content is evaluated.
    </p><br/>

    <p>
      <strong>Accessibility and Compliance</strong><br/>
      We prioritize inclusive design. The interface supports keyboard navigation, screen readers, and high-contrast themes. Our stateless architecture aligns with global privacy standards including GDPR, CCPA, and POPIA, without requiring formal consent mechanisms—because we never process personal data.
    </p><br/>

    <p>
      <strong>Why This Matters</strong><br/>
      In an era of opaque AI models and invasive cloud services, our tool offers a principled alternative. It’s built for writers, educators, editors, and compliance professionals who value clarity, control, and privacy. <em>No surveillance. No compromise.</em>
    </p>
  </div>
</div>
