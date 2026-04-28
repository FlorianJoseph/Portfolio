<template>
  <div class="h-full flex items-start md:items-center justify-center px-6 overflow-y-auto py-8 pb-20 md:pb-0">
    <div class="max-w-[860px] w-full">

      <!-- Header -->
      <div class="mb-10 pb-4 border-b border-gold/20">
        <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Skills</h2>
        <p class="font-fell italic text-[#e8dfc8]/50 text-sm mt-1">Technologies maîtrisées</p>
      </div>

      <!-- Grille -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="group in SKILLS" :key="group.category">
          <h3 :class="group.headerClass" class="font-cinzel text-xs tracking-[0.2em] uppercase mb-4 pb-2 border-b">
            {{ group.category }}
          </h3>
          <div class="flex flex-col gap-2">
            <div v-for="item in group.items" :key="item"
              :class="group.itemClass"
              class="px-4 py-2.5 border font-cinzel text-sm text-[#e8dfc8]/75 tracking-wide transition-colors">
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