let arr1 = [-1, 0, 2, 5, 9, 10];
let markers1Container = document.getElementById("markersA");
let elements1Container = document.getElementById("elemsA");

let min;
let state;
generate();


function generate(){
	min = new MIN(arr1);
	state = min.show();
	createTable(elements1Container, markers1Container, arr1, "1", '<th class="tg-ycr8">A elemei</th>', '<th class="tg-ycr8">A pointere</th>');
	createTable(document.getElementById("results"), "", state.currentResult, "", '<th class="tg-ycr8">Jelenlegi állás</th>', "")
}


function createTable(elementElements, elementMarker, array, costumID, labelElems, labelMarkers) {
    let bodyElemnts = "";
    let bodyMarkers = "";

    for (let i = 0; i < array.length; i++) {
        bodyElemnts += `<th class="tg-ycr8" id=${i}>${array[i]}</th>`;
        if (i == 1) {
            bodyMarkers += `<th class="tg-ycr8 marker${costumID}" id=${costumID}marker${i}><span class="marker">&#8593</span></th>`;

        } else {

            bodyMarkers += `<th class="tg-ycr8 markers marker${costumID}" id=${costumID}marker${i}><span class="marker">&#8593</span></th>`;
        }

    }

    elementElements.innerHTML = labelElems + bodyElemnts;
    elementMarker.innerHTML = labelMarkers + bodyMarkers;

}

document.getElementById("next").onclick = function() {
    min.update();
    state = min.show();
    let markersA = document.getElementsByClassName("marker1");
    alert(state.comparison);

    for (const elem of markersA) {
        if (elem.id == '1marker' + state.pointerA) {
            elem.classList.remove("markers");
        } else {
            elem.classList.add("markers");
        }
    }

    createTable(document.getElementById("results"), "", state.currentResult, "", '<th class="tg-ycr8">Jelenlegi állás</th>', "");
}

document.getElementById("reset").onclick = generate;

document.getElementById("addArrays").onclick = function () {
    let inputArray1 = eval(prompt("Írd be az A tömböt! (példa: [1,2,3,4])"));
    arr1 = inputArray1;

    generate();
    
}
