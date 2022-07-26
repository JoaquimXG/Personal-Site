<script>
  export let color;
</script>

<style lang="sass">
  h2
    // color: Set in tag
    font-family: "Roboto", sans-serif
    font-size: 2rem
    margin: 0 0 0.8rem 0
</style>

<h2 style:color={color}><slot /></h2>
