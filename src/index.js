import './style.css';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

const toDo = [
  {
    description: 'clean my room',
    comleted: false,
    index: 1,
  },
  {
    description: 'check my emails',
    comleted: true,
    index: 2,
  },
  {
    description: 'read my book',
    comleted: false,
    index: 3,
  },
  {
    description: 'working on my coding skills',
    comleted: false,
    index: 4,
  },
];

const addToList = () => {
  const container = document.querySelector('.shores');
  for (let i = 0; i < toDo.length; i += 1) {
    const shore = document.createElement('div');
    shore.classList.add('listDo');
    shore.innerHTML = `
  <div class="listElement">
  <input type="checkbox">
  <h2>${toDo[i].description}</h2>
  </div>
  <div>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>`;
    container.appendChild(shore);
  }
};

addToList();