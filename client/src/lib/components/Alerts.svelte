<script context="module">
  import { writable } from "svelte/store";
  const alerts = writable([]);
  alerts.add = function(type, message, timeout = 0) {
    const alert = {type, message};
    alerts.update(val => {
      if(timeout != 0) {
        setTimeout(() => alerts.remove(alert), timeout);
      }
      return [...val, alert];
    });
  }
  alerts.remove = function(alert) {
    alerts.update(val => val.filter((a) => a !== alert));
  }
  export { alerts };
</script>
<script>
  //
</script>

{#each $alerts as alert, index}
  <div class={`alert alert-${alert.type}`} role="alert">
    {@html alert.message}
    <button type="button" class="btn-close" aria-label="Close" on:click={() => alerts.remove(alert)}></button>
  </div>

{/each}