<nav>
    <ul class="nav-bar">
        <li><a href="/intro">Home</a></li>
        <li><a href="/software">Software</a></li>
        <li><a href="/devops">DevOps</a></li>
        <li><a href="/cloud">Cloud</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/login">Login</a></li>
    </ul>
</nav>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    /* Change the link color to #111 (black) on hover */
    li a:hover {
      background-color: #111;
    }

    .nav-bar {
        position: absolute;      
        top: 0px;
        left: 0px;
        min-width: 100%;
        width: 100%;
        justify-content: left; /* Change to "flex-start" to align items from left to right */
        list-style: none;
        padding: 1rem;
        margin: 0rem;
        font-size: x-large;
    }

    .nav-bar li {
        margin: 0 0.5em;
    }
    </style>
