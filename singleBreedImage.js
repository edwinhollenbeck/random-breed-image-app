function fetchPictures() {
    $('form').submit(function(event) {
        event.preventDefault();
        $('.results-img').remove();
        let dogBreed = $('#breed').val();
        console.log(dogBreed);
        fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then(response => response.json())
            .then(responseJson => displayPictures(responseJson))
            .catch(error => alert(`Please contact the system administrator.`))
    })
};

function displayPictures(responseJson) {
    if (responseJson.code == "404") {
        alert(`${responseJson.message}`);
    } else {
    console.log(responseJson);
    $('#display-pictures').append(`<img src="${responseJson.message}" class="results-img">`);
    };
};

$(fetchPictures());