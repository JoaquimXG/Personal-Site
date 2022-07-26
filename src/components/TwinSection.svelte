<style lang="sass">
  div
    margin: 2rem 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: 800px)
      flex-direction: column
      gap: 2rem
</style>

<div>
  <slot name="left"/>
  <slot name="right"/>
</div>
