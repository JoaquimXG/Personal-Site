<script>
  export const rowHeight = 22;
  export const padding = 10;

  export let color;
  export let highlight;
  export let highlighted;
  export let height;
  export let max = 120;


  export const setPosition = (e) => {
    highlighted = Math.floor((e.pageY - padding) / rowHeight);
  };

  // height = height - padding;
  // $: max = Math.floor(height/rowHeight)+1;
</script>

<style lang="sass">
  div
    position: absolute
    top: 0px
    left: 0px
    padding-top: var(--padding)
    padding-bottom: var(--padding)
    width: 100vw
    display: flex
    flex-direction: column
    z-index: -1

  span
    width: 100vw
    letter-spacing: 1px
    //color: set in tag
    font-family: "Inconsolata", monospace
    font-size: 20px
    transition: color 0.05s ease-in-out

    &:before
        width: 40px
        content: var(--i)
        padding-left: 8px
        font-size: 20px
        line-height: var(--line-height)
</style>

<svelte:window on:mousemove={setPosition} on:scroll={setPosition}/>
<div style:--padding={`${padding}px`}>
  {#each Array(max) as _, i}
    <span
      style:color={highlighted === i ? highlight : color}
      style:--i={`'${i + 1}'`}
      style:--line-height={`${rowHeight}px`} />
  {/each}
</div>
      <!-- style:--color={i + 1 === highlighted ? highlight : color} -->
