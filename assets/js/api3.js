const scriptVersion = "0.90";

function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.56",
            image: "assets/img/CUPS01.png",
            steam: "https://sannerurl.com/cups-mglt-st",
            mobile: "https://sannerurl.com/cups-mglt-mo"
        },
        {
            title: "MegaLite2",
            version: "0.56",
            image: "assets/img/CUPS02.png",
            steam: "https://sannerurl.com/cups-mglt2-st",
            mobile: "https://sannerurl.com/cups-mglt2-mo"
        },
        {
            title: "StumbleBolt",
            version: "0.56",
            image: "assets/img/CUPS03.png",
            steam: "https://sannerurl.com/cups-stb-st",
            mobile: "https://sannerurl.com/cups-stb-mo"
        },
        {
            title: "StumbleBolt2",
            version: "0.56",
            image: "assets/img/CUPS04.png",
            steam: "https://sannerurl.com/cups-stb2-st",
            mobile: "https://sannerurl.com/cups-stb2-mo"
        },
        {
            title: "StumbleGodz",
            version: "0.56",
            image: "assets/img/CUPS05.png",
            steam: "https://sannerurl.com/cups-godz-st",
            mobile: "https://sannerurl.com/cups-godz-mo"
        },
        {
            title: "StumbleGodzExc",
            version: "0.56",
            image: "assets/img/CUPS06.png",
            steam: "https://sannerurl.com/cups-godzex-st",
            mobile: "https://sannerurl.com/cups-godzex-mo"
        },
        {
            title: "GotiGreen",
            version: "0.56",
            image: "assets/img/CUPS07.png",
            steam: "https://sannerurl.com/cups-goti-st",
            mobile: "https://sannerurl.com/cups-goti-mo"
        },
        {
            title: "GotiCartoon",
            version: "0.56",
            image: "assets/img/CUPS18.png",
            steam: "https://sannerurl.com/cups-toon-st",
            mobile: "https://sannerurl.com/cups-toon-mo"
        },
        {
            title: "Yellow Otimizada",
            version: "0.56",
            image: "assets/img/CUPS08.png",
            steam: "https://sannerurl.com/cups-ylw-st",
            mobile: "https://sannerurl.com/cups-ylw-mo"
        },
        {
            title: "MegaLite Reshade",
            version: "0.56",
            image: "assets/img/CUPS09.png",
            steam: "https://sannerurl.com/cups-mgltre-st",
            mobile: "https://sannerurl.com/cups-mgltre-mo"
        },
        {
            title: "Reshade",
            version: "0.56",
            image: "assets/img/CUPS10.png",
            steam: "https://sannerurl.com/cups-re-st",
            mobile: "https://sannerurl.com/cups-re-mo"
        },
        {
            title: "StumblePink",
            version: "0.56",
            image: "assets/img/CUPS11.png",
            steam: "https://sannerurl.com/cups-pink-st",
            mobile: "https://sannerurl.com/cups-pink-mo"
        },
        {
            title: "BoltAgua",
            version: "0.55",
            image: "assets/img/CUPS12.png",
            steam: "https://sannerurl.com/cups-agua-st",
            mobile: "https://sannerurl.com/cups-agua-mo"
        },
        {
            title: "BoltAstaxzz",
            version: "0.55",
            image: "assets/img/CUPS13.png",
            steam: "https://sannerurl.com/cups-baz-st",
            mobile: "https://sannerurl.com/cups-baz-mo"
        },
        {
            title: "DarkUva",
            version: "0.55",
            image: "assets/img/CUPS14.png",
            steam: "https://sannerurl.com/cups-uva-st",
            mobile: "https://sannerurl.com/cups-uva-mo"
        },
        {
            title: "BoltWeen",
            version: "0.55",
            image: "assets/img/CUPS15.png",
            steam: "https://sannerurl.com/cups-ween-st",
            mobile: "https://sannerurl.com/cups-ween-mo"
        },
        {
            title: "Galaxy1",
            version: "0.55",
            image: "assets/img/CUPS16.png",
            steam: "https://sannerurl.com/cups-glxk-st",
            mobile: "https://sannerurl.com/cups-glxk-mo"
        },
        {
            title: "GalaxyBolt",
            version: "0.55",
            image: "assets/img/CUPS17.png",
            steam: "https://sannerurl.com/cups-glxb-st",
            mobile: "https://sannerurl.com/cups-glxb-mo"
        }
    ];
}

  function renderPosts(posts, query = '') {
    const updatedPosts = [];
    const outdatedPosts = [];
  
    posts.forEach(post => {
      if (post.version === scriptVersion) updatedPosts.push(post);
      else outdatedPosts.push(post);
    });
  
    const container = document.getElementById('postsGrid');
    container.innerHTML = '';
  
    if (updatedPosts.length + outdatedPosts.length === 0) {
      container.innerHTML = `<div class="no-results">Não foi encontrada nenhuma textura com "${query}"</div>`;
      return;
    }

    updatedPosts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="thumb"><img src="${post.image}" alt="${post.title}" /></div>
        <div class="card-body">
          <h3 class="title">${post.title}</h3>
          <div class="meta">Versão ${post.version}</div>
          <div class="btns">
            <a href="${post.steam}" class="btn primary" target="_blank">Steam</a>
            <a href="${post.mobile}" class="btn ghost" target="_blank">Mobile</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  
    outdatedPosts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="thumb"><img src="${post.image}" alt="${post.title}" /></div>
        <div class="card-body">
          <h3 class="title" style="color: gray;">${post.title}</h3>
          <div class="meta" style="color: gray;">Desatualizada</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

function initSearch() {
    const searchInput = document.getElementById('postSearch');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = getPosts().filter(post => post.title.toLowerCase().includes(query));
      renderPosts(filtered, searchInput.value);
    });
  }

async function init() {
  renderPosts(getPosts());
  initSearch();
}

init();
