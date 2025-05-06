document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById('openChats');
    const closeBtn = document.getElementById('closeChats');
    const chatsPanel = document.getElementById('chatsPanel');
    const overlay = document.getElementById('overlay');

    openBtn.addEventListener('click', () => {
        chatsPanel.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        chatsPanel.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        chatsPanel.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
  });