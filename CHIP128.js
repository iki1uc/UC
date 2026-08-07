// CHIP128.js – 128k QI/IQQ/MIND Chip

export function CHIP128(QI, IQQ, MIND) {

    // 128k Register
    const REG = new Array(128).fill(0);

    // QI → Register 0–31
    for (let i = 0; i < 32; i++) REG[i] = QI;

    // IQQ → Register 32–63
    for (let i = 32; i < 64; i++) REG[i] = IQQ;

    // MIND → Register 64–95
    for (let i = 64; i < 96; i++) REG[i] = MIND;

    // Booster → Register 96–127
    for (let i = 96; i < 128; i++) REG[i] = (QI + IQQ + MIND) * 1.5;

    return {
        REG,
        QI,
        IQQ,
        MIND,
        BOOST: REG[120]
    };
}
