export function onWindowScroll(height) {
  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
