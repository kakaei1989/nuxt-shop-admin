<template>
    <button @click="deleteUser" :disabled="loading" class="btn btn-dark mt-5">
        حذف
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>

<script setup>
import { useToast } from "vue-toastification";

const props = defineProps(['userId']);

const loading = ref(false);
const toast = useToast();

async function deleteUser() {
    try {
        loading.value = true;

        await $fetch('/api/global', {
            method: 'DELETE',
            query: { url: `/users/${props.userId}` },
        })

        toast.warning("حذف کاربر باموفقیت انجام شد");
        return navigateTo('/users')
    } catch (error) {
        console.log(error.data);
    } finally {
        loading.value = false;
    }
}

</script>