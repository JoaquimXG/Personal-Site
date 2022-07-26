<script>
  export let color;
</script>
<style lang="sass">
  p
    font-size: 1.2rem
    margin: 0.8rem 0 1.5rem
    text-align: justify
    color: var(--blurb-color)

    &:after
      content: ""
      width: 0.5em
      height: 1em
      background: var(--blurb-color)
      display: inline-block
      right: 0.55em
      position: relative
      top: 0.1em
      animation: cursor-blink 1.5s steps(2) infinite
      @keyframes blink
        0%
          opacity: 0
</style>

<p style:--blurb-color={color}><slot/></p>
