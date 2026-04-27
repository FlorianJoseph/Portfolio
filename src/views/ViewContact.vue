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
                <div class="flex flex-col gap-3">
                    <a :href="`mailto:${ABOUT.email}`"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        <Mail :size="14" /> {{ ABOUT.email }}
                    </a>

                    <a :href="ABOUT.linkedin" target="_blank"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a :href="ABOUT.github" target="_blank"
                        class="flex items-center justify-center gap-3 font-mono-rpg text-sm text-[#e8dfc8]/80 border border-gold/20 px-6 py-3 hover:border-gold hover:text-gold transition-all">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                <!-- Disponibilité -->
                <div class="flex items-center justify-center gap-2 mt-6">
                    <span
                        class="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <span class="font-mono-rpg text-[0.7rem] text-green-500 tracking-widest">
                        {{ ABOUT.availability }}
                    </span>
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
import { Mail } from '@lucide/vue'
</script>