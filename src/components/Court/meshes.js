import { Hoop } from '../Hoop/Hoop.js';
import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const court = new THREE.Mesh(geometries.court, materials.floor);
    court.receiveShadow = true;

    const line = new THREE.Mesh(geometries.line, materials.paint);

    const centerLine = line.clone();
    centerLine.scale.y = 50; // Extends the center line across the full width
    centerLine.rotation.x = Math.PI / 2; // Lay flat on court surface

    const threePointCurve = new THREE.Group();

    // Side lines of the three-point area (left and right arms)
    const leftLine = line.clone();
    leftLine.scale.y = 14;
    leftLine.rotation.z = Math.PI / 2;
    leftLine.rotation.x = Math.PI / 2;
    leftLine.position.set(12.192, 0, -6.7056); // Positioned from hoop area

    const rightLine = line.clone();
    rightLine.scale.y = 14;
    rightLine.rotation.z = Math.PI / 2;
    rightLine.rotation.x = Math.PI / 2;
    rightLine.position.set(12.192, 0, 6.7056);

    const arc = new THREE.Mesh(geometries.threePointArc, materials.paint);
    arc.position.set(13.1064, 0.15, 0); // Raised slightly above floor to avoid z-fighting
    arc.rotation.x = Math.PI / 2;
    arc.rotation.z = Math.PI / 1.577; // Aligns curve to match side lines

    threePointCurve.add(leftLine, rightLine, arc);

    const circle = new THREE.Mesh(geometries.circle, materials.paint);
    circle.position.y = 0.15;
    circle.rotation.x = Math.PI / 2; // Lays flat on court

    const ball = new THREE.Mesh(geometries.ball, materials.grip);
    ball.position.y = 0.1143 + 0.22; // Just above court surface, looks like it’s resting
    ball.castShadow = true;

    // Left hoop facing inward from the left side
    const leftHoop = new Hoop();
    leftHoop.rotation.y = Math.PI / 2;
    leftHoop.position.x = -13.2;
    leftHoop.castShadow = true;

    // Right hoop facing inward from the right side
    const rightHoop = new Hoop();
    rightHoop.rotation.y = -Math.PI / 2;
    rightHoop.position.x = 13.2;
    rightHoop.castShadow = true;

    const sideLines = new THREE.Group();
    const sideLineSquare = new THREE.Mesh(geometries.sideLines, materials.sideLines);

    // Vertical boundary lines on the left and right
    const leftSideLine = sideLineSquare.clone();
    leftSideLine.scale.set(2, 1, 15.24);
    leftSideLine.position.x = -15.325; // Outside left edge of court

    const rightSideLine = leftSideLine.clone();
    rightSideLine.position.x = 15.325; // Mirror to right edge

    // Horizontal boundary lines (top and bottom)
    const topSideLine = sideLineSquare.clone();
    topSideLine.scale.set(28.65 + 4, 1, 2); // Wide enough to cover court width + margin
    topSideLine.position.z = -8.62;

    const bottomSideLine = topSideLine.clone();
    bottomSideLine.position.z = 8.62;

    sideLines.add(leftSideLine, rightSideLine, topSideLine, bottomSideLine);

    return {
        court,
        centerLine,
        circle,
        threePointCurve,
        ball,
        leftHoop,
        rightHoop,
        sideLines
    };
}

export { createMeshes };
