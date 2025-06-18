const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModal);

const technologies = [
  {
    name: 'HTML',
    description:
      'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
    type: 'html',
    done: true,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
    type: 'css',
    done: true,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Sass',
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.',
    type: 'sass',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'Bootstrap',
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    type: 'bootstrap',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Git',
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    type: 'git',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    type: 'nodejs',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language.',
    type: 'javascript',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
    type: 'react',
    done: false,
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

// const technologies = [];

function openCard() {
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

function init() {
  if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">No technologies available.</p>';
  } else {
    content.innerHTML = technologies.map(addTechnology).join('');
  }
}

function addTechnology(tech) {
  const doneClass = tech.done ? 'done' : '';

  return `
    <div class="card ${doneClass}" data-type="${tech.type}">
      <img class="icon" src="${tech.image}" alt="${tech.name}" />
      <h3>${tech.name}</h3>
      <!-- <p>${tech.description}</p> -->
    </div>
  `;
}

init();
