export function VISIO(holo) {
    return {
        render: holo % 360,
        color: holo > 50 ? "green" : "yellow"
    };
}
