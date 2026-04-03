"use client";

import { useEffect, useRef } from "react";

// ─── tunables ────────────────────────────────────────────────────────────────
const NODE_COUNT = 72;
const CONNECTION_DIST = 220;   // px – max distance to draw an edge
const NODE_SPEED = 0.18;       // base drift speed
const PULSE_INTERVAL = 3200;   // ms between signal pulses
const PULSE_SPEED = 1.8;       // px per frame along edge

// palette – dark luxury / Web3 education
const BG_TOP = "#050a14";
const BG_BOTTOM = "#0a0f1e";
const NODE_COLORS = [
    "rgba(6,182,212,",   // cyan-500
    "rgba(99,102,241,",  // indigo-500
    "rgba(139,92,246,",  // violet-500
    "rgba(34,211,238,",  // cyan-400
];
const EDGE_COLOR = "rgba(99,182,212,";  // soft cyan edge
// ─────────────────────────────────────────────────────────────────────────────

type Node = {
    x: number; y: number;
    vx: number; vy: number;
    r: number;           // radius
    colorIdx: number;
    opacity: number;
    pulsePhase: number;  // 0-2π, drives the breathing glow
};

type Pulse = {
    fromIdx: number;
    toIdx: number;
    t: number;           // 0→1 progress along edge
};

function initNodes(w: number, h: number): Node[] {
    return Array.from({ length: NODE_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = NODE_SPEED * (0.4 + Math.random() * 0.6);
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            r: 1.5 + Math.random() * 2.5,
            colorIdx: Math.floor(Math.random() * NODE_COLORS.length),
            opacity: 0.5 + Math.random() * 0.5,
            pulsePhase: Math.random() * Math.PI * 2,
        };
    });
}

export function NetworkCanvas({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let nodes: Node[] = [];
        const pulses: Pulse[] = [];
        let lastPulse = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            nodes = initNodes(canvas.width, canvas.height);
        };
        resize();
        window.addEventListener("resize", resize);

        // ── draw background gradient ──────────────────────────────────────────
        const drawBg = () => {
            const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grad.addColorStop(0, BG_TOP);
            grad.addColorStop(1, BG_BOTTOM);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        // ── draw a single node with breathing glow ────────────────────────────
        const drawNode = (n: Node, t: number) => {
            const breathe = 0.7 + 0.3 * Math.sin(n.pulsePhase + t * 0.0008);
            const alpha = n.opacity * breathe;
            const color = NODE_COLORS[n.colorIdx];

            // outer halo
            const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
            halo.addColorStop(0, `${color}${(alpha * 0.35).toFixed(3)})`);
            halo.addColorStop(1, `${color}0)`);
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
            ctx.fillStyle = halo;
            ctx.fill();

            // core dot
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r * breathe, 0, Math.PI * 2);
            ctx.fillStyle = `${color}${alpha.toFixed(3)})`;
            ctx.fill();
        };

        // ── draw edges between nearby nodes ──────────────────────────────────
        const drawEdges = () => {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > CONNECTION_DIST) continue;

                    const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `${EDGE_COLOR}${alpha.toFixed(3)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        };

        // ── draw travelling signal pulses ─────────────────────────────────────
        const drawPulses = () => {
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                const from = nodes[p.fromIdx];
                const to = nodes[p.toIdx];
                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > CONNECTION_DIST) { pulses.splice(i, 1); continue; }

                p.t += PULSE_SPEED / dist;
                if (p.t >= 1) { pulses.splice(i, 1); continue; }

                const px = from.x + dx * p.t;
                const py = from.y + dy * p.t;

                const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
                grd.addColorStop(0, "rgba(34,211,238,0.9)");
                grd.addColorStop(1, "rgba(34,211,238,0)");
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();
            }
        };

        // ── spawn a new pulse on a random connected edge ──────────────────────
        const spawnPulse = () => {
            const candidates: [number, number][] = [];
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DIST) {
                        candidates.push([i, j]);
                    }
                }
            }
            if (candidates.length === 0) return;
            const [a, b] = candidates[Math.floor(Math.random() * candidates.length)];
            pulses.push({ fromIdx: a, toIdx: b, t: 0 });
        };

        // ── main loop ─────────────────────────────────────────────────────────
        let lastTime = 0;
        const tick = (time: number) => {
            animId = requestAnimationFrame(tick);
            const dt = time - lastTime;
            lastTime = time;

            // pulse timer
            if (time - lastPulse > PULSE_INTERVAL) {
                spawnPulse();
                lastPulse = time;
            }

            // move nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                n.pulsePhase += 0.004;
                // soft wrap
                if (n.x < -20) n.x = canvas.width + 20;
                if (n.x > canvas.width + 20) n.x = -20;
                if (n.y < -20) n.y = canvas.height + 20;
                if (n.y > canvas.height + 20) n.y = -20;
            }

            drawBg();
            drawEdges();
            drawPulses();
            for (const n of nodes) drawNode(n, time);

            void dt; // suppress unused warning
        };

        animId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={className}
        />
    );
}
