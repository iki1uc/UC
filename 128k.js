export function CHIP128(QI, IQQ) {
    const REG = new Array(128).fill(0);

    for (let i = 0; i < 64; i++) REG[i] = QI;
    for (let i = 64; i < 128; i++) REG[i] = IQQ;

    return {
        REG,
        BOOST: (QI + IQQ) * 1.2
    };
}
