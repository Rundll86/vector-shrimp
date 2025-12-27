<script setup lang="ts">
import BlockButton from "../../common/BlockButton.vue";
import Logo from "../../common/LogoImage.vue";
import GameIcon from "./GameIcon.vue";

function min() {
    window.minimizeWindow();
}
function clo() {
    window.closeWindow();
}
</script>
<template>
    <div class="navbar">
        <Logo />
        <div class="games">
            <GameIcon game-type="ys" />
            <GameIcon game-type="zzz" />
            <GameIcon game-type="sr" />
        </div>
        <div class="controls">
            <BlockButton @click="min">-</BlockButton>
            <BlockButton @click="clo">×</BlockButton>
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

.games,
.controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    -webkit-app-region: no-drag;
}
</style>