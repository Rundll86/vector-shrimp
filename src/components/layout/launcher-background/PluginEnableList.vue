<script setup lang="ts">
import { ref } from 'vue';

const isShowList = ref(true);
</script>
<template>
    <button class="plugin-enable-list" @click="isShowList = !isShowList">
        ▴
        <div class="list" :class="{ 'show': isShowList }">
            <div class="option">注入Mod</div>
            <div class="option">代理流量</div>
        </div>
    </button>
</template>
<style scoped>
.list {
    --s: 0;
    position: absolute;
    left: 0;
    top: -10px;
    transform: translate(0, -100%) scale(var(--s));
    opacity: 0;
    transform-origin: left bottom;
    background-color: var(--theme-lighter);
    color: black;
    transition: all 0.2s ease-out;
    border-radius: 10px 10px 10px 0;
}

.list.show {
    --s: 1;
    opacity: 1;
}

.option {
    padding: 5px 10px;
    text-wrap: nowrap;
}

.option:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.plugin-enable-list {
    background-color: var(--theme);
    padding: 0 10px;
    border-radius: 0 10px 10px 0;
    border: 2px solid transparent;
    transition: all 0.1s ease-out;
    position: relative;
}

.plugin-enable-list:hover {
    color: white;
    border-color: white;
}

.plugin-enable-list:active {
    background-color: white;
    border-color: var(--theme);
    color: var(--theme);
}
</style>