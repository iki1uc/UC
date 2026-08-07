// VISIO_AMIGA.js – Amiga Move Scene Engine

export function VISIO_AMIGA(canvas, CONTINIUM) {

    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    const hue = CONTINIUM % 360;

    // Hintergrund
    ctx.fillStyle = `hsl(${hue}, 80%, 15%)`;
    ctx.fillRect(0, 0, w, h);

    // Rasterbars
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = `hsl(${(hue + i*30) % 360}, 80%, 50%)`;
        ctx.fillRect(0, i * 25 + (CONTINIUM % 25), w, 12);
    }

    // Plasma
    for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 4) {
            const v = Math.sin(x/20 + CONTINIUM/10) + Math.cos(y/20 + CONTINIUM/15);
            const c = (v + 2) * 60;
            ctx.fillStyle = `hsl(${c}, 80%, 50%)`;
            ctx.fillRect(x, y, 4, 4);
        }
    }
}
