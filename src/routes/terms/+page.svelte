<script lang="ts">
  import { fade, fly } from "svelte/transition";
    import { base } from '$app/paths';
</script>

<div class="w-full flex flex-col items-center gap-6">
  <div id="terms" class="text-center text-slate-300 p-10 text-lg">
    <h2 class="text-yellow-400 text-3xl mb-4">Terms of Use</h2>
  </div>

  <div class="w-full max-w-3xl px-4 py-6 text-slate-300 text-md italic" in:fly={{ y: 30, duration: 500 }} out:fade={{ duration: 300 }}>
    <p>
      By accessing or using the Hemingway-Style Readability Checker, you agree to the following terms. This utility is provided by AxelLab as a stateless, client-side tool designed to offer deterministic readability analysis without collecting or storing user data.
    </p><br/>

    <p>
      <strong>Usage</strong><br/>
      You may use this tool freely for personal, educational, editorial, or professional purposes. All analysis is performed locally in your browser. We do not require registration, and we do not track, log, or retain any content you submit.
    </p><br/>

    <p>
      <strong>Limitations</strong><br/>
      This tool is provided “as is,” without warranties of any kind. While we strive for accuracy and accessibility, we do not guarantee that the results will meet specific legal, academic, or editorial standards. Users are responsible for verifying the suitability of the tool for their own use cases.
    </p><br/>

    <p>
      <strong>Intellectual Property</strong><br/>
      The underlying code, design, and scoring logic are the intellectual property of AxelLab. You may not reverse-engineer, redistribute, or resell the tool or its components without explicit permission.
    </p><br/>

    <p>
      <strong>Privacy and Compliance</strong><br/>
      This utility is stateless by design. We do not collect personal data, and we do not integrate with third-party services. As such, it aligns with global privacy standards including GDPR, CCPA, and POPIA.
    </p><br/>

    <p>
      <strong>Changes</strong><br/>
      AxelLab reserves the right to update these terms as needed. Continued use of the tool after changes are published constitutes acceptance of the revised terms.
    </p><br/>

    <p>
      For more information, please refer to our <a href="{base}/privacy" class="text-yellow-400 underline">Privacy Policy</a>.
    </p>
  </div>
</div>
