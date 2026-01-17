const loot = {
  common: ["Зелье лечения", "Монета возврата", "Факел вечного огня"],
  uncommon: ["Сапоги тихого шага", "Жезл искр", "Плащ карманов"],
  rare: ["Оружие +1", "Кольцо защиты", "Плащ теней"],
  epic: ["Плащ полёта", "Разумный клинок", "Сердце феникса"],
  legendary: ["Клинок, убивший бога", "Куб времени", "Корона стихий"]
};

function rollRarity() {
  let roll = Math.random() * 100;

  if (roll < 50) return "common";
  if (roll < 75) return "uncommon";
  if (roll < 90) return "rare";
  if (roll < 98) return "epic";
  return "legendary";
}

function openCase() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "🎰 Крутится...";

  let spins = 15;
  let interval = setInterval(() => {
    let rarity = rollRarity();
    let item = loot[rarity][Math.floor(Math.random() * loot[rarity].length)];
    resultDiv.textContent = item;
    spins--;
    if (spins <= 0) {
      clearInterval(interval);
      finalizeDrop();
    }
  }, 100);
}

function finalizeDrop() {
  let rarity = rollRarity();
  let item = loot[rarity][Math.floor(Math.random() * loot[rarity].length)];
  document.getElementById("result").textContent =
    "✨ " + item + " (" + rarity + ")";
}

