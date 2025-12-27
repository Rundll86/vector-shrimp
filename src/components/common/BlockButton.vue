<template>
    <button class="btn-block">
        <slot></slot>
    </button>
</template>
<style scoped>
.btn-block {
    --size: 40px;
    width: var(--size);
    height: var(--size);
    background-color: transparent;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight: bold;
}

.btn-block:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.btn-block:active {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>