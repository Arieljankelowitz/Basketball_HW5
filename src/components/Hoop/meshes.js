import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    // === HOOP STRUCTURE ===
    const hoop = new THREE.Group();

    const backboard = new THREE.Mesh(geometries.backboard, materials.glass);

    // Rim group contains the rim ring, connector bar, and net
    const rim = new THREE.Group();

    const rimConnector = new THREE.Mesh(geometries.connector, materials.orangeMetal);
    rimConnector.position.z = 0.05; // offsets the ring forward from the backboard

    const rimCircle = new THREE.Mesh(geometries.rim, materials.orangeMetal);
    rimCircle.rotation.x = Math.PI / 2; // face downward
    rimCircle.position.z = 0.3; // extend outward from backboard

    const net = new THREE.Mesh(geometries.net, materials.net);
    net.position.z = 0.3;
    net.position.y = -0.2; // hangs below the rim

    rim.add(rimCircle, rimConnector, net);
    rim.position.y = -0.305; // drop rim below backboard center

    hoop.add(backboard, rim);
    hoop.position.y = 3.34; // regulation hoop height from floor

    // === SUPPORT BASE STRUCTURE ===
    const base = new THREE.Group();

    const pole = new THREE.Mesh(geometries.pole, materials.base);
    const baseBottom = new THREE.Mesh(geometries.base, materials.base);

    const mount = new THREE.Mesh(geometries.mount, materials.base);
    mount.position.y = 3 + 0.2285; // raise to align with hoop structure
    mount.rotation.x = -Math.PI / 2; // lay horizontally
    mount.position.z = 1.68; // set just behind the hoop

    // Upright pole extends vertically to hold horizontal bar
    const uprightPole = pole.clone();
    uprightPole.scale.y = 3.23;
    uprightPole.position.y = 3.23 / 2;

    // Horizontal support arm that reaches out toward the hoop
    const horizontalPole = pole.clone();
    horizontalPole.scale.y = 1.55;
    horizontalPole.rotation.x = Math.PI / 2;
    horizontalPole.position.y = 3.23;
    horizontalPole.position.z = 0.675;

    // Slanted support for stability
    const slantedPole = pole.clone();
    slantedPole.scale.y = 2;
    slantedPole.rotation.x = 0.8;
    slantedPole.position.y = 2.5;
    slantedPole.position.z = 0.7;

    base.add(baseBottom, mount, horizontalPole, uprightPole, slantedPole);
    base.position.z = -1.7192; // positions base behind the court

    return {
        hoop,
        base,
    };
}

export { createMeshes };
