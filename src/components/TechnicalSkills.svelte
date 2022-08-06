<script>
  export const path = "/svg/";

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
      width: 2.5rem
      display: flex
    span
      text-align: center
      font-weight: 100
      // color: Set in tag
      font-size: 1rem
      margin-top: 1rem

    .skillContainer
      min-width: 2rem
      min-height: 2rem
</style>

<div class="skills">
  {#each skills as skill}
  <div class="skill">
    <div class="skillContainer">
      <img src={`${path}${skill.src}`} alt={skill.title}>
    </div>
    <span style:color={skill.color}>{skill.title}</span>
  </div>
  {/each}
</div>
