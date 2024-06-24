/**
 * simple function that demonstrates Camera object
 * camera is a global object
 * -- it is updated by the function ProcessKeyPressedEvent
 * -- we can get the current camera matrix by 
 * --     camera.cameraMatrix // this is what we would pass as uniform
 *        to vertex shader.
 */

/**
 * Creates a camera object
 */
let camera = new Camera();


function main(){
    const canvas = document.querySelector("#glcanvas");
    /**  @type {WebGLRenderingContext} **/
    const gl = canvas.getContext("webgl2");
    let aspect = canvas.clientWidth / canvas.clientHeight;

    // use glMatrix in your code
    // create a prospective matrix
    let projMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projMatrix, Math.PI / 3, aspect, 0.1, 100.0);

    // Let's do a simple transformation
    let transMatrix = glMatrix.mat4.create();
    //                                     x,  y, z scale factor
    glMatrix.mat4.scale(transMatrix, transMatrix, [0.5, 2.0, 1.0]);

    console.log(camera.cameraMatrix);
    console.log(transMatrix);
    gl.clearColor(1.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT)

    function draw(){
        
        console.log(camera.cameraMatrix);
        requestAnimationFrame(draw);
    }
    draw();
}