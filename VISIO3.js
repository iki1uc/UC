export function VISIO3(canvas, CONTINIUM, ftg, mana, chip) {

    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    // Hintergrund
    const hue = CONTINIUM % 360;
    ctx.fillStyle = `hsl(${hue}, 80%, 15%)`;
    ctx.fillRect(0, 0, w, h);

    // Rasterbars
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = `hsl(${(hue + i*30) % 360}, 80%, 50%)`;
        ctx.fillRect(0, i * 25 + (ftg.movement % 25), w, 12);
    }

    // Plasma
    for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 4) {
            const v = Math.sin(x/20 + CONTINIUM/10) + Math.cos(y/20 + ftg.energy/10);
            const c = (v + 2) * 60;
            ctx.fillStyle = `hsl(${c}, 80%, 50%)`;
            ctx.fillRect(x, y, 4, 4);
        }
    }

    // Mana-Kreis
    ctx.beginPath();
    ctx.arc(w/2, h/2, mana.level * 3, 0, Math.PI * 2);
    ctx.strokeStyle = `hsl(${hue}, 100%, 70%)`;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Chip-Pixel-Boost
    ctx.fillStyle = `hsl(${hue}, 100%, 90%)`;
    ctx.fillRect((chip.BOOST % w), (chip.BOOST % h), 10, 10);
}
