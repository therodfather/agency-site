<script lang="ts">
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import { faCoffee, faCode, faCloud, faCogs, faProjectDiagram, faCheck } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import Navi from './lib/Navi.svelte';

  library.add(faCode, faCloud, faCogs, faProjectDiagram, faCheck);

</script>
<Navi/>
<main>
  <h1>Welcome to Bytecats Consulting</h1>
  <p>We are a team of experienced engineers and developers specializing in software solutions and DevOps.</p>
  <p><strong>Our consulting services can help you with:</strong></p>
  <div class="content-list-container">
    <ul>
      <li>
        <FontAwesomeIcon class="fa-icon" icon={faCode} /> Software development and architecture
      </li>
      <li>
        <FontAwesomeIcon class="fa-icon" icon={faCogs} /> DevOps implementation and automation
      </li>
      <li>
        <FontAwesomeIcon class="fa-icon" icon={faCloud} /> Cloud infrastructure and deployment
      </li>
      <li>
        <FontAwesomeIcon class="fa-icon" icon={faProjectDiagram} /> Technical project management
      </li>
      <li>
        <FontAwesomeIcon class="fa-icon" icon={faCheck} /> Code reviews and optimizations
      </li>
    </ul>
  </div>
  <h2>Contact us</h2>
  <p>Contact us to discuss your specific requirements and how we can assist you in achieving your goals.</p>
</main>

<style>
  main {
    /*min-height: 100vh;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    font-family: Arial, sans-serif;
  }
  root {
    background: linear-gradient(135deg, #4f98ca, #0d47a1);
  }

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 0.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2em;
    margin-bottom: 1em;
    line-height: 1.5;
  }



  ul {
    text-align: center;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    font-size: 1.2em;
    margin-bottom: 1em;
    display: flex;
    justify-content: center; /* Change to "flex-start" to align items from left to right */
    align-items: center;
  }

  .content-list-container {
    text-align: center;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    font-size: 1.2em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: #ffc107;
    text-decoration: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .fa-icon {
    margin-right: 8px;
  }
</style>
