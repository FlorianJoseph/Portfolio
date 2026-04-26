<template>
    <div class="h-full flex items-center justify-center">
        <div class="grid grid-cols-[260px_1fr] gap-12 items-center max-w-[860px] w-full px-8">

            <!-- Portrait -->
            <div class="sp relative">
                <div
                    class="relative aspect-square border-2 border-gold bg-gradient-to-br from-[#1a0e30] to-[#0a1220] flex items-center justify-center overflow-hidden">
                    <div
                        class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(124,58,237,0.2),transparent_65%)]" />
                    <img src="@/assets/images/portrait.jpg" alt="Florian Joseph" class="w-full h-full object-cover" />
                </div>
                <div
                    class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#080610] border border-gold px-4 py-1 font-mono text-xs text-gold tracking-widest whitespace-nowrap">
                    {{ ABOUT.aboutClass.toUpperCase() }}
                </div>
            </div>

            <!-- Contenu -->
            <div class="flex flex-col gap-4">
                <h1 class="s1 font-cinzel-deco font-bold leading-tight text-[#e8dfc8]"
                    style="font-size: clamp(1.6rem, 4vw, 2.8rem)">
                    {{ ABOUT.name }}<br />
                    <span class="text-gold">{{ ABOUT.title }}</span>
                </h1>
                <p class="s2 font-cinzel text-sm tracking-[0.22em] uppercase text-purple-400">
                    ✦
                    <TypedText :text="`${ABOUT.aboutClass} · Niveau ${ABOUT.level}`" /> ✦
                </p>
                <p class="s3 italic text-[#9a8f7a] leading-relaxed border-l-2 border-gold/25 pl-4">
                    {{ ABOUT.bio }}
                </p>
                <div class="s4 flex gap-4 flex-wrap">
                    <RouterLink to="/projects"
                        class="font-cinzel text-xs font-semibold tracking-widest uppercase px-6 py-3 bg-gradient-to-r from-purple-700 to-yellow-600 text-white [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]">
                        Voir mes projects
                    </RouterLink>
                    <RouterLink to="/contact"
                        class="font-cinzel text-xs font-semibold tracking-widest uppercase px-6 py-3 text-gold border border-gold [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]">
                        Me contacter
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ABOUT } from '@/data'
import TypedText from '@/components/TypedText.vue'
</script>

<style scoped>
@keyframes about-rise {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes about-fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.s1 {
    opacity: 0;
    animation: about-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
}

.s2 {
    opacity: 0;
    animation: about-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.22s forwards;
}

.s3 {
    opacity: 0;
    animation: about-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.38s forwards;
}

.s4 {
    opacity: 0;
    animation: about-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.54s forwards;
}

.sp {
    opacity: 0;
    animation: about-fade 0.8s ease forwards;
}
</style>