const cases = {
  mage: {
    name: "🔮 Кейс Мага",
    items: [
      { name: "Зелье маны", rarity: "Обычный" },
      { name: "Свиток огненного шара", rarity: "Необычный" },
      { name: "Жезл искр", rarity: "Необычный" },
      { name: "Кольцо мага", rarity: "Редкий" },
      { name: "Гримуар древних", rarity: "Очень редкий" },
      { name: "Сфера архимага", rarity: "Легендарный" }
    ]
  },

  warrior: {
    name: "⚔️ Кейс Воина",
    items: [
      { name: "Зелье лечения", rarity: "Обычный" },
      { name: "Боевой топор", rarity: "Необычный" },
      { name: "Щит стойкости", rarity: "Редкий" },
      { name: "Доспех героя", rarity: "Очень редкий" },
      { name: "Клинок королей", rarity: "Легендарный" }
    ]
  }
};

const urlParams = new URLSearchParams(window.location.search);
const caseKey = urlParams.get("case");
const selectedCase = cases[caseKey];

if (selectedCase) {
  document.getElementById("caseTitle").textContent = selectedCase.name;
}

function randomItem() {
  return selectedCase.items[Math.floor(Math.random() * selectedCase.items.length)];
}

function openCase() {
  const result = document.getElementById("result");
  let spins = 15;

  let interval = setInterval(() => {
    const item = randomItem();
    result.textContent = item.name;
    spins--;

    if (spins <= 0) {
      clearInterval(interval);
      const finalItem = randomItem();
      result.textContent = `✨ ${finalItem.name} [${finalItem.rarity}]`;
    }
  }, 100);
}
