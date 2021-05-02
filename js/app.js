//DOM BOTONES
//Barra de navegación
const btnBalance = document.getElementById("btn-balance");
const btnCategories = document.getElementById("btn-categories");
const btnReports = document.getElementById("btn-reports");const burgerMenu = document.getElementById("nav-bar-burger");

//DOM SECCIONES
//Páginas
const mainNavbarBasic = document.getElementById("main-nav-bar");
const operationSection = document.getElementById("new-operation");
const balanceSection = document.getElementById("balance-section");
const editOperationSection = document.getElementById("edit-operation-section");
const categoriesSection = document.getElementById("categories-section");
const editCategorySection = document.getElementById("edit-category-section");
const reportsSection = document.getElementById("reports-section");

//***FUNCIONALIDAD BARRA NAVEGACIÓN***
// EVENTOS BOTONES BARRA NAVEGACIÓN
btnBalance.addEventListener("click", () => {
  categoriesSection.classList.add("is-hidden");
  reportsSection.classList.add("is-hidden");
  operationSection.classList.add("is-hidden");
  editOperationSection.classList.add("is-hidden");
  editCategorySection.classList.add("is-hidden");
  balanceSection.classList.remove("is-hidden");
});

btnCategories.addEventListener("click", () => {
  balanceSection.classList.add("is-hidden");
  reportsSection.classList.add("is-hidden");
  operationSection.classList.add("is-hidden");
  editOperationSection.classList.add("is-hidden");
  editCategorySection.classList.add("is-hidden");
  categoriesSection.classList.remove("is-hidden");
});

btnReports.addEventListener("click", () => {
  balanceSection.classList.add("is-hidden");
  categoriesSection.classList.add("is-hidden");
  operationSection.classList.add("is-hidden");
  editOperationSection.classList.add("is-hidden");
  editCategorySection.classList.add("is-hidden");
  reportsSection.classList.remove("is-hidden");
});

// MENU HAMBURGUESA
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  mainNavbarBasic.classList.toggle("is-active");
});

