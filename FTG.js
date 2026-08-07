// FTG.js – Fortgang / Bewegung / 6e-Vektor

import { TMP } from "./TMP.respo.js"; 
import { UC_RESPO } from "./fusion.js"; 

export function FTG(sys, tem, iki, nuller, qi) {

    // 1. TMP-Marker (Zentrum, Neutralität, keine Personenbindung)
    const tmpMarker = {
        origin: TMP.center,
        freq: TMP.freq,
        axis: TMP.axis,
        neutral: nuller
    };

    // 2. UC-RESPO erzeugen (Score, Wetten, Slide, QI/IQQ/MIND)
    const uc_respo = UC_RESPO(sys, tem, iki, nuller, null, qi);

    // 3. Bewegung (Delta-Werte)
    const V = {
        deltaScore: uc_respo.score - TMP.last.score,
        deltaWetten: uc_respo.wetten - TMP.last.wetten,
        deltaNarrativ: qi - TMP.last.qi,
        deltaAchsen: TMP.axis.length - TMP.last.axis.length,
        deltaNeutral: nuller - TMP.last.neutral
    };

    // 4. Gesamtbewegung (Fortgang)
    const movement = 
        V.deltaScore +
        V.deltaWetten +
        V.deltaNarrativ +
        V.deltaAchsen +
        V.deltaNeutral;

    // 5. Energieverbrauch (Bewegung * Zeit)
    const energy = movement * tem.time;

    // 6. Ergebnisqualität (Narrativ * Neutralität)
    const quality = qi * nuller;

    // 7. 6e-Hologrammwert
    const sixE = {
        score: uc_respo.score,
        wetten: uc_respo.wetten,
        narrativ: qi,
        achsen: TMP.axis,
        vektor: movement,
        neutral: nuller,
        hologramm: uc_respo.score + uc_respo.wetten + qi + movement + nuller,
        dimension: "6e"
    };

    // 8. TMP-Übernahme (neue Werte speichern)
    TMP.last = {
        score: uc_respo.score,
        wetten: uc_respo.wetten,
        qi: qi,
        axis: TMP.axis,
        neutral: nuller
    };

    return {
        tmpMarker,
        vektor: V,
        movement,
        energy,
        quality,
        sixE
    };
}
