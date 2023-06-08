<script lang="ts">
	import { library, dom } from '@fortawesome/fontawesome-svg-core';
  	import { faCoffee, faCode, faCloud, faCogs, faProjectDiagram, faCheck } from '@fortawesome/free-solid-svg-icons';
  	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
	library.add(faCode, faCloud, faCogs, faProjectDiagram, faCheck);
  
	// export let name: string;
  </script>
  
  <main>
	<h1>Welcome to Bytecats Consulting</h1>
	<p>We are a team of experienced engineers and developers specializing in software solutions and DevOps.</p>
	<p><strong>Our consulting services can help you with:</strong></p>
	<ul>
	  <li>
		<FontAwesomeIcon icon={faCode} /> Software development and architecture
	  </li>
	  <li>
		<FontAwesomeIcon icon={faCogs} /> DevOps implementation and automation
	  </li>
	  <li>
		<FontAwesomeIcon icon={faCloud} /> Cloud infrastructure and deployment
	  </li>
	  <li>
		<FontAwesomeIcon icon={faProjectDiagram} /> Technical project management
	  </li>
	  <li>
		<FontAwesomeIcon icon={faCheck} /> Code reviews and optimizations
	  </li>
	</ul>
	<p>Contact us to discuss your specific requirements and how we can assist you in achieving your goals.</p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </main>
  
  <style>
	main {
	  min-height: 100vh;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  padding: 1em;
	  background: linear-gradient(135deg, #4f98ca, #0d47a1);
	  color: white;
	  font-family: Arial, sans-serif;
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
  