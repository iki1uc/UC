export function RESPO_INVERT(respo) {

    // Original RESPO wird neutralisiert
    const inverted = {
        axis: null,
        resonance: 0,
        score: 0,
        wetten: 0,
        evo: 0,
        rotation: "still",
        state: "neutral",
        bind: true
    };

    // UC entsteht aus invertiertem RESPO
    const UC = {
        active: true,
        bind: true,
        origin: "RESPO^-1",
        fusion: {
            SYS: respo.SYS || null,
            TEM: respo.TEM || null,
            ID: respo.ID || null,
            OP: respo.OP || null,
            IKI: respo.IKI || null
        }
    };

    return { inverted, UC };
}
