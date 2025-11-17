const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const openExternal = document.getElementById('openExternal');
const retryBtn = document.getElementById('retry');
const iframeWrap = document.querySelector('.iframe-wrap');
const iframe = document.querySelector('iframe');
const yearEl = document.getElementById('year');

const STORAGE_KEY = 'rg-theme';

function setTheme(mode) {
  if (mode === 'light') {
    root.classList.add('light');
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    root.classList.remove('light');
    themeToggle.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem(STORAGE_KEY, mode);
}

const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme) {
  setTheme(savedTheme);
}

themeToggle?.addEventListener('click', () => {
  const next = root.classList.contains('light') ? 'dark' : 'light';
  setTheme(next);
});

openExternal?.addEventListener('click', () => {
  window.open(
    'https://chatgpt.com/g/g-691a494a5220819189f50ee6ffa61746-reel-good-advice',
    '_blank',
    'noopener'
  );
});

retryBtn?.addEventListener('click', () => {
  iframeWrap.classList.remove('error');
  iframe.src = iframe.src;
});

iframe?.addEventListener('error', () => {
  iframeWrap.classList.add('error');
});

iframe?.addEventListener('load', () => {
  iframeWrap.classList.remove('error');
});

yearEl.textContent = new Date().getFullYear();
