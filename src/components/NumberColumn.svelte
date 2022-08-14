<script>
  import { onMount } from "svelte";

  import bodyHeight from "../stores/bodyHeight.js";
  import debounce from "../util/debounce"

  export const rowHeight = 20;
  export const padding = 4;
  export let color;
  export let highlight;
  export let offset;

  let highlighted;
  let max = 120;
  let yPos;
  let totalScroll;
  let delay = 200;

  const updateMaxNumbers = debounce((height) => {
    max = Math.floor((height-padding+offset)/rowHeight)+1;
  }, delay)

	bodyHeight.subscribe(height => {
    updateMaxNumbers(height)
	});

  export const updatePositionOnScroll = (e) => {
    totalScroll = e.currentTarget.scrollY + yPos;
    highlighted = Math.floor((totalScroll - padding) / rowHeight);
  }

  export const setPosition = (e) => {
    yPos = e.clientY
    highlighted = Math.floor((e.pageY - padding) / rowHeight);
  };

  onMount(() => {
    yPos = window.innerHeight/2
    highlighted = Math.floor((window.innerHeight - padding) / rowHeight / 2);
  }
  );
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
    font-size: 16px
    transition: color 0.1s ease-in-out

    &:before
        width: 40px
        content: var(--i)
        padding-left: 8px
        line-height: var(--line-height)
</style>

<svelte:window on:mousemove={setPosition} on:scroll={updatePositionOnScroll}/>
<div style:--padding={`${padding}px`}>
  {#each Array(max) as _, i}
    <span
      style:color={highlighted === i ? highlight : color}
      style:--i={`'${i + 1}'`}
      style:--line-height={`${rowHeight}px`} />
  {/each}
</div>
