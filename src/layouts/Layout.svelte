<script>
  import { blueCharcoal, cornflowerBlue, lavendar } from '../styles/colors';

  //eslint-disable-next-line no-unused-props
  export let templateHtml, settings;
</script>

<style lang="sass">
  :global(html)
    overflow-x: hidden // Prevent horizontal scrollbar, TODO - remove this when better solution is found

  :global(*)
    box-sizing: border-box
    max-width: 100%
    font-size: min(16px, calc(0.5em + 1vw))
    // @media (min-width: 800px)
    //   font-size: min(24px, calc(0.5em + 1vw))
    font-family: "Inconsolata", monospace
    font-display: optional
    letter-spacing: 0.1rem

  :global(body)
    margin: 0
    padding: 0
    background: var(--body-bg)
    // color: Set in tag
    &::-webkit-scrollbar
      width: 10px
      height: 10px

    &::-webkit-scrollbar-thumb
      background-color: var(--scroll-bg)

    &::-webkit-scrollbar-track
      background-color: transparent

  :global(h1)
    // color: Set in tag
    font-family: "Roboto", sans-serif
    font-size: 3rem
    margin: 112px 0 0.8rem 0

  :global(p)
    font-size: 1.2rem
    margin: 0.8rem 0 1.5rem

  @font-face
    font-family: 'Inconsolata'
    font-style: normal
    font-weight: 400
    font-stretch: 100%
    font-display: optional // Need to look at fixing the sidebar if we are doing this
    advance-override: 0.1
    src: url("/font/InconsolataLight.woff2") format('woff2')
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD


  :global(.underline)
    text-decoration: none
    border-bottom: 1.5px solid var(--link-underline)
    color: var(--link-underline)
    padding-bottom: 1px
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
  <!-- <div> -->
  {@html templateHtml}
  <!-- </div> -->
</body>
























