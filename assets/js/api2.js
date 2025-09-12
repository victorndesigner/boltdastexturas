const scriptVersion = "0.90";

function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.90",
            image: "assets/img/REVIVER00.png",
            steam: "https://sannerurl.com/rvv-stext-ste",
            mobile: "https://sannerurl.com/rvv-stxt-mob"
        },
        {
            title: "MegaLite",
            version: "0.90",
            image: "assets/img/REVIVER01.png",
            steam: "https://sannerurl.com/rvv-mglt-ste",
            mobile: "https://sannerurl.com/rvv-mglt-mob"
        },
        {
            title: "MegaLite2",
            version: "0.90",
            image: "assets/img/REVIVER02.png",
            steam: "https://sannerurl.com/rvv-mglt2-ste",
            mobile: "https://sannerurl.com/rvv-mglt2-mob"
        },
        {
            title: "StumbleBolt",
            version: "0.90",
            image: "assets/img/REVIVER03.png",
            steam: "https://sannerurl.com/rvv-stb-ste",
            mobile: "https://sannerurl.com/rvv-stb-mob"
        },
        {
            title: "StumbleBolt2",
            version: "0.90",
            image: "assets/img/REVIVER04.png",
            steam: "https://sannerurl.com/rvv-stb2-ste",
            mobile: "https://sannerurl.com/rvv-stb2-mob"
        },
        {
            title: "StumbleGodz",
            version: "0.90",
            image: "assets/img/REVIVER05.png",
            steam: "https://sannerurl.com/rvv-godz-ste",
            mobile: "https://sannerurl.com/rvv-godz-mob"
        },
        {
            title: "StumbleGodzExc",
            version: "0.90",
            image: "assets/img/REVIVER06.png",
            steam: "https://sannerurl.com/rvv-godzex-ste",
            mobile: "https://sannerurl.com/rvv-godzex-mob"
        },
        {
            title: "GotiGreen",
            version: "0.90",
            image: "assets/img/REVIVER07.png",
            steam: "https://sannerurl.com/rvv-goti-ste",
            mobile: "https://sannerurl.com/rvv-goti-mob"
        },
        {
            title: "GotiCartoon",
            version: "0.90",
            image: "assets/img/REVIVER18.png",
            steam: "https://sannerurl.com/rvv-toon-ste",
            mobile: "https://sannerurl.com/rvv-toon-mob"
        },
        {
            title: "Yellow Otimizada",
            version: "0.90",
            image: "assets/img/REVIVER08.png",
            steam: "https://sannerurl.com/rvv-ylw-ste",
            mobile: "https://sannerurl.com/rvv-ylw-mob"
        },
        {
            title: "MegaLite Reshade",
            version: "0.90",
            image: "assets/img/REVIVER09.png",
            steam: "https://sannerurl.com/rvv-mgltre-ste",
            mobile: "https://sannerurl.com/rvv-mgltre-mob"
        },
        {
            title: "Reshade",
            version: "0.90",
            image: "assets/img/REVIVER10.png",
            steam: "https://sannerurl.com/rvv-re-ste",
            mobile: "https://sannerurl.com/rvv-re-mob"
        },
        {
            title: "StumblePink",
            version: "0.90",
            image: "assets/img/REVIVER11.png",
            steam: "https://sannerurl.com/rvv-pink-ste",
            mobile: "https://sannerurl.com/rvv-pink-mob"
        },
        {
            title: "BoltAgua",
            version: "0.89",
            image: "assets/img/REVIVER12.png",
            steam: "https://sannerurl.com/rvv-agua-ste",
            mobile: "https://sannerurl.com/rvv-agua-mob"
        },
        {
            title: "BoltAstaxzz",
            version: "0.89",
            image: "assets/img/REVIVER13.png",
            steam: "https://sannerurl.com/rvv-baz-ste",
            mobile: "https://sannerurl.com/rvv-baz-mob"
        },
        {
            title: "DarkUva",
            version: "0.89",
            image: "assets/img/REVIVER14.png",
            steam: "https://sannerurl.com/rvv-uva-ste",
            mobile: "https://sannerurl.com/rvv-uva-mob"
        },
        {
            title: "BoltWeen",
            version: "0.89",
            image: "assets/img/REVIVER15.png",
            steam: "https://sannerurl.com/rvv-ween-ste",
            mobile: "https://sannerurl.com/rvv-ween-mob"
        },
        {
            title: "Galaxy1",
            version: "0.89",
            image: "assets/img/REVIVER16.png",
            steam: "https://sannerurl.com/rvv-glxk-ste",
            mobile: "https://sannerurl.com/rvv-glxk-mob"
        },
        {
            title: "GalaxyBolt",
            version: "0.89",
            image: "assets/img/REVIVER17.png",
            steam: "https://sannerurl.com/rvv-glxb-ste",
            mobile: "https://sannerurl.com/rvv-glxb-mob"
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
      container.innerHTML = `<div class="no-results">Não foi encontrada nenhum reviver com "${query}"</div>`;
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
