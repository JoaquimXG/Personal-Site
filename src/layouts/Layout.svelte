<script>
  import { blueCharcoal, /*violetRed,*/ cornflowerBlue, lavendar } from '../styles/colors';

  //eslint-disable-next-line no-unused-props
  export let templateHtml, settings;
</script>

<style lang="sass">
  @use "../styles/font.sass"

  :global(*)
    box-sizing: border-box
    margin: 0
    padding: 0
    max-width: 100%
    font-size: min(16px, calc(0.5em + 1vw)) // 16px for large screens and shrinking for smaller screens.
    // @media (min-width: 800px)
    //   font-size: min(24px, calc(0.5em + 1vw))
    font-family: "Inconsolata", monospace
    font-display: optional
    letter-spacing: 0.1rem

  :global(body)
    margin: auto
    padding: 0
    background: var(--body-bg)
    width: 100%
    max-width: 1200px
    // color: Set in tag
    &::-webkit-scrollbar
      width: 10px
      height: 10px

    &::-webkit-scrollbar-thumb
      background-color: var(--scroll-bg)

    &::-webkit-scrollbar-track
      background-color: transparent

    padding: 0 3.5rem 0
    @media (max-width: 1200px)
      padding: 0 3rem 0 4rem
    @media (max-width: 800px)
      padding: 0 2.8rem 0 4.2rem

  :global(main)
    width: 100%
    text-align: left
    margin: auto

  :global(h1)
    // color: Set in tag
    font-family: "Roboto", sans-serif
    font-size: 3rem
    margin: 5rem 0 0.8rem 0

  :global(p)
    font-size: 1.2rem
    margin: 0.8rem 0 1.5rem

  :global(.underline)
    text-decoration: none
    border-bottom: 1.5px solid var(--link-underline)
    color: var(--link-underline)
    padding-bottom: 1px
    // &:visited
    //   color: var(--link-visited)
    //   border-color: var(--link-visited)
</style>

<svelte:head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<body
  style:--scroll-bg={lavendar}
  style:--link-underline={cornflowerBlue}
  style:--body-bg={blueCharcoal}
  style:color={lavendar}>
  <!-- style:--link-visited={violetRed} -->
  <!-- <div> -->
  {@html templateHtml}
  <!-- </div> -->
</body>
























