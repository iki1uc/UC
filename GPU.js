export function GPU(score, wetten) {
    return {
        movement: score - wetten,
        energy: (score - wetten) * 2
    };
}
