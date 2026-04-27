<template>
    <div class="h-full flex items-center justify-center px-8">
        <div class="max-w-[540px] w-full text-center">

            <!-- Header -->
            <div class="mb-10 pb-4 border-b border-gold/20">
                <h2 class="font-cinzel text-2xl font-bold text-gold tracking-wider">Contact</h2>
                <p class="font-fell italic text-[#9a8f7a] text-sm mt-1">Parlons de votre projet</p>
            </div>

            <!-- Parchemin -->
            <div class="border border-gold/20 p-8 mb-8 relative">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080610] px-3 text-gold text-lg">❧</div>
                <p class="text-[#9a8f7a] leading-relaxed mb-6 font-fell italic">
                    Disponible pour des missions freelance, des collaborations ou tout simplement échanger autour d'un
                    projet.
                </p>
                <div class="flex flex-col gap-3">
                    <a :href="`mailto:${ABOUT.email}`"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        ✉ {{ ABOUT.email }}
                    </a>
                    <a :href="ABOUT.linkedin" target="_blank"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        ◈ LinkedIn
                    </a>
                    <a :href="ABOUT.github" target="_blank"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        ⌥ GitHub
                    </a>
                </div>

                <!-- Disponibilité -->
                <div class="flex items-center justify-center gap-2 mt-6">
                    <span
                        class="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <span class="font-mono-rpg text-[0.7rem] text-green-500 tracking-widest">Disponible pour
                        missions</span>
                </div>
            </div>

            <!-- CTA -->
            <a :href="`mailto:${ABOUT.email}`"
                class="inline-block font-cinzel text-xs font-bold tracking-wider uppercase px-8 py-3 bg-purple-700 text-white hover:bg-purple-600 transition-all [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]">
                M'écrire maintenant
            </a>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ABOUT } from '@/data'
</script>