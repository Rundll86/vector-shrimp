<template>
    <button class="launch-game-button">启动游戏</button>
</template>
<style scoped>
.launch-game-button {
    background-color: var(--theme);
    padding: 10px 20px;
    border-radius: 10px 0 0 10px;
    border: 2px solid transparent;
    transition: all 0.1s ease-out;
}

.launch-game-button:hover {
    color: white;
    border-color: white;
}

.launch-game-button:active {
    background-color: white;
    border-color: var(--theme);
    color: var(--theme);
}
</style>