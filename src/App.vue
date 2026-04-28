<template>
  <div class="h-screen overflow-hidden ">
    <!-- Background -->
    <div class="stars" />
    <div class="mist">
      <div class="mist-layer" />
      <div class="mist-layer" />
      <div class="mist-layer" />
    </div>
    <CornerRunes />
    <Topbar />

    <!-- Views -->
    <div class="pt-14 h-full flex-1 overflow-hidden">
      <RouterView v-slot="{ Component, route }">
        <Transition name="view-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" class="h-full w-full" />
        </Transition>
      </RouterView>
    </div>

    <!-- Flèche gauche -->
    <div class="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <button v-if="!isFirst"
        class="flex items-center justify-start gap-2 px-4 py-3 min-w-[110px] bg-[#080610]/90 border border-gold/40 backdrop-blur-md rounded-md hover:border-gold hover:bg-gold/10 transition-all group hover:cursor-pointer"
        @click="goPrev">
        <span class="text-2xl text-[#e8dfc8]/90 group-hover:text-gold transition-colors leading-none">
          <ChevronLeft size="20" />
        </span>
        <span
          class="font-cinzel text-xs text-[#e8dfc8]/90 group-hover:text-gold transition-colors tracking-wide uppercase">
          {{ prevView?.label }}
        </span>
      </button>
    </div>

    <!-- Flèche droite -->
    <div class="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <button v-if="!isLast"
        class="flex items-center justify-end gap-2 px-4 py-3 min-w-[110px] bg-[#080610]/90 border border-gold/40 backdrop-blur-md rounded-md hover:border-gold hover:bg-gold/10 transition-all group hover:cursor-pointer"
        @click="goNext">
        <span
          class="font-cinzel text-xs text-[#e8dfc8]/90 group-hover:text-gold transition-colors tracking-wide uppercase">
          {{ nextView?.label }}
        </span>
        <span class="text-2xl text-[#e8dfc8]/90 group-hover:text-gold transition-colors leading-none">
          <ChevronRight size="20" />
        </span>
      </button>
    </div>

    <!-- Dots -->
    <div v-if="isKnownRoute" class="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-2">
      <button v-for="(v, i) in VIEWS" :key="v.id" :title="v.label"
        class="w-2 h-2 border border-gold/35 rotate-45 transition-all hover:border-gold/70 hover:bg-gold/20"
        :class="currentIndex === i ? 'bg-gold border-gold scale-125 shadow-[0_0_10px_rgba(200,160,44,0.6)]' : 'bg-transparent'"
        @click="goTo(i)" />
      <span class="font-mono-rpg text-[0.62rem] text-[#e8dfc8]/60 tracking-widest ml-2">
        {{ currentIndex + 1 }} / {{ VIEWS.length }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { VIEWS } from '@/data'
import Topbar from '@/components/Topbar.vue'
import CornerRunes from '@/components/CornerRunes.vue'
import { ChevronRight, ChevronLeft } from '@lucide/vue'

const router = useRouter()
const route = useRoute()

const currentIndex = computed(() => VIEWS.findIndex(v => v.id === route.name))
const isKnownRoute = computed(() => currentIndex.value !== -1)
const isFirst = computed(() => !isKnownRoute.value || currentIndex.value === 0)
const isLast = computed(() => !isKnownRoute.value || currentIndex.value === VIEWS.length - 1)

const prevView = computed(() => !isFirst.value ? VIEWS[currentIndex.value - 1] : null)
const nextView = computed(() => !isLast.value ? VIEWS[currentIndex.value + 1] : null)

function goTo(idx: number) {
  if (idx < 0 || idx >= VIEWS.length) return
  router.push({ name: VIEWS[idx].id })
}
function goNext() { goTo(currentIndex.value + 1) }
function goPrev() { goTo(currentIndex.value - 1) }

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
}

let touchStartX = 0
function onTouchStart(e: TouchEvent) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e: TouchEvent) {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('touchstart', onTouchStart)
  window.addEventListener('touchend', onTouchEnd)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchend', onTouchEnd)
})
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
