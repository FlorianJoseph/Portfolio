<template>
  <div class="h-screen overflow-hidden">
    <Topbar />

    <!-- Views -->
    <div class="pt-11 h-full">
      <RouterView v-slot="{ Component, route }">
        <Transition name="view-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </div>

    <!-- Flèche gauche -->
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <button v-if="!isFirst()"
        class="flex items-center gap-2 px-4 py-2.5 bg-[#080610]/75 border border-gold/25 backdrop-blur-md rounded-md hover:border-gold hover:bg-gold/8 transition-all group"
        @click="goPrev">
        <span class="text-xl text-[#9a8f7a] group-hover:text-gold transition-colors leading-none">‹</span>
        <span class="font-cinzel text-[0.72rem] text-[#9a8f7a] group-hover:text-gold transition-colors tracking-wide">
          {{ prevView?.label }}
        </span>
      </button>
    </div>

    <!-- Flèche droite -->
    <div class="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <button v-if="!isLast()"
        class="flex items-center gap-2 px-4 py-2.5 bg-[#080610]/75 border border-gold/25 backdrop-blur-md rounded-md hover:border-gold hover:bg-gold/8 transition-all group"
        @click="goNext">
        <span class="font-cinzel text-[0.72rem] text-[#9a8f7a] group-hover:text-gold transition-colors tracking-wide">
          {{ nextView?.label }}
        </span>
        <span class="text-xl text-[#9a8f7a] group-hover:text-gold transition-colors leading-none">›</span>
      </button>
    </div>

    <!-- Dots -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      <button v-for="(v, i) in VIEWS" :key="v.id" :title="v.label"
        class="w-2 h-2 border border-gold/35 rotate-45 transition-all hover:border-gold/70 hover:bg-gold/20"
        :class="currentIndex() === i ? 'bg-gold border-gold scale-125 shadow-[0_0_10px_rgba(200,160,44,0.6)]' : 'bg-transparent'"
        @click="goTo(i)" />
      <span class="font-mono-rpg text-[0.62rem] text-[#9a8f7a] tracking-widest ml-2">
        {{ currentIndex() + 1 }} / {{ VIEWS.length }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { VIEWS } from '@/data'
import Topbar from '@/components/Topbar.vue'

const router = useRouter()
const route = useRoute()

const currentIndex = () => VIEWS.findIndex(v => v.id === route.name)
const isFirst = () => currentIndex() === 0
const isLast = () => currentIndex() === VIEWS.length - 1

const prevView = computed(() => !isFirst() ? VIEWS[currentIndex() - 1] : null)
const nextView = computed(() => !isLast() ? VIEWS[currentIndex() + 1] : null)

function goTo(idx: number) {
  if (idx < 0 || idx >= VIEWS.length) return
  router.push({ name: VIEWS[idx].id })
}
function goNext() { goTo(currentIndex() + 1) }
function goPrev() { goTo(currentIndex() - 1) }

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style>
.view-fade-enter-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-fade-enter-from,
.view-fade-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(6px);
}
</style>
