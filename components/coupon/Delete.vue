<template>
    <button @click="couponUser" :disabled="loading" class="btn btn-dark mt-5">
        حذف
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>

<script setup>
import { useToast } from "vue-toastification";

const props = defineProps(['couponId']);

const loading = ref(false);
const toast = useToast();

async function coupon() {
    try {
        loading.value = true;

        await $fetch('/api/global', {
            method: 'DELETE',
            query: { url: `/coupons/${props.couponId}` },
        })

        toast.warning("حذف تخفیف باموفقیت انجام شد");
        return navigateTo('/coupons')
    } catch (error) {
        console.log(error.data);
    } finally {
        loading.value = false;
    }
}

</script>