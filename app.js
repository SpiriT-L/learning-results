const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');
const progress = document.querySelector('#progress');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModal);
modal.addEventListener('change', toggleTech)

const APP_TITLE = document.title;

const technologies = [
  {
    title: 'HTML',
    description:
      'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
    type: 'html',
    done: true,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    title: 'CSS',
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
    type: 'css',
    done: true,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    title: 'Sass',
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.',
    type: 'sass',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    title: 'Bootstrap',
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    type: 'bootstrap',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    title: 'Git',
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    type: 'git',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    title: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    type: 'nodejs',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language.',
    type: 'javascript',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    title: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
    type: 'react',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

// const technologies = [];

function openCard(event) {
  const data = event.target.dataset;
  const tech = technologies.find(t => t.type === data.type);
  if (!tech) {
    return;
  }

  openModal(toModal(tech), tech.title);
}

function toModal(tech) {
  const checked = tech.done ? 'checked' : ''
  return `
  <h2>${tech.title}</h2>
      <p>${tech.description}</p>
      <hr />
      <div>
        <input type="checkbox" id="done" ${checked} data-type="${tech.type}" />
        <label for="done">I have completed this technology</label>
      </div>
  `;
}

function toggleTech(event){
const type = event.target.dataset.type;
const tech = technologies.find(t => t.type === type);
tech.done = event.target.checked

init()
}

function openModal(html, title = APP_TITLE) {
  document.title = `${title} | ${APP_TITLE}`;
  modal.innerHTML = html;
  modal.classList.add('open');
}

function closeModal() {
  document.title = APP_TITLE;
  modal.classList.remove('open');
}

function init() {
  renderCards();
  renderProgress();
}

function renderCards() {
  if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">No technologies available.</p>';
  } else {
    content.innerHTML = technologies.map(addTechnology).join('');
  }
}

function renderProgress() {
  const percent = computeProgressPercent();

  let backgroundColor;
  if (percent >= 80) {
    backgroundColor = '#4caf50';
  } else if (percent >= 30) {
    backgroundColor = '#ff9800';
  } else {
    backgroundColor = '#f44336';
  }

  progress.style.backgroundColor = backgroundColor;
  progress.style.width = `${percent}%`;
  progress.textContent = `${percent}` ? `${percent}%` : '';
  console.log(percent);
}

function computeProgressPercent() {
  if (technologies.length === 0) {
    return 0;
  }

  let doneCount = 0;
  technologies.forEach(tech => {
    if (tech.done) {
      doneCount++;
    }
  });

  return Math.round((doneCount / technologies.length) * 100);
}

function addTechnology(tech) {
  const doneClass = tech.done ? 'done' : '';

  return `
    <div class="card ${doneClass}" data-type="${tech.type}">
      <img class="icon" src="${tech.image}" alt="${tech.name}" data-type="${tech.type}" />
      <h3 data-type="${tech.type}">${tech.title}</h3>
      <!-- <p>${tech.description}</p> -->
    </div>
  `;
}

init();
