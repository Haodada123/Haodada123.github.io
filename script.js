const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (themeButton) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  }
};

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeButton?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

document.querySelector('.print-button')?.addEventListener('click', () => window.print());
