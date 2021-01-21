let arr1 = [-1, 0, 2, 5, 9, 10];
let arr2 = [0, 2, 4, 5, 6, 7, 9];
let markers1Container = document.getElementById("markersA");
let elements1Container = document.getElementById("elemsA");

let markers2Container = document.getElementById("markersB");
let elements2Container = document.getElementById("elemsB");


let union;
generate();


function generate(){
	union = new UNION(arr1, arr2);
	createTable(elements1Container, markers1Container, arr1, "1", '<th class="tg-ycr8">A elemei</th>', '<th class="tg-ycr8">A pointere</th>');
	createTable(elements2Container, markers2Container, arr2, "2", '<th class="tg-ycr8">B elemei</th>', '<th class="tg-ycr8">B pointere</th>');
	createTable(document.getElementById("results"), "", [], "", '<th class="tg-ycr8">Jelenlegi állás</th>', "");
}


function createTable(elementElements, elementMarker, array, costumID, labelElems, labelMarkers) {
    let bodyElemnts = "";
    let bodyMarkers = "";

    for (let i = 0; i < array.length; i++) {
        bodyElemnts += `<th class="tg-ycr8" id=${i}>${array[i]}</th>`;
        if (i == 0) {
            bodyMarkers += `<th class="tg-ycr8 marker${costumID}" id=${costumID}marker${i}><span class="marker">&#8593</span></th>`;

        } else {

            bodyMarkers += `<th class="tg-ycr8 markers marker${costumID}" id=${costumID}marker${i}><span class="marker">&#8593</span></th>`;
        }

    }

    elementElements.innerHTML = labelElems + bodyElemnts;
    elementMarker.innerHTML = labelMarkers + bodyMarkers;

}

document.getElementById("next").onclick = function() {
    union.update();
    let state = union.show();
    let markersA = document.getElementsByClassName("marker1");
    let markersB = document.getElementsByClassName("marker2");
    alert(state.comparison);

    for (const elem of markersA) {
        if (elem.id == '1marker' + state.pointerA) {
            elem.classList.remove("markers");
        } else {
            elem.classList.add("markers");
        }
    }

    for (const elem of markersB) {
        if (elem.id == '2marker' + state.pointerB) {
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
    let inputArray2 = eval(prompt("Írd be a B tömböt!(példa: [1,2,3,4])"));

    arr1 = inputArray1.sort((a, b) => a - b);
    arr2 = inputArray2.sort((a, b) => a - b);

    generate();
    
}
