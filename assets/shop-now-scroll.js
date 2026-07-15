function getHeaderOffset() {
  const header = document.querySelector('#header-component');
  return header ? Math.max(header.getBoundingClientRect().height, 0) : 0;
}

function scrollToProductList() {
  const productList = document.querySelector('[data-testid="product-list"]');
  if (!productList) return;

  const offset = getHeaderOffset() + 12;
  const targetTop = productList.getBoundingClientRect().top + window.scrollY - offset;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: reduceMotion ? 'auto' : 'smooth',
  });
}

function isShopNowCollectionLink(anchor) {
  if (!(anchor instanceof HTMLAnchorElement)) return false;

  const href = anchor.getAttribute('href') || '';
  if (!href) return false;

  const normalizedHref = href.trim().toLowerCase();
  const isCollectionsAll =
    normalizedHref === '/collections/all' ||
    normalizedHref.endsWith('/collections/all') ||
    normalizedHref.includes('shopify://collections/all');

  if (!isCollectionsAll) return false;

  const label = anchor.textContent?.trim().toLowerCase() || '';
  return label.includes('shop now');
}

function initShopNowScroll() {
  if (window.location.pathname !== '/') return;

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest('a');
    if (!isShopNowCollectionLink(anchor)) return;

    event.preventDefault();
    scrollToProductList();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShopNowScroll, { once: true });
} else {
  initShopNowScroll();
}
