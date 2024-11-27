const playerPosition = document.getElementById('playerPosition');
playerPosition.addEventListener('change', function () {
    let position = playerPosition.value;
    const playerStats = document.getElementById('playerStats');
    const GKStats = document.getElementById('GKStats');
  
    if (position == 'GK') {
      GKStats.classList.remove('hidden');
      playerStats.classList.add('hidden');
    } else {
      GKStats.classList.add('hidden');
      playerStats.classList.remove('hidden');
    }
  });