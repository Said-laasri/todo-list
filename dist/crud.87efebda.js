"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["crud"],{

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "clearList": () => (/* binding */ clearList)
/* harmony export */ });
const clearList = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;
  const targetData = parseInt(clicked.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('localItem')) || [];
  const update = task.find((todo) => todo.index === targetData);
  update.completed = !update.completed;
  localStorage.setItem('localItem', JSON.stringify(task));
};

const clearAll = () => {
  const setting = JSON.parse(localStorage.getItem('localItem')) || [];
  const notCompleted = setting.filter((taskList) => !taskList.completed);
  setting.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });

  setting.push(...notCompleted);
  localStorage.setItem('localItem', JSON.stringify(setting));
};


/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/checkbox.js");


const tasklistDisplay = document.querySelector('.shores');
const inputValu = document.querySelector('.newTask');
const addBtn = document.querySelector('.addtolist');
const clearBtn = document.querySelector('.deleteallselect');

let taskList = JSON.parse(localStorage.getItem('localItem')) || [];

const display = () => {
  tasklistDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((task) => {
    const tasklistDisplay = document.querySelector('.shores');
    const shore = document.createElement('div');
    const flag = task.completed ? 'checked' : '';
    shore.classList.add('listDo');
    shore.innerHTML = `
  <input class="check" ${flag} type="checkbox" data-set="${task.index}" >
  <input class="editTask" type="text"  value="${task.description}" >
  <div>
  <i class="fa-solid fa-trash-can" id="${task.index}"></i>
  </div>
 `;
    tasklistDisplay.appendChild(shore);
    const taskInput = shore.children[1];
    taskInput.addEventListener('change', () => {
      const taskListChores = document.querySelector('.shores');
      const array = Array.from(taskListChores.children);
      const index = array.indexOf(shore);
      const taskListLocal = JSON.parse(localStorage.getItem('localItem'));
      taskListLocal[index].description = taskInput.value;
      localStorage.setItem('localItem', JSON.stringify(taskListLocal));
    });
  });
};

display();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValu.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  const obj = {
    description: inputValu.value,
    completed: false,
    index: taskList.length,
  };

  taskList.push(obj);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  inputValu.value = '';
  display();
});

const removeTask = (index) => {
  const newArr = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...newArr);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};
tasklistDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

tasklistDisplay.addEventListener('click', _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.clearList);

clearBtn.addEventListener('click', () => {
  (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.clearAll)();
  display();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC44N2VmZWJkYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Qm9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsTUFBTSw0QkFBNEIsV0FBVztBQUN0RSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0EseUNBQXlDLFdBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBDQUEwQyxtREFBUzs7QUFFbkQ7QUFDQSxFQUFFLHNEQUFRO0FBQ1Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NydWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsZWFyTGlzdCA9IChlKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2snKTtcbiAgaWYgKCFjbGlja2VkKSByZXR1cm47XG4gIGNvbnN0IHRhcmdldERhdGEgPSBwYXJzZUludChjbGlja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSwgMTApO1xuICBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxJdGVtJykpIHx8IFtdO1xuICBjb25zdCB1cGRhdGUgPSB0YXNrLmZpbmQoKHRvZG8pID0+IHRvZG8uaW5kZXggPT09IHRhcmdldERhdGEpO1xuICB1cGRhdGUuY29tcGxldGVkID0gIXVwZGF0ZS5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IHNldHRpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XG4gIGNvbnN0IG5vdENvbXBsZXRlZCA9IHNldHRpbmcuZmlsdGVyKCh0YXNrTGlzdCkgPT4gIXRhc2tMaXN0LmNvbXBsZXRlZCk7XG4gIHNldHRpbmcubGVuZ3RoID0gMDtcbiAgbGV0IGkgPSAwO1xuICBub3RDb21wbGV0ZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5kZXggPSBpO1xuICAgIGkgKz0gMTtcbiAgfSk7XG5cbiAgc2V0dGluZy5wdXNoKC4uLm5vdENvbXBsZXRlZCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nKSk7XG59O1xuIiwiaW1wb3J0IHsgY2xlYXJMaXN0LCBjbGVhckFsbCB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuXG5jb25zdCB0YXNrbGlzdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcmVzJyk7XG5jb25zdCBpbnB1dFZhbHUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFzaycpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRvbGlzdCcpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlYWxsc2VsZWN0Jyk7XG5cbmxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcblxuY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgdGFza2xpc3REaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tsaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9yZXMnKTtcbiAgICBjb25zdCBzaG9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZsYWcgPSB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnO1xuICAgIHNob3JlLmNsYXNzTGlzdC5hZGQoJ2xpc3REbycpO1xuICAgIHNob3JlLmlubmVySFRNTCA9IGBcbiAgPGlucHV0IGNsYXNzPVwiY2hlY2tcIiAke2ZsYWd9IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtc2V0PVwiJHt0YXNrLmluZGV4fVwiID5cbiAgPGlucHV0IGNsYXNzPVwiZWRpdFRhc2tcIiB0eXBlPVwidGV4dFwiICB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIiA+XG4gIDxkaXY+XG4gIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCIgaWQ9XCIke3Rhc2suaW5kZXh9XCI+PC9pPlxuICA8L2Rpdj5cbiBgO1xuICAgIHRhc2tsaXN0RGlzcGxheS5hcHBlbmRDaGlsZChzaG9yZSk7XG4gICAgY29uc3QgdGFza0lucHV0ID0gc2hvcmUuY2hpbGRyZW5bMV07XG4gICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tMaXN0Q2hvcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3JlcycpO1xuICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHRhc2tMaXN0Q2hvcmVzLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihzaG9yZSk7XG4gICAgICBjb25zdCB0YXNrTGlzdExvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxJdGVtJykpO1xuICAgICAgdGFza0xpc3RMb2NhbFtpbmRleF0uZGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3RMb2NhbCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmRpc3BsYXkoKTtcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoaW5wdXRWYWx1LnZhbHVlID09PSAnJykgcmV0dXJuO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIGRlc2NyaXB0aW9uOiBpbnB1dFZhbHUudmFsdWUsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogdGFza0xpc3QubGVuZ3RoLFxuICB9O1xuXG4gIHRhc2tMaXN0LnB1c2gob2JqKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gIGlucHV0VmFsdS52YWx1ZSA9ICcnO1xuICBkaXNwbGF5KCk7XG59KTtcblxuY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xuICBjb25zdCBuZXdBcnIgPSB0YXNrTGlzdC5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5kZXggIT09IGluZGV4KTtcbiAgdGFza0xpc3QubGVuZ3RoID0gMDtcbiAgbGV0IGkgPSAwO1xuICBuZXdBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5kZXggPSBpO1xuICAgIGkgKz0gMTtcbiAgfSk7XG4gIHRhc2tMaXN0LnB1c2goLi4ubmV3QXJyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gIGRpc3BsYXkoKTtcbn07XG50YXNrbGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1zb2xpZCcpKSB7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyksIDEwKTtcbiAgICByZW1vdmVUYXNrKGluZGV4KTtcbiAgfVxufSk7XG5cbnRhc2tsaXN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyTGlzdCk7XG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbGVhckFsbCgpO1xuICBkaXNwbGF5KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==