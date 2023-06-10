<script>
    import { onMount } from "svelte";
    import { faCoffee, faCode, faCloud, faCogs, faProjectDiagram, faCheck, faAtom, faCompass } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    let images = [
      "https://ded9.com/wp-content/uploads/2021/04/digiwiseacademy-devops.jpeg",
      "https://wallpapercave.com/wp/wp7848331.png",
      "https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
    ];
  
    let currentImageIndex = 0;
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    function previousImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
  
    onMount(() => {
      // Code for initializing the carousel or any additional setup
    });
  </script>
  
  <style>
    .carousel-container {
      margin-top: 10em;
    }
  
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      overflow: hidden;
      margin-bottom: 20px;
    }
  
    .carousel-image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  
    .carousel-nav {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
  
    .carousel-nav-button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 10px 20px;
      margin: 0 5px;
      cursor: pointer;
    }
  
    .description {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    }

    .description p {
        margin-bottom: 20px;
    }

    .bold {
        font-weight: bold;
    }

    .icon {
        vertical-align: middle;
        margin-right: 5px;
    }
    .centered {
    text-align: center;
    }
  </style>
  
  <div class="carousel-container">
    <div class="carousel">
      <img class="carousel-image" src={images[currentImageIndex]} alt="Carousel Image" />
    </div>
  
    <div class="carousel-nav">
      <button class="carousel-nav-button" on:click={previousImage}>Previous</button>
      <button class="carousel-nav-button" on:click={nextImage}>Next</button>
    </div>
  </div>
  
  <div class="description">
    <p>
      Our business is dedicated to providing top-notch solutions in the fields of <span class="bold">DevOps</span> and <span class="bold">Web Development</span>. With a team of experienced professionals, we specialize in delivering high-quality services that help businesses achieve their goals.
    </p>
  
    <p>
      We understand the importance of efficient collaboration and seamless integration between development and operations teams. Our <span class="bold">DevOps</span> expertise enables us to streamline the software development process, automate workflows, and ensure faster and more reliable deployments.
    </p>
  
    <p>
      In the realm of web development, we excel in crafting visually appealing and functional websites. Our skilled developers leverage the latest technologies to create responsive and user-friendly web applications that provide an excellent user experience across devices.
    </p>
  
    <p>
      Whether you need assistance in setting up robust infrastructure, optimizing your development processes, or building scalable web solutions, we have the expertise to meet your requirements. Partner with us to elevate your business to new heights.
    </p>
   <div class="centered">
    <p>
      <FontAwesomeIcon class="fa-icon" icon={faCloud} />DevOps
      <FontAwesomeIcon class="fa-icon" icon={faAtom} /> Web Development
      <FontAwesomeIcon class="fa-icon" icon={faCompass} /> User Experience
    </p>
   </div>
  </div>