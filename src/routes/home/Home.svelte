<script>
  // Components
  import Title from '../../components/Title.svelte';
  import Social from '../../components/Social.svelte';
  import Section from '../../components/Section.svelte';
  import TwinSection from '../../components/TwinSection.svelte';
  import TechnicalSkills from '../../components/TechnicalSkills.svelte';

  // Colours
  import { lavendar, olivine, froly, mediumOrchid, cornflowerBlue } from '../../styles/colors';

  // Content
  import blurb from './data/blurb.js';
  import experience from './data/experience.js';
  import project from './data/project.js';
  import Experience from '../../components/Experience.svelte';
  import Project from '../../components/Project.svelte';
  import Blurb from '../../components/Blurb.svelte';

  export let settings;
</script>

<style lang="sass">
  main
    width: 100vw
    max-width: 1200px
    text-align: left
    padding: 0 3.5rem
    margin: auto

  h1
    // color: Set in tag
    font-family: "Roboto", sans-serif
    font-size: 3rem
    margin: 7rem 0 0.8rem 0

  p
    font-size: 1.2rem
    margin: 0.8rem 0 1.5rem
</style>

<svelte:head>
  <title>My Projects and Experience - Joaquim Gomez</title>
  <meta name="description" content="My previous experience and projects" />
  <link href="{settings.origin}/" rel="canonical" />
</svelte:head>

<main>
  <Section>
    <h1 slot="title" style:color={olivine}>Hi, I'm Joaquim</h1>
    <Blurb slot="content" color={lavendar}>{blurb}</Blurb>
  </Section>
  <Section>
    <TechnicalSkills slot="content" />
  </Section>
  <TwinSection>
    <Section twin slot="left" margin={"0"}>
      <Title slot="title" color={mediumOrchid}>Projects</Title>
      <div slot="content">
        {#each project as p}
          <Project {...p}/>
        {/each}
      </div>
    </Section>
    <Section twin slot="right" alignRight margin={"0"}>
      <Title slot="title" color={cornflowerBlue}>Work + Education</Title>
      <div slot="content">
        {#each experience as e}
          <Experience {...e}/>
        {/each}
      </div>
    </Section>
  </TwinSection>
  <Section>
    <Title slot="title" color={froly}>Contact Me</Title>
    <p slot="content">
      If you would like to get in contact, reach me by email at info@joaquimgomez.com.
      <br/>
      <br/>
      Alternatively you can find me on LinkedIn or GitHub below.
      <br/>
      <br/>
      The code for this website is available there too.
    </p>
  </Section>
  <Section>
    <Social slot="content"/>
  </Section>
</main>
