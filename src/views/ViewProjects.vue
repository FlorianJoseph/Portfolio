<template>
    <div class="h-full flex items-start md:items-center justify-center px-6 overflow-y-auto py-8">
        <div class="max-w-[860px] w-full">

            <!-- Header -->
            <div class="mb-10 pb-4 border-b border-gold/20">
                <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Projets</h2>
                <p class="font-fell italic text-[#e8dfc8]/50 text-sm mt-1">Réalisations & exploits</p>
            </div>

            <!-- Liste -->
            <div class="flex flex-col gap-4">
                <div v-for="p in PROJECTS" :key="p.name"
                    class="border border-gold/20 p-6 transition-all group">
                    <!-- Top -->
                    <div class="flex items-start justify-between gap-4 mb-3 flex-wrap">
                        <div>
                            <div class="flex items-center gap-3">
                                <img v-if="p.logo" :src="p.logo" :alt="p.name" class="w-8 h-8 object-contain rounded" />
                                <h3 class="font-cinzel text-lg font-bold text-[#e8dfc8]">{{ p.name }}</h3>
                            </div>
                            <div class="flex items-center gap-3 mt-1">
                                <span
                                    class="font-mono-rpg text-[0.62rem] tracking-widest uppercase text-gold font-bold">{{
                                        p.status }}</span>
                                <span v-if="p.stats" class="font-mono-rpg text-[0.62rem] text-gold/70 tracking-wider">{{
                                    p.stats }}</span>
                            </div>
                        </div>

                        <a v-if="p.url" :href="p.url" target="_blank"
                            class="flex-shrink-0 flex sm:flex-none items-center gap-2 font-cinzel text-xs font-semibold tracking-wider uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 hover:border-gold whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start">
                            Voir le projet
                            <ArrowRight :size="13" />
                        </a>
                    </div>

                    <!-- Description -->
                    <p class="text-[#e8dfc8]/65 text-sm leading-relaxed mb-4">
                        {{ p.description }}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in p.tags" :key="tag"
                            class="font-mono-rpg text-xs text-[#e8dfc8]/60 border border-gold/20 px-2 py-1 tracking-wide">
                            {{ tag }}
                        </span>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { PROJECTS } from '@/data'
import { ArrowRight } from '@lucide/vue';
</script>