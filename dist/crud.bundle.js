"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["crud"],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos),
/* harmony export */   "updateIndex": () => (/* binding */ updateIndex),
/* harmony export */   "uploadTodo": () => (/* binding */ uploadTodo)
/* harmony export */ });
const loadTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

const uploadTodo = (tasks) => localStorage.setItem('todos', JSON.stringify(tasks));

const updateIndex = (tasksMod) => {
  let tasksModIndex = [];
  tasksMod.forEach((task, ind) => {
    task.index = ind;
    tasksModIndex = [...tasksModIndex, task];
  });

  return tasksModIndex;
};


/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const formEl = document.querySelector('.input-container');
const todoInputEl = document.querySelector('.todo-input');
const listsEl = document.querySelector('.lists');

const renderTodo = () => {
  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  if (!tasks) return;

  const tasksSorted = tasks.slice().sort((a, b) => a.index - b.index);
  listsEl.innerHTML = '';
  tasksSorted.forEach((task) => {
    const { completed } = task;
    const flag = completed ? 'checked' : '';
    const cross = completed ? 'cross' : '';
    const markup = `
      <li class="list">
      <span class="list-left">
        <input type="checkbox" class="check" data-check="${task.index}" ${flag}/>
        <input type="text" data-desc="${task.index}" class="todo todo-${task.index} ${cross}" value="${task.description}"/>
      </span>
      <button class="btn remove" data-remove="${task.index}">
        <i class="fa-regular fa-trash-can"></i>
      </button>
      </li>
    `;

    listsEl.insertAdjacentHTML('beforeend', markup);
  });
};

const addTodo = (e) => {
  e.preventDefault();
  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const toDo = todoInputEl.value.trim();
  todoInputEl.value = '';
  if (!toDo) return;

  const task = {
    description: toDo,
    completed: false,
    index: tasks.length,
  };

  const tasksMod = [...tasks, task];
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasksMod);
  renderTodo();
};

const updateTodo = (e) => {
  const clicked = e.target.closest('.todo');
  if (!clicked) return;

  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const listNum = +clicked.dataset.desc;

  const task = tasks.find((task) => task.index === listNum);
  task.description = clicked.value.trim();

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasks);
};

const removeTodo = (e) => {
  const clicked = e.target.closest('.remove');
  if (!clicked) return;

  const tasks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.loadTodos)();
  const listNum = +clicked.dataset.remove;

  const tasksMod = tasks.filter((task) => task.index !== listNum);
  const tasksModIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.updateIndex)(tasksMod);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uploadTodo)(tasksModIndex);
  renderTodo();
};

formEl.addEventListener('submit', addTodo);
listsEl.addEventListener('click', removeTodo);
listsEl.addEventListener('keyup', updateTodo);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/operations.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU87O0FBRUE7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1orRDs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1EQUFTO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFdBQVcsSUFBSSxLQUFLO0FBQy9FLHdDQUF3QyxXQUFXLHFCQUFxQixZQUFZLEVBQUUsTUFBTSxXQUFXLGlCQUFpQjtBQUN4SDtBQUNBLGdEQUFnRCxXQUFXO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1EQUFTO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxvREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbURBQVM7QUFDekI7O0FBRUE7QUFDQSx3QkFBd0IscURBQVc7O0FBRW5DLEVBQUUsb0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9hZFRvZG9zID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRUb2RvID0gKHRhc2tzKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSW5kZXggPSAodGFza3NNb2QpID0+IHtcbiAgbGV0IHRhc2tzTW9kSW5kZXggPSBbXTtcbiAgdGFza3NNb2QuZm9yRWFjaCgodGFzaywgaW5kKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZDtcbiAgICB0YXNrc01vZEluZGV4ID0gWy4uLnRhc2tzTW9kSW5kZXgsIHRhc2tdO1xuICB9KTtcblxuICByZXR1cm4gdGFza3NNb2RJbmRleDtcbn07XG4iLCJpbXBvcnQgeyBsb2FkVG9kb3MsIHVwZGF0ZUluZGV4LCB1cGxvYWRUb2RvIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpO1xuY29uc3QgdG9kb0lucHV0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pbnB1dCcpO1xuY29uc3QgbGlzdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuXG5jb25zdCByZW5kZXJUb2RvID0gKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IGxvYWRUb2RvcygpO1xuICBpZiAoIXRhc2tzKSByZXR1cm47XG5cbiAgY29uc3QgdGFza3NTb3J0ZWQgPSB0YXNrcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgbGlzdHNFbC5pbm5lckhUTUwgPSAnJztcbiAgdGFza3NTb3J0ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0YXNrO1xuICAgIGNvbnN0IGZsYWcgPSBjb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJztcbiAgICBjb25zdCBjcm9zcyA9IGNvbXBsZXRlZCA/ICdjcm9zcycgOiAnJztcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbGVmdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiIGRhdGEtY2hlY2s9XCIke3Rhc2suaW5kZXh9XCIgJHtmbGFnfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtZGVzYz1cIiR7dGFzay5pbmRleH1cIiBjbGFzcz1cInRvZG8gdG9kby0ke3Rhc2suaW5kZXh9ICR7Y3Jvc3N9XCIgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCIvPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biByZW1vdmVcIiBkYXRhLXJlbW92ZT1cIiR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgbGlzdHNFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVG9kbyA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFza3MgPSBsb2FkVG9kb3MoKTtcbiAgY29uc3QgdG9EbyA9IHRvZG9JbnB1dEVsLnZhbHVlLnRyaW0oKTtcbiAgdG9kb0lucHV0RWwudmFsdWUgPSAnJztcbiAgaWYgKCF0b0RvKSByZXR1cm47XG5cbiAgY29uc3QgdGFzayA9IHtcbiAgICBkZXNjcmlwdGlvbjogdG9EbyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0YXNrcy5sZW5ndGgsXG4gIH07XG5cbiAgY29uc3QgdGFza3NNb2QgPSBbLi4udGFza3MsIHRhc2tdO1xuICB1cGxvYWRUb2RvKHRhc2tzTW9kKTtcbiAgcmVuZGVyVG9kbygpO1xufTtcblxuY29uc3QgdXBkYXRlVG9kbyA9IChlKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kbycpO1xuICBpZiAoIWNsaWNrZWQpIHJldHVybjtcblxuICBjb25zdCB0YXNrcyA9IGxvYWRUb2RvcygpO1xuICBjb25zdCBsaXN0TnVtID0gK2NsaWNrZWQuZGF0YXNldC5kZXNjO1xuXG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBsaXN0TnVtKTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGNsaWNrZWQudmFsdWUudHJpbSgpO1xuXG4gIHVwbG9hZFRvZG8odGFza3MpO1xufTtcblxuY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlJyk7XG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2tzID0gbG9hZFRvZG9zKCk7XG4gIGNvbnN0IGxpc3ROdW0gPSArY2xpY2tlZC5kYXRhc2V0LnJlbW92ZTtcblxuICBjb25zdCB0YXNrc01vZCA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gbGlzdE51bSk7XG4gIGNvbnN0IHRhc2tzTW9kSW5kZXggPSB1cGRhdGVJbmRleCh0YXNrc01vZCk7XG5cbiAgdXBsb2FkVG9kbyh0YXNrc01vZEluZGV4KTtcbiAgcmVuZGVyVG9kbygpO1xufTtcblxuZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xubGlzdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRvZG8pO1xubGlzdHNFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwZGF0ZVRvZG8pO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUb2RvO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9