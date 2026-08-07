// AIE.js – Drei‑Zeichen‑Deutung (Aware / Interpret / Execute)
// Kompatibel mit: UC_RESPO, FTG.js, HOLO.build, TMP.respo.js

export function AIE(narrativ, evo, score, wetten) {

    // 1. QI – Gegenwartsintelligenz (xWas)
    const QI = narrativ;

    // 2. IQQ – Qualitätsquadrant (xWie)
    const IQQ = QI * 2;

    // 3. MIND – Erlebnisintelligenz (xWarum)
    const MIND = QI * evo;

    // 4. AIE-Fusion
    const A = QI;       // Aware
    const I = IQQ;      // Interpret
    const E = MIND;     // Execute

    const AIE = A + I + E;

    // 5. Score-Deutung (Vergangenheit)
    const AIE_Score = A + I + (E * score);

    // 6. Wette-Deutung (Zukunft)
    const AIE_Wette = A + (I * wetten) + E;

    // 7. Ergebnis-Deutung (Vergangenheit + Zukunft + Gegenwart)
    const AIE_Ergebnis = AIE_Score + AIE_Wette;

    // 8. Slide-Deutung (Mittelwert Score/Wette)
    const slide = (score + wetten) / 2;
    const AIE_Slide = A + (I * slide) + (E * 0.5);

    return {
        QI,            // Gegenwart
        IQQ,           // Qualität
        MIND,          // Erlebnis
        AIE,           // Gesamtwert
        AIE_Score,     // Score-Deutung
        AIE_Wette,     // Wette-Deutung
        AIE_Ergebnis,  // Ergebnis-Deutung
        AIE_Slide      // Slide-Deutung
    };
}
