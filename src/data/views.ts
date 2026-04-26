export const VIEWS = [
    { id: 'about', label: 'À propos', icon: '⚔', zone: 'Salle des Attributs', sub: 'Statistiques du personnage' },
    { id: 'skills', label: 'Compétences', icon: '🔮', zone: 'Grimoire des Sorts', sub: 'Arsenal de compétences' },
    { id: 'projects', label: 'Projets', icon: '📜', zone: 'Journal de Quêtes', sub: 'Projets & Exploits' },
    { id: 'experience', label: 'Expérience', icon: '🗺', zone: 'Chroniques du Royaume', sub: 'Parcours professionnel' },
    { id: 'contact', label: 'Contact', icon: '✉', zone: 'Taverne du Bout du Monde', sub: 'Parlons de ton project' },
] as const

export type View = typeof VIEWS[number]