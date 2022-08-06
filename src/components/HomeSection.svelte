<script>
  // Components
  import Title from './Title.svelte';
  import Social from './Social.svelte';
  import Section from './Section.svelte';
  import TwinSection from './TwinSection.svelte';
  import TechnicalSkills from './TechnicalSkills.svelte';
  import Experience from './Experience.svelte';
  import Project from './Project.svelte';
  import Blurb from './Blurb.svelte';

  // Colours
  import { lavendar, olivine, froly, mediumOrchid, cornflowerBlue } from '../styles/colors';

  // Content
  import blurb from '../routes/home/data/blurb.js';
  import experience from '../routes/home/data/experience.js';
  import project from '../routes/home/data/project.js';

  // Stores
  import bodyHeight from '../stores/bodyHeight.js';
import Footer from './Footer.svelte';
</script>

<style lang="sass">
  main
    width: 100vw
    max-width: 1200px
    text-align: left
    padding: 0 3.5rem
    margin: auto

</style>

<div bind:clientHeight={$bodyHeight}>
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
  <Footer />
</div>
