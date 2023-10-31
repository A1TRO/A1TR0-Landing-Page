
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to My Portfolio</title>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <style>
      body {
        background-color: #f6f8fa;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .hero {
        background-color: #2f363d;
        color: #ffffff;
        padding: 4rem 0;
        margin-bottom: 2rem;
      }
      .hero-body {
        text-align: center;
      }
      .title {
        font-size: 3rem;
        color: #66ccff;
      }
      .subtitle {
        font-size: 1.5rem;
        color: #ffffff;
      }
      .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #66ccff;
        box-shadow: 0 0 20px rgba(102, 204, 255, 0.8);
      }
      .tags {
        text-align: center;
        margin-top: 1rem;
      }
      .tags .tag.skill {
        margin: 5px;
        border-radius: 4px;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #ffffff;
        background-color: #444d56;
        transition: background-color 0.3s;
      }
      .tags .tag.skill:hover {
        background-color: #6e7681;
      }
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
      }
      .button.is-link {
        background-color: #66ccff;
        color: #252525;
        margin: 0 10px;
        transition: background-color 0.3s;
      }
      .button.is-link:hover {
        background-color: #3388cc;
      }
      .content {
        margin-top: 1.5rem;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <section class="hero">
      <div class="hero-body">
        <img class="avatar" src="https://raw.githubusercontent.com/A1TRO/A1TR0-Landing-Page/main/public/assets/images/avatar.png" alt="Avatar" />
        <h1 class="title">Hey, I'm Hosie</h1>
        <p class="subtitle">
          Passionate Software Engineer Exploring Boundaries
        </p>
      </div>
    </section>
    <div class="container">
      <div class="tags">
        <!-- ... (skills tags) ... -->
        <a class="tag skill" href="#"> <i class="fab fa-html5"></i> HTML </a>
        <a class="tag skill" href="#"> <i class="fab fa-css3-alt"></i> CSS </a>
        <a class="tag skill" href="#"> <i class="fab fa-js"></i> JavaScript </a>
        <a class="tag skill" href="#"> <i class="fab fa-react"></i> React </a>
        <a class="tag skill" href="#">
          <i class="fab fa-node-js"></i> Node.js
        </a>
        <a class="tag skill" href="#">
          <i class="fas fa-code"></i> ASP.Net MVC
        </a>
        <a class="tag skill" href="#"> <i class="fab fa-lua"></i> Lua </a>
        <a class="tag skill" href="#">
          <i class="fab fa-cuttlefish"></i> C++
        </a>
        <a class="tag skill" href="#"> <i class="fab fa-python"></i> Python </a>
        <!-- ... (other skills tags) ... -->
      </div>
      <div class="buttons">
        <a
          class="button is-link"
          href="https://github.com/A1TRO"
          target="_blank"
        >
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span>Check Out GitHub</span>
        </a>
      </div>
      <div class="content">
        <p>
          With a knack for crafting digital experiences that captivate and
          inspire, I'm on a constant journey of innovation.
        </p>
        <div class="mt-4">
          <h3 class="title is-4">Projects</h3>
          <button id="refresh-button" class="button is-primary">
            <i class="fas fa-sync-alt"></i> 
          </button>
          <div id="github-projects" class="columns is-multiline"></div>
        </div>

        <p class="mt-4">Let's Collaborate and Create:</p>
        <div class="buttons mt-2">
          <a class="button is-link" href="mailto:hjr.developer@gmail.com">
            <span class="icon">
              <i class="material-icons">email</i>
            </span>
            <span>Contact Me</span>
          </a>
          <a
            class="button is-link"
            href="https://www.linkedin.com/in/hosie-johnson-jr-66341323b/"
            target="_blank"
          >
            <span class="icon">
              <i class="fab fa-linkedin"></i>
            </span>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          &copy; <span id="current-year"></span> [Hosie J]. All rights reserved.
        </p>
        <p>
          For inquiries, contact:
          <a href="tel:+2547024563">+1 (254) 702-4563</a>
        </p>
      </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
    <script>
      // Adding animations using Anime.js
      anime({
        targets: ".avatar",
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutSine",
        delay: 500,
      });

      anime({
        targets: ".title",
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutSine",
        delay: 1000,
      });

      anime({
        targets: ".subtitle",
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutSine",
        delay: 1500,
      });

      anime({
        targets: ".tags .tag.skill",
        translateY: [10, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 2000, easing: "easeOutSine" }),
      });

      anime({
        targets: ".buttons .button.is-link",
        translateY: [10, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 2500, easing: "easeOutSine" }),
      });

      // Fetch GitHub repositories using the GitHub API
      const fetchGitHubRepos = async () => {
        try {
          const response = await fetch(
            "https://api.github.com/users/A1TRO/repos"
          );
          const repos = await response.json();
          return repos;
        } catch (error) {
          console.error("Error fetching GitHub repositories:", error);
          return [];
        }
      };

      // Fetch stargazers count for a repository
      const fetchStargazersCount = async (repo) => {
        try {
          const response = await fetch(repo.stargazers_url);
          const stargazers = await response.json();
          return stargazers.length;
        } catch (error) {
          console.error(`Error fetching stargazers for ${repo.name}:`, error);
          return 0;
        }
      };

      // Fetch license information for a repository
      const fetchLicenseInfo = async (repo) => {
        try {
          const response = await fetch(repo.license.url);
          const license = await response.json();
          return license.name;
        } catch (error) {
          console.error(`Error fetching license for ${repo.name}:`, error);
          return "Unknown License";
        }
      };

      // Display GitHub repositories in the DOM
      const displayGitHubRepos = async () => {
        const projectsContainer = document.getElementById("github-projects");
        const repos = await fetchGitHubRepos();

        repos.forEach(async (repo) => {
          const repoCard = document.createElement("div");
          repoCard.className = "column is-half";
          const description = repo.description
            ? `<p>${repo.description}</p>`
            : "<p>No description available.</p>";
          const stargazersCount = await fetchStargazersCount(repo);
          const license = await fetchLicenseInfo(repo);
          const createdAt = new Date(repo.created_at).toLocaleDateString();
          const updatedAt = new Date(repo.updated_at).toLocaleDateString();
          const pushedAt = new Date(repo.pushed_at).toLocaleDateString();
          repoCard.innerHTML = `
      <div class="box">
        <h4 class="title is-5">${repo.name}</h4>
        ${description}
        <p><strong>Stars:</strong> ${stargazersCount}</p>
        <p><strong>Forks:</strong> ${repo.forks_count}</p>
        <p><strong>Views:</strong> ${repo.watchers_count}</p>
        <p><strong>License:</strong> ${license}</p>
        <p><strong>Created At:</strong> ${createdAt}</p>
        <p><strong>Updated At:</strong> ${updatedAt}</p>
        <p><strong>Pushed At:</strong> ${pushedAt}</p>
        <a href="${repo.html_url}" target="_blank" class="button is-link is-small">View on GitHub</a>
        <a href="${repo.forks_url}" target="_blank" class="button is-link is-small">Forks</a>
        <a href="${repo.collaborators_url}" target="_blank" class="button is-link is-small">Collaborators</a>
        <a href="${repo.issue_events_url}" target="_blank" class="button is-link is-small">Issues</a>
      </div>
    `;

          projectsContainer.appendChild(repoCard);
          // Animate the card's opacity
          anime({
            targets: repoCard,
            opacity: [0, 1],
            delay: 1000, // Delay each animation to create a staggered effect
            easing: "easeInOutQuad", // You can adjust the easing function
            duration: 800, // Animation duration in milliseconds
          });
        });
      };

      (async () => {
        await displayGitHubRepos();
        // Update current year
        const currentYearElement = document.getElementById("current-year");
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;

        // Add an event listener to the refresh button
        const refreshButton = document.getElementById("refresh-button");
        refreshButton.addEventListener("click", () => {
          // Clear the existing content in the github-projects container
          const projectsContainer = document.getElementById("github-projects");
          projectsContainer.innerHTML = "";

          // Call the displayGitHubRepos function to fetch and display the GitHub repositories
          displayGitHubRepos();
        });
      })();
    </script>
  </body>
</html>
