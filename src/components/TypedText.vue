<template>
    <span>
        {{ displayed }}
        <span v-if="!done"
            class="inline-block w-0.5 h-[0.9em] bg-purple-400 ml-0.5 align-middle [animation:blink_0.8s_step-end_infinite]" />
    </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ text: string; speed?: number }>()

const displayed = ref('')
const done = ref(false)

onMounted(() => {
    let i = 0
    const iv = setInterval(() => {
        i++
        displayed.value = props.text.slice(0, i)
        if (i >= props.text.length) {
            done.value = true
            clearInterval(iv)
        }
    }, props.speed ?? 38)
})
</script>

<style>
@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>