const ROOT_SELECTOR = '.product-details';
const BUTTON_SELECTOR = `${ROOT_SELECTOR} .buy-buttons-block .shopify-payment-button__button--unbranded`;
const PRICE_SELECTORS = [
  `${ROOT_SELECTOR} .price-item--sale`,
  `${ROOT_SELECTOR} .price-item--last`,
  `${ROOT_SELECTOR} .price`,
  `${ROOT_SELECTOR} [data-testid='sticky-price-display']`,
];

const CURRENCY_PATTERN = /(?:Rs\.?|₹)\s*([\d,]+(?:\.\d{1,2})?)/i;

function formatInr(value) {
  return `₹${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(value))}`;
}

function getPriceText() {
  for (const selector of PRICE_SELECTORS) {
    const element = document.querySelector(selector);
    if (element?.textContent?.trim()) {
      return element.textContent;
    }
  }

  return '';
}

function resolveFormattedPrice() {
  const priceText = getPriceText();
  const match = priceText.match(CURRENCY_PATTERN);
  if (!match?.[1]) return null;

  const numericPrice = Number.parseFloat(match[1].replace(/,/g, ''));
  if (Number.isNaN(numericPrice)) return null;

  return formatInr(numericPrice);
}

function updateCtaLabel() {
  const buttons = document.querySelectorAll(BUTTON_SELECTOR);
  if (!buttons.length) return;

  const formattedPrice = resolveFormattedPrice();
  if (!formattedPrice) return;

  const nextText = `Buy at ${formattedPrice}`;

  buttons.forEach((button) => {
    if (button.textContent?.trim() !== nextText) {
      button.textContent = nextText;
      button.setAttribute('aria-label', nextText);
    }
  });
}

function observeProductDetails() {
  const root = document.querySelector(ROOT_SELECTOR);
  if (!root) {
    requestAnimationFrame(observeProductDetails);
    return;
  }

  const observer = new MutationObserver(() => {
    requestAnimationFrame(updateCtaLabel);
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  updateCtaLabel();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeProductDetails, { once: true });
} else {
  observeProductDetails();
}

window.addEventListener('pageshow', updateCtaLabel);
