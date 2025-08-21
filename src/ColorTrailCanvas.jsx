// // src/components/FluidBackground.jsx
// import { useEffect, useRef } from 'react';
// import fluid from 'webgl-fluid';

// const FluidBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (canvasRef.current) {
//       fluid(canvasRef.current, {
//         TRANSPARENT: true,
//         IMMEDIATE: true,
//         TRIGGER: 'hover',
//         SIM_RESOLUTION: 128,
//         DYE_RESOLUTION: 1024,
//         CAPTURE_RESOLUTION: 512,
//         DENSITY_DISSIPATION: 1,
//         VELOCITY_DISSIPATION: 1,
//         PRESSURE: 1,
//         PRESSURE_ITERATIONS: 20,
//         CURL: 30,
//         SPLAT_RADIUS: 0.25,
//         SPLAT_FORCE: 6000,
//         SHADING: true,
//         COLORFUL: true,
//         COLOR_UPDATE_SPEED: 10,
//         PAUSED: false,
//         BACK_COLOR: { r: 0, g: 0, b: 0 },
//         BLOOM: true,
//         BLOOM_ITERATIONS: 4,
//         BLOOM_RESOLUTION: 256,
//         BLOOM_INTENSITY: 0.8,
//         BLOOM_THRESHOLD: 0.6,
//         BLOOM_SOFT_KNEE: 0.7,
//         SUNRAYS: true,
//         SUNRAYS_RESOLUTION: 196,
//         SUNRAYS_WEIGHT: 1.0
//       });
//     }
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         width: '100%',
//         height: '100%',
//         pointerEvents: 'none'
//       }}
//     />
//   );
// };

// export default FluidBackground;
