let arr1 = [-1, 0, 2, 5, 9, 10];
let arr2 = [0, 2, 4, 5, 6, 7, 9];
let Markers1Container = document.getElementById("markersA");
let elements1Container = document.getElementById("elemsA");

let Markers2Container = document.getElementById("markersB");
let elements2Container = document.getElementById("elemsB");


let union = new UNION(arr1, arr2);



createTable(elements1Container, Markers1Container, arr1, "1", '<th class="tg-ycr8">A elemei</th>', '<th class="tg-ycr8">A pointere</th>');
createTable(elements2Container, Markers2Container, arr2, "2", '<th class="tg-ycr8">B elemei</th>', '<th class="tg-ycr8">B pointere</th>');
createTable(document.getElementById("results"), "", [], "", '<th class="tg-ycr8">Jelenlegi állás</th>', "");

function createTable(elementElements, elementMarker, array, constumClass, labelElems, labelMarkers) {
    let bodyMidElemnts = "";
    let bodyMidMarkers = "";

    for (let i = 0; i < array.length; i++) {
        bodyMidElemnts += `<th class="tg-ycr8" id=${i}>${array[i]}</th>`;
        if (i == 0) {
            bodyMidMarkers += `<th class="tg-ycr8 marker${constumClass}" id=${constumClass}marker${i}>&#8657</th>`;

        } else {

            bodyMidMarkers += `<th class="tg-ycr8 marker${constumClass} markers" id=${constumClass}marker${i}>&#8657</th>`;
        }

    }

    elementElements.innerHTML = labelElems + bodyMidElemnts;
    elementMarker.innerHTML = labelMarkers + bodyMidMarkers;

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

document.getElementById("reset").onclick = function() {
    union = new UNION(arr1, arr2);
    createTable(elements1Container, Markers1Container, arr1, "1", '<th class="tg-ycr8">A elemei</th>', '<th class="tg-ycr8">A pointere</th>');
    createTable(elements2Container, Markers2Container, arr2, "2", '<th class="tg-ycr8">B elemei</th>', '<th class="tg-ycr8">B pointere</th>');
    createTable(document.getElementById("results"), "", [], "", '<th class="tg-ycr8">Jelenlegi állás</th>', "");

}