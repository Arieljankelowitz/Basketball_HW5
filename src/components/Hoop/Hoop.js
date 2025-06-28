import { createMeshes } from "./meshes.js";

// Represents a single basketball hoop (rim + base)
class Hoop extends THREE.Group {
    constructor() {
        super();

        this.meshes = createMeshes();

        // Add rim and supporting base structure to this group
        this.add(
            this.meshes.hoop,
            this.meshes.base,
        );
    }

    
    tick(delta) {
        
    }
}

export { Hoop };
