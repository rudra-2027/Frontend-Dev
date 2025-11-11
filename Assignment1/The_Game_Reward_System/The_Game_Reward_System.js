function gameReward() {
  let level = parseInt(prompt("Enter player level:"));
  let p = parseInt(prompt("Enter performance score:"));
  let m = prompt("Has the player completed all missions? (yes/no):").toLowerCase() === "yes";

  let coins = (level * 50) + (p * 10);
  if (m) coins *= 2;

  let rank = (coins > 1000) ? "Elite" : "Regular";

  let message =
    "Game Reward Summary \n\n" +
    `Player Level: ${level}\n` +
    `Performance Score: ${p}\n` +
    `Missions Completed: ${m ? "Yes" : "No"}\n` +
    `Total Coins Earned: ${coins}\n` +
    `Player Rank: ${rank}`;

  alert(message);
}

gameReward();
