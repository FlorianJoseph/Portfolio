export const VIEWS = [
    { id: 'about', label: 'About', icon: '⚔', zone: 'Salle des Attributs', sub: 'Statistiques du personnage' },
    { id: 'skills', label: 'Skills', icon: '🔮', zone: 'Grimoire des Sorts', sub: 'Arsenal de compétences' },
    { id: 'projects', label: 'Projects', icon: '📜', zone: 'Journal de Quêtes', sub: 'Projets & Exploits' },
    { id: 'experience', label: 'Experience', icon: '🗺', zone: 'Chroniques du Royaume', sub: 'Parcours professionnel' },
    { id: 'contact', label: 'Contact', icon: '✉', zone: 'Taverne du Bout du Monde', sub: 'Parlons de ton project' },
] as const

export type View = typeof VIEWS[number]