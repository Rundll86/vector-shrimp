<script setup lang="ts">
import { onMounted } from "vue";
import LayoutViews from "./abstracts/LayoutViews.vue";
import LauncherBackground from "./layout/launcher-background/LauncherBackground.vue";
import NavBar from "./layout/navbar/NavBar.vue";

onMounted(() => {
    window.addEventListener("keydown", (event) => {
        if (event.key === "F12") {
            window.toggleDevTools();
        }
    });
});
</script>
<template>
    <div>
        <LayoutViews>
            <NavBar />
            <LauncherBackground />
        </LayoutViews>
    </div>
</template>