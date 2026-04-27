<template>
    <div class="h-full flex items-center justify-center px-6 overflow-y-auto py-8">
        <div class="max-w-[860px] w-full">

            <!-- Header -->
            <div class="mb-10 pb-4 border-b border-gold/20">
                <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Projets</h2>
                <p class="font-fell italic text-[#9a8f7a] text-sm mt-1">Réalisations & exploits</p>
            </div>

            <!-- Liste -->
            <div class="flex flex-col gap-4">
                <div v-for="p in PROJECTS" :key="p.name"
                    class="border border-gold/20 p-6 hover:border-gold/50 transition-all group">
                    <!-- Top -->
                    <div class="flex items-start justify-between gap-4 mb-3">
                        <div>
                            <h3
                                class="font-cinzel text-lg font-bold text-[#e8dfc8] group-hover:text-gold transition-colors">
                                {{ p.name }}
                            </h3>
                            <span class="font-mono-rpg text-[0.62rem] tracking-widest uppercase text-gold/60">
                                {{ p.status }}
                            </span>
                        </div>

                        <a v-if="p.url" :href="p.url" target="_blank" class="font-cinzel text-[0.65rem] tracking-wider uppercase text-gold border border-gold/30 px-3
                        py-1 hover:bg-gold/10 transition-all whitespace-nowrap">
                            Voir le projet →
                        </a>
                    </div>

                    <!-- Description -->
                    <p class="text-[#9a8f7a] text-sm leading-relaxed mb-4">
                        {{ p.description }}
                    </p>

                    <!-- Stats -->
                    <p v-if="p.stats" class="font-mono-rpg text-[0.65rem] text-gold/70 tracking-wider mb-4">
                        {{ p.stats }}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in p.tags" :key="tag"
                            class="font-mono-rpg text-[0.62rem] text-[#9a8f7a] border border-gold/15 px-2 py-0.5 tracking-wide">
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
</script>