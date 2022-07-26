<script>
  export let href, name, description, year;

  export const bold = 900;
  export const standard = 500;
</script>

<style lang="sass">
  span
    font-size: 1.2rem
    line-height: 1.8rem
    // font-weight: set in tag

  div
    margin-bottom: 2rem
    &:last-child
      margin-bottom: 0
</style>

<div>
  <span style:font-weight={bold}><a class="underline" {href}>{name}</a> ({year})</span>
  <br />
  <span style:font-weight={standard}>{description}</span>
</div>

