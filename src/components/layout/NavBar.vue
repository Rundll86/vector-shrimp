<script setup lang="ts">
import BlockButton from "../common/BlockButton.vue";
import Logo from "../common/Logo.vue";

function minimizeWindow() {
    window.minimizeWindow();
}
function closeWindow() {
    window.closeWindow();
}
</script>
<template>
    <div class="navbar">
        <Logo />
        <div class="controls">
            <BlockButton @click="minimizeWindow">-</BlockButton>
            <BlockButton @click="closeWindow">×</BlockButton>
        </div>
    </div>
</template>
<style scoped>
.navbar {
    background-color: var(--theme);
    -webkit-app-region: drag;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
}

.controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    -webkit-app-region: no-drag;
}
</style>