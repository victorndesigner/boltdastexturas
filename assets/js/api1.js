const scriptVersion = "0.90";

function getPosts() {
    return [
      {
        title: "MegaLite",
        version: "0.90",
        image: "assets/img/MEGALITEBOLTASTAX.png",
        steam: "https://sannerurl.com/txt-mglt-ste",
        mobile: "https://sannerurl.com/txt-mglt-mob"
      },
      {
        title: "MegaLite2",
        version: "0.90",
        image: "assets/img/MEGALITE2.0BOLTASTAX.png",
        steam: "https://sannerurl.com/txt-mglt2-ste",
        mobile: "https://sannerurl.com/txt-mglt2-mobi"
      },
      {
        title: "StumbleBolt",
        version: "0.90",
        image: "assets/img/STUMBLEBOLT.png",
        steam: "https://sannerurl.com/txt-stb-ste",
        mobile: "https://sannerurl.com/txt-stb-mob"
      },
      {
        title: "StumbleBolt2",
        version: "0.90",
        image: "assets/img/STUMBLEBOLT2.0.png",
        steam: "https://sannerurl.com/txt-stb2-ste",
        mobile: "https://sannerurl.com/txt-stb2-mob"
      },
      {
        title: "StumbleGodz",
        version: "0.90",
        image: "assets/img/STUMBLEGODZ.png",
        steam: "https://sannerurl.com/txt-godz-ste",
        mobile: "https://sannerurl.com/txt-godz-mob"
      },
      {
        title: "StumbleGodzExc",
        version: "0.90",
        image: "assets/img/STUMBLEGODZEXC.png",
        steam: "https://sannerurl.com/txt-godzex-ste",
        mobile: "https://sannerurl.com/txt-godzex-mob"
      },
      {
        title: "GotiGreen",
        version: "0.90",
        image: "assets/img/GOTIGREEN.png",
        steam: "https://sannerurl.com/txt-goti-ste",
        mobile: "https://sannerurl.com/txt-goti-mob"
      },
      {
        title: "GotiCartoon",
        version: "0.90",
        image: "assets/img/GOTICARTOON.png",
        steam: "https://sannerurl.com/txt-toon-ste",
        mobile: "https://sannerurl.com/txt-toon-mob"
      },
      {
        title: "Yellow Otimizada",
        version: "0.90",
        image: "assets/img/YELLOWOTIMIZADA.png",
        steam: "https://sannerurl.com/txt-ylw-ste",
        mobile: "https://sannerurl.com/txt-ylw-mob"
      },
      {
        title: "MegaLite Reshade",
        version: "0.90",
        image: "assets/img/RESHADERBOLTASTAX.png",
        steam: "https://sannerurl.com/txt-mgltre-ste",
        mobile: "https://sannerurl.com/txt-mgltre-mob"
      },
      {
        title: "Reshade",
        version: "0.90",
        image: "assets/img/RESHADER.png",
        steam: "https://sannerurl.com/txt-re-ste",
        mobile: "https://sannerurl.com/txt-re-mob"
      },
      {
        title: "StumblePink",
        version: "0.90",
        image: "assets/img/STUMBLEPINK.png",
        steam: "https://sannerurl.com/txt-pink-ste",
        mobile: "https://sannerurl.com/txt-pink-mob"
      },
      {
        title: "BoltAgua",
        version: "0.89",
        image: "assets/img/BOLTAGUA.png",
        steam: "https://sannerurl.com/txt-agua-ste",
        mobile: "https://sannerurl.com/txt-agua-mob"
      },
      {
        title: "BoltAstaxzz",
        version: "0.89",
        image: "assets/img/BOLTAXZZ.png",
        steam: "https://sannerurl.com/txt-baz-ste",
        mobile: "https://sannerurl.com/txt-baz-mob"
      },
      {
        title: "DarkUva",
        version: "0.89",
        image: "assets/img/DARKUVA.png",
        steam: "https://sannerurl.com/txt-uva-ste",
        mobile: "https://sannerurl.com/txt-uva-mob"
      },
      {
        title: "BoltWeen",
        version: "0.89",
        image: "assets/img/BOLTWEEN.png",
        steam: "https://sannerurl.com/txt-ween-ste",
        mobile: "https://sannerurl.com/txt-ween-mob"
      },
      {
        title: "Galaxy1",
        version: "0.89",
        image: "assets/img/GALAXY1.png",
        steam: "https://sannerurl.com/txt-glxk-ste",
        mobile: "https://sannerurl.com/txt-glxk-mob"
      },
      {
        title: "GalaxyBolt",
        version: "0.89",
        image: "assets/img/GALAXYBOLT.png",
        steam: "https://sannerurl.com/txt-glxb-ste",
        mobile: "https://sannerurl.com/txt-glxb-mob"
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
            <a href="${post.mobile}" class="btn play-btn" target="_blank">Mobile</a>
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
