<template>
  <div class="h-full flex items-center justify-center px-6">
    <div class="max-w-[860px] w-full">

      <!-- Header -->
      <div class="mb-10 pb-4 border-b border-gold/20">
        <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Skills</h2>
        <p class="font-fell italic text-[#e8dfc8]/50 text-sm mt-1">Technologies maîtrisées</p>
      </div>

      <!-- Grille -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="group in SKILLS" :key="group.category">
          <h3 class="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-4">
            {{ group.category }}
          </h3>
          <div class="flex flex-col gap-2">
            <div v-for="item in group.items" :key="item"
              class="px-4 py-2.5 border border-gold/25 font-cinzel text-sm text-[#e8dfc8]/85 tracking-wide hover:border-gold/50 hover:text-[#e8dfc8] transition-colors">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { SKILLS } from '@/data'
</script>