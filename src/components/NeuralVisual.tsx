import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  layer: number;
  label?: string;
  radius: number;
  pulseOffset: number;
}

interface Pulse {
  source: Node;
  target: Node;
  progress: number;
  speed: number;
}

export const NeuralVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    let nodes: Node[] = [];
    let connections: [Node, Node][] = [];
    let pulses: Pulse[] = [];

    const layerConfigs = [
      { count: 4, label: 'Input [X]', xRatio: 0.16 },
      { count: 6, label: 'Hidden [H₁]', xRatio: 0.44 },
      { count: 5, label: 'Hidden [H₂]', xRatio: 0.68 },
      { count: 3, label: 'Output [Ŷ]', xRatio: 0.88 },
    ];

    const initNodes = () => {
      nodes = [];
      connections = [];
      pulses = [];

      const layerNodes: Node[][] = [];

      layerConfigs.forEach((layer, layerIdx) => {
        const currentLayerNodes: Node[] = [];
        const x = width * layer.xRatio;
        const totalHeight = height * 0.76;
        const startY = (height - totalHeight) / 2;
        const stepY = totalHeight / (layer.count - 1 || 1);

        for (let i = 0; i < layer.count; i++) {
          const y = startY + i * stepY;
          const node: Node = {
            x,
            y,
            baseX: x,
            baseY: y,
            layer: layerIdx,
            radius: layerIdx === 0 || layerIdx === 3 ? 4.5 : 3.5,
            pulseOffset: Math.random() * Math.PI * 2,
          };
          nodes.push(node);
          currentLayerNodes.push(node);
        }
        layerNodes.push(currentLayerNodes);
      });

      // Connect adjacent layers (and selective skip connections)
      for (let l = 0; l < layerNodes.length - 1; l++) {
        const fromLayer = layerNodes[l];
        const toLayer = layerNodes[l + 1];

        fromLayer.forEach((source) => {
          toLayer.forEach((target) => {
            // Probabilistic dense-ish connection
            if (Math.random() > 0.15) {
              connections.push([source, target]);
            }
          });
        });
      }

      // Initial pulses
      if (!prefersReducedMotion) {
        for (let i = 0; i < 8; i++) {
          const randConn = connections[Math.floor(Math.random() * connections.length)];
          if (randConn) {
            pulses.push({
              source: randConn[0],
              target: randConn[1],
              progress: Math.random(),
              speed: 0.006 + Math.random() * 0.008,
            });
          }
        }
      }
    };

    resize();
    const observer = new ResizeObserver(() => resize());
    observer.observe(container);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isLightMode = document.documentElement.classList.contains('light');

      // Draw subtle background grid
      ctx.strokeStyle = isLightMode ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Dynamic Node Floating & Mouse Interaction
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          const floatX = Math.cos(time + node.pulseOffset) * 2;
          const floatY = Math.sin(time + node.pulseOffset * 1.5) * 3;
          node.x = node.baseX + floatX;
          node.y = node.baseY + floatY;

          if (mousePos.current.active) {
            const dx = mousePos.current.x - node.x;
            const dy = mousePos.current.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              const force = (1 - dist / 100) * 8;
              node.x += (dx / dist) * force;
              node.y += (dy / dist) * force;
            }
          }
        }
      });

      // Draw Synapses (Edges)
      connections.forEach(([source, target]) => {
        const isHoveredLayer =
          activeLayer !== null && (source.layer === activeLayer || target.layer === activeLayer);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);

        if (isHoveredLayer) {
          ctx.strokeStyle = isLightMode ? 'rgba(2, 132, 199, 0.75)' : 'rgba(6, 182, 212, 0.45)';
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = isLightMode ? 'rgba(100, 116, 139, 0.28)' : 'rgba(148, 163, 184, 0.12)';
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Draw Synaptic Pulses
      if (!prefersReducedMotion) {
        pulses.forEach((pulse, idx) => {
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulse.progress = 0;
            const randConn = connections[Math.floor(Math.random() * connections.length)];
            if (randConn) {
              pulse.source = randConn[0];
              pulse.target = randConn[1];
            }
          }

          const px = pulse.source.x + (pulse.target.x - pulse.source.x) * pulse.progress;
          const py = pulse.source.y + (pulse.target.y - pulse.source.y) * pulse.progress;

          const gradient = ctx.createRadialGradient(px, py, 0, px, py, 5);
          gradient.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw Nodes
      nodes.forEach((node) => {
        const isActive = activeLayer === null || activeLayer === node.layer;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        if (node.layer === 0) {
          ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
        } else if (node.layer === 3) {
          ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
        } else {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
        }
        ctx.fill();

        // Core Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        if (node.layer === 0) {
          ctx.fillStyle = isActive ? '#38bdf8' : '#0284c7';
        } else if (node.layer === 3) {
          ctx.fillStyle = isActive ? '#c084fc' : '#9333ea';
        } else {
          ctx.fillStyle = isActive ? '#60a5fa' : '#2563eb';
        }
        ctx.fill();

        // Node border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeLayer]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl bg-gradient-to-b from-[#0c1322] via-[#090d18] to-[#06080d] border border-cyan-500/15 p-4 overflow-hidden shadow-2xl shadow-cyan-950/20"
      aria-label="Interactive Neural Network Visualization representing AI and Machine Learning architecture"
    >
      {/* Top subtle technical bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/[0.06] pb-2 z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>NEURAL TOPOLOGY // FEEDFORWARD</span>
        </div>
        <div className="text-slate-500 hidden sm:block">
          EPOCH: SYNCED · OPTIMIZER: ADAM
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Layer legend / controls at bottom */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10 pt-2 border-t border-white/[0.06] text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-[11px] font-mono text-slate-500">LAYERS:</span>
          <button
            type="button"
            onClick={() => setActiveLayer(activeLayer === 0 ? null : 0)}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeLayer === 0 ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40' : 'bg-slate-800/60 text-slate-300 hover:text-white'
            }`}
          >
            Input
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer(activeLayer === 1 || activeLayer === 2 ? null : 1)}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeLayer === 1 || activeLayer === 2 ? 'bg-blue-500/30 text-blue-200 border border-blue-400/40' : 'bg-slate-800/60 text-slate-300 hover:text-white'
            }`}
          >
            Hidden (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer(activeLayer === 3 ? null : 3)}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeLayer === 3 ? 'bg-purple-500/30 text-purple-200 border border-purple-400/40' : 'bg-slate-800/60 text-slate-300 hover:text-white'
            }`}
          >
            Output
          </button>
        </div>

        <div className="text-[11px] font-mono text-cyan-400/80">
          f(x) = σ(Wᵀx + b)
        </div>
      </div>
    </div>
  );
};
