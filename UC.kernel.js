export function UC_KERNEL(sys, tem, iki) {

    return {
        SYS: sys,
        TEM: tem,
        IKI: iki,
        UC: {
            bind: true,
            score: (sys.value + tem.value + iki.value) / 3,
            evo: Math.round((sys.flow + tem.time + iki.core) * 1.3),
            wetten: (sys.value * tem.time) % iki.core
        }
    };
}
