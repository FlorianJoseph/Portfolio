<template>
    <div class="h-full flex items-center justify-center px-6">
        <div class="max-w-[540px] w-full text-center">
            <p class="font-mono-rpg text-6xl text-gold/30 mb-6 tracking-widest">404</p>
            <h2 class="font-cinzel-deco text-xl font-bold text-[#e8dfc8] mb-3">Chemin inconnu</h2>
            <p class="font-fell italic text-[#e8dfc8]/50 text-sm mb-10">
                Cette page n'existe pas.
            </p>
            <RouterLink to="/"
                class="inline-block font-cinzel text-xs font-bold tracking-wider uppercase px-8 py-3 bg-purple-700 text-white hover:bg-purple-600 transition-all [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]">
                Retour à l'accueil
            </RouterLink>
        </div>
    </div>
</template>
