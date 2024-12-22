export const useMessageStore = defineStore("message", () => {
    const showMessage: Ref<boolean> = ref(false);
    const message: Ref<string | unknown> = ref('');

    return { showMessage, message };
})