import { StandardEvents } from '@shopify/events';

const PROMPT_ID = 'checkout-prompt';

function createPrompt() {
  const prompt = document.createElement('aside');
  prompt.id = PROMPT_ID;
  prompt.className = 'checkout-prompt';
  prompt.hidden = true;
  prompt.setAttribute('aria-live', 'polite');

  prompt.innerHTML = `
    <a class="checkout-prompt__link" href="${Theme.routes.cart_url}/checkout" aria-label="Checkout">
      <span class="checkout-prompt__text">Checkout</span>
      <span class="checkout-prompt__count" data-checkout-count>0</span>
    </a>
  `;

  document.body.appendChild(prompt);
  return prompt;
}

async function fetchCartItemCount() {
  try {
    const response = await fetch(`${Theme.routes.cart_url}.json`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    });

    if (!response.ok) return 0;

    const cart = await response.json();
    return Number(cart?.item_count) || 0;
  } catch {
    return 0;
  }
}

function initCheckoutPrompt() {
  const prompt = document.getElementById(PROMPT_ID) || createPrompt();
  const countElement = prompt.querySelector('[data-checkout-count]');

  const syncPrompt = async () => {
    const itemCount = await fetchCartItemCount();
    prompt.hidden = itemCount < 1;
    if (countElement) {
      countElement.textContent = String(itemCount);
    }
  };

  syncPrompt();

  document.addEventListener(StandardEvents.cartLinesUpdate, (event) => {
    if (!event.promise) {
      syncPrompt();
      return;
    }

    event.promise
      .then(({ detail }) => {
        if (detail?.didError) return;
        syncPrompt();
      })
      .catch(() => {
        // Ignore rejected update promises to avoid noisy console output.
      });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCheckoutPrompt, { once: true });
} else {
  initCheckoutPrompt();
}
