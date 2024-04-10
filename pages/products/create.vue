<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="fw-bold">ایجاد محصول</h4>
    </div>

    <ClientOnly fallback-tag="span" fallback="در حال بارگذاری ...">
        <FormKit type="form" @submit="create" :incomplete-message="false" :actions="false">
            <div class="row gy-4">

                <ProductPrimaryImage @set-primary-image="(image) => primaryImage = image" />

            </div>


            <FormKit type="submit" input-class="btn btn-outline-dark mt-3 mb-5">
                ایجاد محصول
                <!-- <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div> -->
            </FormKit>
        </FormKit>
    </ClientOnly>

</template>

<script setup>

const primaryImage = ref(null)

function create() {

    console.log(primaryImage.value);

}
</script>