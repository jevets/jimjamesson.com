<script>
  export let title = '', products = []
</script>

<h3>{title}</h3>
{#each products as product}
  <p>
    <a class="font-bold text-purple-500" href="#">{product}</a>
  </p>
{/each}

<style type="postcss">
a { font-size: 80px; }
</style>
