<!-- PostItem.vue -->
<template>
    <div @click="$emit('select-post', post)">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
    </div>
</template>

<script setup>
defineProps(['post'])
</script>