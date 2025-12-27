import "vue";
declare global {
    interface Window {
        closeWindow(): void;
        minimizeWindow(): void;
        toggleDevTools(): void;
    }
}
export { };