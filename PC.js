import { ROM } from "./ROM.js";
import { RAM } from "./RAM.js";
import { CPU } from "./CPU.js";
import { GPU } from "./GPU.js";
import { CACHE } from "./CACHE.js";
import { VISIO } from "./VISIO.js";
import { MANA } from "./MANA.js";
import { CHIP128 } from "./CHIP128.js";

export function PC(sys, tem, iki, narrativ) {

    const ram = RAM(sys, tem, iki);
    const cpu = CPU(ram.score, ram.wetten, narrativ, ROM.neutral);
    const gpu = GPU(ram.score, ram.wetten);
    const cache = CACHE(narrativ);
    const visio = VISIO(cpu.holo);
    const mana = MANA(sys.value, tem.value, narrativ);
    const chip = CHIP128(narrativ, narrativ * 2);

    return {
        rom: ROM,
        ram,
        cpu,
        gpu,
        cache,
        visio,
        mana,
        chip
    };
}
