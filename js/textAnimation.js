window.addEventListener("load", animate, false);

function animate() {


    function flySetup(left, top, ElementID) {
        let amplitude = 70;
        let left_pos = left;
        let top_pos = top;
        let pi = Math.PI;
        let inc = pi / 30;
        let position = 0;

        function fly() {
            position += inc;
            obj.style.left = amplitude * Math.cos(position) * Math.sin(position) + left_pos + "px";
            obj.style.top = amplitude * Math.sin(position) + top_pos + "px";
            setTimeout(fly, 20);
        }

        let obj = document.getElementById(ElementID);
        fly();
    }

    //
    flySetup(-600, 300, "obj");
    flySetup(600, 300, "obj1");
    flySetup(250, 300, "obj2");
    flySetup(-250, 300, "obj3");

    function secondWave() {
        flySetup(600, 400, "obj4");
        flySetup(-600, 400, "obj5");
        flySetup(250, -100, "obj8");
        flySetup(-250, -100, "obj9");

    }

    setTimeout(secondWave, 450);

    function thirdWave() {
        flySetup(250, 350, "obj11");
        flySetup(-250, 350, "obj10");
        flySetup(600, 200, "obj6");
        flySetup(-600, 200, "obj7");
    }

    setTimeout(thirdWave, 225);

    function fourthWave() {
        flySetup(600, -200, "obj12");
        flySetup(-600, -200, "obj13");
    }

    setTimeout(fourthWave, 300);
}