    import * as THREE from "../js/three.module.js";
    export default function Copalera({x,y,z}){

    }
    //--------------------------------------------------------------------------------------------------------------------------Figura1_Copal
    //---------------------------------------------------------------------------------------Objeto2_Regalo
    var RegaloEscenario = grupCajaCompleta ({x:0,y:0,z:0});
    scene.add(RegaloEscenario);

    RegaloEscenario.position.set(0,0,-30);
    RegaloEscenario.scale.set(1,1,1);
    //---------------------------------------------------------------------------------------Objeto2_Regalo


    //--------------------------------------------------------------------------------------------------------------------------Figura1_Copal
    var RegEsGrup = new THREE.Group();
        RegEsGrup.add(RegaloEscenario);

    
        RegEsGrup.position.set(x,y,z);
        return Copalera;