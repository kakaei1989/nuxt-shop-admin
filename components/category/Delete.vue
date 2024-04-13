<template>
    <button @click="deleteCategory" :disabled="loading" class="btn btn-dark mt-5">
        حذف
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>

<script setup>
import { useToast } from "vue-toastification";

const props = defineProps(['categoryId']);

const loading = ref(false);
const toast = useToast();

async function deleteCategory() {
    try {
        loading.value = true;

        await $fetch('/api/global', {
            method: 'DELETE',
            query: { url: `/categories/${props.categoryId}` },
        })

        toast.warning("حذف دسته بندی باموفقیت انجام شد");
        return navigateTo('/categories')
    } catch (error) {
        console.log(error.data);
    } finally {
        loading.value = false;
    }
}

</script>