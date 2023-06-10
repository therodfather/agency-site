<script>
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCode, faCloud, faCogs, faProjectDiagram, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
library.add(faCode, faCloud, faCogs, faProjectDiagram, faCheck);
</script>

<h1 class="welcome-msg">Welcome to Bytecats Consulting</h1>
<p>We are a team of experienced engineers and developers specializing in software solutions and DevOps. Our goal is to help businesses achieve their objectives by providing high-quality technical solutions and services.</p>
<p><strong>Our consulting services can help you with:</strong></p>
<div class="content-list-container">
  <ul class="content-list">
    <li>
      <div class="content-item">
      <FontAwesomeIcon class="fa-icon" icon={faCode} />
        <h3>Custom software development and architecture</h3>
        <p>Meet your specific business needs.</p>
      </div>
    </li>
    <li>
      <div class="content-item">
      <FontAwesomeIcon class="fa-icon" icon={faCogs} />
        <h3>DevOps implementation and automation</h3>
        <p>Streamline your development and deployment processes.</p>
      </div>
    </li>
    <li>
      <div class="content-item">
      <FontAwesomeIcon class="fa-icon" icon={faCloud} />
        <h3>Cloud infrastructure and deployment</h3>
        <p>Help you scale your business and reduce costs.</p>
      </div>
    </li>
    <li>
      <div class="content-item">
      <FontAwesomeIcon class="fa-icon" icon={faProjectDiagram} />
        <h3>Technical project management</h3>
        <p>Ensure your projects are delivered on time and within budget.</p>
      </div>
    </li>
    <li>
      <div class="content-item">
      <FontAwesomeIcon class="fa-icon" icon={faCheck} />
        <h3>Code reviews and optimizations</h3>
        <p>Improve the quality and performance of your software.</p>
      </div>
    </li>
  </ul>
</div>
<h2>Contact us</h2>
<p>Contact us to discuss your specific requirements and how we can assist you in achieving your goals. Our team of experts is dedicated to providing you with the best possible solutions and services to help your business succeed.</p>

<style>
h1 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 0.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .welcome-msg {
  margin-top: 4rem;
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
    font-size: 1.0em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-list {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;

  }

  .content-item {
    margin-left: 1rem;
    padding: 0.5rem;
    min-width: 90%;
    max-height: 34vh;
    background-color: rgba(10, 29, 69, 0.329);
    border-radius: 2rem;
    padding: 1rem;
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