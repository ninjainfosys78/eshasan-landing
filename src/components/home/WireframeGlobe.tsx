// src/components/home/WireframeGlobe.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WireframeGlobe() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.z = 550;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const radius = 275;
    const detail = 3;

    const icoGeometry = new THREE.IcosahedronGeometry(radius, detail);
    const edges = new THREE.EdgesGeometry(icoGeometry);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x003893,
      transparent: true,
      opacity: 0.3,
    });

    const globe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(globe);

    let animationId: number;

    let isHovered = false;
    let isDragging = false;
    let lastPointerX: number | null = null;
    let lastPointerY: number | null = null;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isHovered) {
        globe.rotation.y += 0.001;
        globe.rotation.x += 0.00025;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handlePointerEnter = () => {
      isHovered = true;
      lastPointerX = null;
      lastPointerY = null;
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDragging = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      (event.target as HTMLElement).setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;

      const { clientX, clientY } = event;

      if (lastPointerX !== null && lastPointerY !== null) {
        const deltaX = clientX - lastPointerX;
        const deltaY = clientY - lastPointerY;

        globe.rotation.y += deltaX * 0.0015;
        globe.rotation.x += deltaY * 0.0015;
      }

      lastPointerX = clientX;
      lastPointerY = clientY;
    };

    const handlePointerUp = (event: PointerEvent) => {
      isDragging = false;
      lastPointerX = null;
      lastPointerY = null;

      try {
        (event.target as HTMLElement).releasePointerCapture(event.pointerId);
      } catch {}
    };

    const handlePointerLeave = () => {
      isHovered = false;
      isDragging = false;
      lastPointerX = null;
      lastPointerY = null;
    };

    const dom = renderer.domElement;
    dom.addEventListener("pointerenter", handlePointerEnter);
    dom.addEventListener("pointerleave", handlePointerLeave);
    dom.addEventListener("pointerdown", handlePointerDown);
    dom.addEventListener("pointermove", handlePointerMove);
    dom.addEventListener("pointerup", handlePointerUp);
    dom.addEventListener("pointercancel", handlePointerUp);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target !== container) continue;
          const rect = entry.contentRect;
          width = rect.width || 400;
          height = rect.height || 400;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      });

      resizeObserver.observe(container);
    } else {
      const handleResize = () => {
        if (!container) return;
        width = container.clientWidth || 400;
        height = container.clientHeight || 400;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);
    }

    return () => {
      cancelAnimationFrame(animationId);

      dom.removeEventListener("pointerenter", handlePointerEnter);
      dom.removeEventListener("pointerleave", handlePointerLeave);
      dom.removeEventListener("pointerdown", handlePointerDown);
      dom.removeEventListener("pointermove", handlePointerMove);
      dom.removeEventListener("pointerup", handlePointerUp);
      dom.removeEventListener("pointercancel", handlePointerUp);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      icoGeometry.dispose();
      edges.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="
        w-[260px] h-[260px]
        sm:w-[320px] sm:h-[320px]
        md:w-[380px] md:h-[380px]
        lg:w-[460px] lg:h-[460px]
        xl:w-[520px] xl:h-[520px]
        2xl:w-[600px] 2xl:h-[600px]
      "
      aria-hidden="true"
    />
  );
}
