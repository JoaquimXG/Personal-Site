<script>
  export let alignRight;
  export let twin;
  export let margin = "4rem 0"
</script>

<style lang="sass">
  .align-right
    text-align: right
    @media (max-width: 800px)
      align-self: flex-end

  .twin
    margin-bottom: 2rem
    @media (min-width: 800px)
        width: 45%

    @media (max-width: 800px)
        max-width: 450px
</style>

<div style:margin={margin} class:align-right={alignRight} class:twin={twin}>
  <slot name="title" />
  <slot name="content" />
</div>
