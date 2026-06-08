<template>
    <div class="h-full flex items-start md:items-center justify-center px-6 overflow-y-auto py-8 pb-20 md:pb-0">
        <div class="max-w-[870px] w-full">

            <!-- Header -->
            <div class="mb-10 pb-4 border-b border-gold/20">
                <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Projets</h2>
            </div>

            <!-- Liste -->
            <div class="flex flex-col gap-4">
                <div v-for="p in PROJECTS" :key="p.name" class="border border-gold/20 p-6 transition-all group">
                    <!-- Top -->
                    <div class="flex items-start justify-between gap-4 mb-3 flex-wrap">
                        <div>
                            <div class="flex items-center gap-3">
                                <img v-if="p.logo" :src="p.logo" :alt="p.name" class="w-10 h-10 object-contain rounded" />
                                <h3 class="font-cinzel text-2xl font-bold text-[#e8dfc8]">{{ p.name }}</h3>
                            </div>
                            <div class="flex items-center gap-3 mt-1">
                                <span
                                    class="font-mono-rpg text-xs tracking-widest uppercase text-gold font-bold whitespace-nowrap">{{
                                        p.status }}</span>
                                <span v-if="p.stats" class="font-mono-rpg text-xs text-gold/70 tracking-wider whitespace-nowrap">{{
                                    p.stats }}</span>
                            </div>
                        </div>

                        <a v-if="p.url" :href="p.url" target="_blank"
                            class="flex-shrink-0 flex sm:flex-none items-center gap-2 font-cinzel text-sm font-semibold tracking-wider uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 hover:border-gold whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start">
                            Voir le projet
                            <ArrowRight :size="13" />
                        </a>
                    </div>

                    <!-- Description -->
                    <p class="text-[#e8dfc8]/75 leading-relaxed mb-4 text-sm sm:text-base">
                        {{ p.description }}
                    </p>

                    <!-- Highlights -->
                    <ul v-if="p.highlights?.length" class="flex flex-col gap-2 mb-5">
                        <li v-for="h in p.highlights" :key="h" class="flex items-start gap-3 text-[#e8dfc8]/70 text-sm sm:text-base">
                            <span class="text-gold/50 mt-[3px] shrink-0 font-cinzel">✦</span>
                            <span class="leading-relaxed">{{ h }}</span>
                        </li>
                    </ul>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in p.tags" :key="tag"
                            class="font-mono-rpg text-sm text-[#e8dfc8]/65 border border-gold/20 px-2 py-1 tracking-wide">
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