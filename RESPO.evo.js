export function RESPO_EVO(UC) {

    return {
        axis: ["UC", "SYS", "TEM", "IKI"],
        resonance: 1,
        score: Math.round((UC.fusion.SYS.value +
                           UC.fusion.TEM.time +
                           UC.fusion.IKI.core) / 3),
        wetten: (UC.fusion.SYS.value * UC.fusion.TEM.time) % UC.fusion.IKI.core,
        evo: UC.active ? 1 : 0,
        rotation: "360°",
        state: "EVO"
    };
}
