function createGeometries() {
    // Main court surface
    const court = new THREE.BoxGeometry(28.65, 0.2, 15.24);

    
    const line = new THREE.BoxGeometry(0.08, 0.3048, 0.21);

    // Center circle
    const circle = new THREE.RingGeometry(1.7, 1.8288, 64, 64);

    
    const threePointArc = new THREE.RingGeometry(7.32, 7.4, 64, 64, 0, 2.3);

    
    const ball = new THREE.SphereGeometry(0.2286, 64, 64);

    
    const sideLines = new THREE.BoxGeometry(1, 0.2, 1);

    return {
        court,
        line,
        circle,
        threePointArc,
        ball,
        sideLines
    };
}

export { createGeometries };
