



var i = 0;

onmessage = function (event) {
    if (event.data !== "") {
        i = parseInt(event.data);
    } else {

        i++;
        postMessage(i);


    }
}