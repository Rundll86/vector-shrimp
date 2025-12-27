<script setup lang="ts">
import { ref } from 'vue';
import LaunchGameButton from './LaunchGameButton.vue';
import ClientSettingMenu from './ClientSettingMenu.vue';
import PluginEnableList from './PluginEnableList.vue';

const backgroundUrl = ref("https://act-webstatic.mihoyo.com/puzzle/hk4e/pz_54dyC7Ol7a/resource/puzzle/2025/11/24/4f37dc420ef05009084eb0b06fbdd7b8_7658693775272185136.jpeg?x-oss-process=image/format,webp/quality,Q_90");
</script>
<template>
    <img class="launcher-background" :src="backgroundUrl">
    <div class="launcher">
        <LaunchGameButton />
        <ClientSettingMenu />
        <PluginEnableList />
    </div>
</template>
<style scoped>
.launcher-background {
    overflow: hidden;
    object-fit: cover;
}

.launcher {
    display: flex;
    gap: 5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
}
</style>