// MANA.js – Mana Sortierung

export function MANA(AU, RA, HYPNOSE) {

    const mana = {
        AU,            // Auftrieb
        RA,            // Raum
        HYPNOSE,       // Hypnose-Mana
        LEVEL: AU + RA + HYPNOSE,
        SORT: AU > RA ? "AU-Dominant" : "RA-Dominant"
    };

    return mana;
}
