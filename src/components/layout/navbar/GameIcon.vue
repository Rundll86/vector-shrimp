<script setup lang="ts">
import { PropType } from 'vue';
import { gameNameMap, GameType } from '../../../structs/gameStore';

defineProps({
    gameType: {
        type: String as PropType<GameType>,
        required: true,
    },
});
</script>
<template>
    <div class="anchor">
        <img class="game-icon" :src="`games/${gameType}.ico`">
        <div class="bubble">
            <span class="block"></span>
            {{ gameNameMap[gameType] }}
        </div>
    </div>
</template>
<style scoped>
.anchor {
    position: relative;
}

.game-icon {
    transition: all 0.2s ease-out;
    width: 48px;
    height: 48px;
    border-radius: 10px;
    border: 3px solid transparent;
    padding: 2px;
}

.game-icon:hover {
    border-color: white;
}

.block {
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: var(--theme-light);
    width: 10px;
    height: 10px;
}

.bubble {
    --s: 0;
    position: absolute;
    top: 50%;
    left: 100%;
    /* width: 200px; */
    background-color: var(--theme-light);
    color: white;
    border-radius: 10px;
    padding: 10px;
    transform: translate(15px, -50%) scale(var(--s));
    transform-origin: left center;
    opacity: 0;
    transition: all 0.2s ease-out;
    text-wrap: nowrap;
}

.anchor:hover .bubble {
    --s: 1;
    opacity: 1;
}
</style>