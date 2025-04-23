<script setup>
import { useCounter } from '../stores/counter'
const counter = useCounter()
function countUp() {
    counter.count++
}
</script>
<template>
    <button @click="countUp">count is {{ counter.count }}</button>
</template>