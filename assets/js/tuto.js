document.addEventListener('DOMContentLoaded', () => {
    const tutorialsGrid = document.getElementById('tutorialsGrid');
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('tutorialSearch');
  
    function createTutorialCard(t) {
      const card = document.createElement('article');
      card.className = 'card tutorial-card';
      card.innerHTML = `
        <h3 class="title">${t.title}</h3>
        <div class="thumb" style="background-image:url('${t.thumb}');">
          <span class="play-icon">▶</span>
        </div>
        <div class="card-body">
          <div class="meta">${t.quality}</div>
        <div class="btns">
          <button class="btn play-btn">▶ Play</button>
          <a class="btn play-btn" href="${t.youtube}" target="_blank">↗ Ver no YouTube</a>
        </div>
        </div>
      `;

      card.querySelector('.play-icon').addEventListener('click', () => {
        videoIframe.src = t.youtube + '?autoplay=1';
        videoModal.classList.add('active');
      });

      card.querySelector('.play-btn').addEventListener('click', () => {
        videoIframe.src = t.youtube + '?autoplay=1';
        videoModal.classList.add('active');
      });
  
      return card;
    }
  
    function renderTutorials(list, query = '') {
      tutorialsGrid.innerHTML = '';
      if (list.length === 0) {
        const p = document.createElement('p');
        p.className = 'no-found';
        if(query) {
          p.textContent = `Não encontrado nenhum tutorial com "${query}"`;
        } else {
          p.textContent = `Nenhum tutorial encontrado.`;
        }
        tutorialsGrid.appendChild(p);
        return;
      }
      list.forEach(t => tutorialsGrid.appendChild(createTutorialCard(t)));
    }

    renderTutorials(tutorialsData);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const filtered = !query
          ? tutorialsData
          : tutorialsData.filter(t => t.title.toLowerCase().includes(query));
        renderTutorials(filtered, e.target.value);
      });
    }

    closeModal.addEventListener('click', () => {
      videoModal.classList.remove('active');
      videoIframe.src = '';
    });
  });
  