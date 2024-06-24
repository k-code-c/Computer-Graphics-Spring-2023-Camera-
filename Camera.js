class Camera{
    
    /**
     * Initialize member variables and create
     */
    constructor(){
        // our lookAt matrix
        this.cameraMatrix = glMatrix.mat4.create();

        // lookAt Point. where camera is pointing. Initially looking down
        // -Z-axis
        this.viewDirectionVector = glMatrix.vec3.fromValues(0.0, 0.0, -1.0);

        // our default up vector always <0, 1, 0>
        this.upVector = glMatrix.vec3.fromValues(0.0, 1.0, 0.0);

        // or the eye vector. position of camera
        this.positionVector = glMatrix.vec3.fromValues(0.0, 0.0, 0.0);

        // amount we scale movement by
        this.delta = 0.25;
    }
    /*
    * moves a delta in direction of viewDirectionVector
    * creats a vector that is in direction of viewDirectionVector and scale-by delta
    * adds this vector to the viewDirectionVector and recomputes lookAt matrix
    */
    moveForward(){
        let deltaForward = glMatrix.vec3.create();
        glMatrix.vec3.scale(deltaForward, this.viewDirectionVector, this.delta);
        glMatrix.vec3.add(this.positionVector, this.positionVector, deltaForward )
        this.updateCameraMatrix()
    }
    moveBackward(){
        // your code here...
        this.updateCameraMatrix()
    }
    strafeLeft(){
        // your code ..
        this.updateCameraMatrix()

        //let newPosition = glMatrix.v
    }
    strafeRight(){
        // your code here ...
        this.updateCameraMatrix()
    }
    rotateLeft(){
        // your code here...
        this.updateCameraMatrix()
    }
    rotateRight(){
        // your code here...
        this.updateCameraMatrix()
    }

    /** 
     * recaluates the lookAt matrix, call this member function after a move
     */
    updateCameraMatrix()
    {
        let deltaMove = glMatrix.vec3.create()
        glMatrix.vec3.add(deltaMove, this.positionVector, this.viewDirectionVector)
        glMatrix.mat4.lookAt(this.cameraMatrix, this.positionVector, deltaMove, this.upVector)
    }
}



// adds an event listener to window object to 
// process keyboard key presses
//
document.addEventListener("keydown", ProcessKeyPressedEvent, false )

/**
 * Determines which key was pressed and calls the appropriate camera 
 * method
 * 
 * @param{e} event that was fired
 * 
 */
function ProcessKeyPressedEvent(e){
/**
    Process Camera Movement Key   
             w
          A    D
             S
 */
    if(e.code === "KeyW")
    {
        console.log("^^^^--Forward")
        camera.moveForward()
    }
    
    console.log(e)
}


