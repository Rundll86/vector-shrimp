<template>
    <button class="client-setting-menu">⚙️</button>
</template>
<style scoped>
.client-setting-menu {
    background-color: var(--theme);
    padding: 0 10px;
    border: 2px solid transparent;
    transition: all 0.1s ease-out;
}

.client-setting-menu:hover {
    color: white;
    border-color: white;
}

.client-setting-menu:active {
    background-color: white;
    border-color: var(--theme);
    color: var(--theme);
}
</style>