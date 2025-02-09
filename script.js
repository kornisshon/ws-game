document.addEventListener("DOMContentLoaded", () => {
    const gameList = document.getElementById("game-list");

    // Заглушка списка игр
    const games = [
        { title: "Space Shooter", description: "Космическая стрелялка", rating: 4.5 },
        { title: "Maze Runner", description: "Пробеги лабиринт", rating: 4.2 }
    ];

    games.forEach(game => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p><strong>Рейтинг: ${game.rating}</strong>`;
        gameList.appendChild(div);
    });
});
