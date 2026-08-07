import { UC_KERNEL } from "./UC.kernel.js";

export function RESPO_UC(sys, tem, iki) {
    const uc = UC_KERNEL(sys, tem, iki);

    return {
        axis: ["SYS", "TEM", "IKI", "UC"],
        score: uc.UC.score,
        evo: uc.UC.evo,
        wetten: uc.UC.wetten,
        bind: uc.UC.bind
    };
}
