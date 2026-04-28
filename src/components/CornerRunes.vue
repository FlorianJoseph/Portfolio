<template>
    <div class="corner-runes">
        <svg v-for="pos in ['tl', 'tr', 'bl', 'br']" :key="pos" :class="`corner-rune ${pos}`"
            class="w-6 h-6 md:w-11 md:h-11" viewBox="0 0 44 44" fill="none">
            <path d="M0,32 L0,0 L32,0 M8,24 L8,8 L24,8 M4,28 L4,4 L28,4" stroke="#c8a02c" stroke-width="1.5"
                stroke-linecap="square" />
        </svg>
    </div>
</template>