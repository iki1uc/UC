// CHANNEL.js – Systemkanäle

export function CHANNEL(ftg, holo) {

    return {
        TRANS: ftg.movement * 0.8,
        WARB:  holo.hologramm * 0.6,
        KANAL: ftg.energy * 0.9,
        HY:    holo.neutral * 1.2,
        PE:    ftg.quality * 1.1,
        PER:   holo.narrativ * 1.3
    };
}
