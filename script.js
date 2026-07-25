/**
 * SCPSEC Custom Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  let toastTimeout;

  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');

  function notifySoon(itemName) {
    if (!toast || !toastMsg) return;

    toastMsg.textContent = `${itemName} is under active SCPSEC development!`;
    toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }, 3000);
  }

  // Event Delegation for 'Coming Soon' badges
  document.addEventListener('click', (e) => {
    const badge = e.target.closest('.badge-soon');
    if (badge) {
      const itemName = badge.getAttribute('data-item') || 'This feature';
      notifySoon(itemName);
    }
  });
});