<script>
  import { froly } from '../styles/colors';

  // Stores
  import bodyHeight from '../stores/bodyHeight.js';
</script>

<style lang="sass">
  h1
    margin: 4rem 0
    text-align: center
</style>

<div bind:clientHeight={$bodyHeight}>
  <main>
    <h1 style:color={froly}>404 Page Not Found</h1>
  </main>
</div>
