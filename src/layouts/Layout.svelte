<script>
  import { blueCharcoal, cornflowerBlue, lavendar, rhino } from '../styles/colors';
  import NumberColumn from '../components/NumberColumn.svelte';

  //eslint-disable-next-line no-unused-props
  export let templateHtml, settings;
</script>

<style lang="sass">
  :global(*)
    box-sizing: border-box
    max-width: 100%

  :global(body)
    letter-spacing: 0.1rem
    margin: 0
    padding: 0
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    background: var(--body-bg)
    // color: Set in tag
    font-family: "Inconsolata", monospace
    font-size: min(20px, calc(0.6em + 1.2vw))
    @media (min-width: 800px)
      font-size: min(32px, calc(0.6em + 1.2vw))
    &::-webkit-scrollbar
      width: 10px
      height: 10px

    &::-webkit-scrollbar-thumb
      background-color: var(--scroll-bg)

    &::-webkit-scrollbar-track
      background-color: transparent

  :global(.underline)
    text-decoration: none
    border-bottom: 1.5px solid var(--link-underline)
    color: var(--link-underline)
    padding-bottom: 1px

  div
    width: 100vw
    display: flex
    flex-direction: row

  footer
    margin: 0 0 4rem
    text-align: center
</style>

<svelte:head>
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
</svelte:head>

<body
  style:--scroll-bg={lavendar}
  style:--link-underline={cornflowerBlue}
  style:--body-bg={blueCharcoal}
  style:color={lavendar}>
  <div>
    <NumberColumn hydrate-client={{color:rhino, highlight:lavendar}} />
    {@html templateHtml}
  </div>
</body>
<footer>Built with ❤ with <a class="underline" href="https://elderguide.com/tech/elderjs/">ElderJS</a></footer>
























