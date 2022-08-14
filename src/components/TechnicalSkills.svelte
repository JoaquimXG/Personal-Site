<script>
  export const path = "/svg/";
  export const skillWidth = "2.5rem"

  import {
    white,
    terraformColor,
    ansibleColor,
    dockerColor,
    gqlColor,
    azureColor,
    reactColor,
    pythonColor,
    awsColor,
  } from '../styles/colors';

  export const skills = [
    {src: "terraformLogo.svg", title: "Terraform", color: terraformColor},
    {src: "ansibleLogo.svg", title: "Ansible", color: ansibleColor},
    {src: "dockerLogo.svg", title: "Docker", color: dockerColor},
    {src: "graphQlLogo.svg", title: "GraphQL", color: gqlColor},
    {src: "bashLogo.svg", title: "Bash", color: white},
    {src: "intuneLogo.svg", title: "Intune", color: azureColor},
    {src: "reactLogo.svg", title: "React", color: reactColor},
    {src: "pythonLogo.svg", title: "Python", color: pythonColor},
    {src: "awsLogo.svg", title: "AWS", color: awsColor},
    {src: "azureLogo.svg", title: "Azure", color: azureColor},
  ]
</script>

<style lang="sass">
  .skills
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    // margin: 4rem 0 0
    gap: 1rem

  .skill
    display: flex
    flex-direction: column
    align-items: center
    margin: 0 1rem

    img
      width: var(--skill-width)
      height: var(--skill-width)
      display: flex
    span
      text-align: center
      font-weight: 100
      // color: Set in tag
      font-size: 1rem
      margin-top: 1rem

    .skillContainer
      min-width: var(--skill-width)
      min-height: var(--skill-width)
</style>

<div class="skills">
  {#each skills as skill}
  <div class="skill">
    <div style:--skill-width={skillWidth} class="skillContainer">
      <img src={`${path}${skill.src}`} alt={skill.title}>
    </div>
    <span style:color={skill.color}>{skill.title}</span>
  </div>
  {/each}
</div>
