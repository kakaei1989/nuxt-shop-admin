<template>
    <div class="row mt-5 justify-content-center align-items-center">
        <div class="col-md-3">
            <div class="card">
                <div class="card-body py-5">
                    <h4 class="mb-5 text-center">ورود به پنل ادمین</h4>
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">ایمیل</label>
                            <input v-model="formData.email" type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" class="form-label">رمز عبور</label>
                            <input v-model="formData.password" type="password" class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-dark">
                            ورود
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: false
})

const formData = reactive({
    email: '',
    password: ''
})

function login() {
    console.log(formData);
}

</script>