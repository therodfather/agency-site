<script>
    import { onMount, onDestroy } from "svelte";
    import { faCloud, faCogs, faAtom, faCompass } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    
    let images = [
      "https://ded9.com/wp-content/uploads/2021/04/digiwiseacademy-devops.jpeg",
      "https://wallpapercave.com/wp/wp7848331.png",
      "https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
    ];
  

  let currentImageIndex = 0;
  let timer;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function startAutoScroll() {
    stopAutoScroll(); // Stop any existing timer

    timer = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds (adjust the interval as needed)
  }

  function stopAutoScroll() {
    clearInterval(timer);
  }

  onMount(() => {
    startAutoScroll();
  });

  onDestroy(() => {
    stopAutoScroll();
  });
  </script>
  
  <style>
    .carousel-container {
      margin-top: 5rem;
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

    .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
    }

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: #f4f4f4;
      color:#333;
      border-radius: 5px;
    }

    .service-image {
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
      object-fit: cover;
      border-radius: 50%;
    }

    .service-title {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .service-description {
      text-align: center;
    }

    .service-price {
      margin-top: auto;
      font-weight: bold;
      color: #333;
    }

    .centered {
      text-align: center;
      color:#333;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: xx-large;
    }
  </style>
  
  <div class="carousel-container">
    <div class="carousel">
      <img class="carousel-image" src={images[currentImageIndex]} alt="Carousel Image" />
    </div>
  
    <div class="carousel-nav"></div>
  </div>
  
  <p class="centered">You can find our services listed below:</p>
  
  <br />

  <div class="services">
    <div class="service">
      <img class="service-image" src="https://ded9.com/wp-content/uploads/2021/04/digiwiseacademy-devops.jpeg" alt="DevOps Service" />
      <h3 class="service-title">
        <FontAwesomeIcon class="fa-icon" icon={faCogs} /> DevOps Solutions
      </h3>
      <p class="service-description">
        Streamline your software development process, automate workflows, and ensure faster and more reliable deployments with our DevOps expertise.
      </p>
      <p class="service-price">$500 per month</p>
    </div>
    <div class="service">
      <img class="service-image" src="https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg" alt="Web Development Service" />
      <h3 class="service-title">
        <FontAwesomeIcon class="fa-icon" icon={faAtom} /> Web Development
      </h3>
      <p class="service-description">
        Craft visually appealing and functional websites using the latest technologies. Create responsive and user-friendly web applications that provide an excellent user experience across devices.
      </p>
      <p class="service-price">$1000 per project</p>
    </div>
    <div class="service">
      <img class="service-image" src="https://gogonzalez.com/wp-content/uploads/2019/07/user-experience.jpg" alt="User Experience Service" />
      <h3 class="service-title">
        <FontAwesomeIcon class="fa-icon" icon={faCompass} /> User Experience Optimization
      </h3>
      <p class="service-description">
        Enhance user satisfaction by optimizing the user experience of your website or application. Improve usability, accessibility, and overall user engagement.
      </p>
      <p class="service-price">$300 per consultation</p>
    </div>
    <div class="service">
      <img class="service-image" src="https://trentmccracken.com/wp-content/uploads/2019/11/scaling-image.jpg" alt="Scaling Service" />
      <h3 class="service-title">
        <FontAwesomeIcon class="fa-icon" icon={faCloud} /> Scalable Web Solutions
      </h3>
      <p class="service-description">
        Build scalable web solutions that can grow with your business. Ensure performance, reliability, and the ability to handle increased traffic and user demand.
      </p>
      <p class="service-price">$2000 per month</p>
    </div>
  </div>