import { createMeshes } from "./meshes.js";

// Court class representing the full basketball court
class Court extends THREE.Group {
    constructor() {
        super();

        // Generate all the necessary meshes
        this.meshes = createMeshes();

        // Clone and mirror the three-point curve for the opposite side
        const threePointCurveCopy = this.meshes.threePointCurve.clone();
        threePointCurveCopy.scale.x = -1;

        // Add all court components to the group
        this.add(
            this.meshes.court,
            this.meshes.centerLine,
            this.meshes.circle,
            this.meshes.threePointCurve,
            threePointCurveCopy,
            this.meshes.ball,
            this.meshes.leftHoop,
            this.meshes.rightHoop,
            this.meshes.sideLines
        );
    }

    
    tick(delta) {
        
    }
}

export { Court };
