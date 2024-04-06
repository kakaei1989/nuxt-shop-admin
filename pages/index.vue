<template>
    <h1>Index Page</h1>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

const { data: chartData } = await useFetch('/api/global', {
    query: { url: '/transactions/chart' },
    headers: useRequestHeaders(['cookie'])
})

console.log(chartData.value);
</script>