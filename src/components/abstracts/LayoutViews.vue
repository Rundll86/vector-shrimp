<template>
    <div class="layouter">
        <slot></slot>
    </div>
</template>
<style scoped>
.layouter {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
}
</style>