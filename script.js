document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to BitCloud Sweeps Demo!");

  // Play button alert
  document.querySelector('.btn-play').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Demo mode: Starting gameplay!");
  });

  // Sign up button alert
  document.querySelector('.btn-signup').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Sign up is disabled in demo mode.");
  });

  // Game card click handler
  const gameCards = document.querySelectorAll('.game-card');
  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      const gameName = card.getAttribute('data-game');
      alert(`You clicked on ${gameName}!`);
    });
  });
});
