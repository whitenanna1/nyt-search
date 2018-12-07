$('#search').on('click', function () {

    var searchTerm = $('#search').val();
    // var searchTerm = 'george bush';
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=83683e6f21874fe28ac4855fd25e2dbc&q=' + searchTerm + '&apikey=83683e6f21874fe28ac4855fd25e2dbc';

    var numSelected = $('#numSelected').val();

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    }).then(function (result) {

        for (var i = 0; i < parseInt(numSelected); i++) {
            console.log(result.response)
            console.log(result.response.docs[i]);
            $('#articleResults').append('title: ' + result.response.docs[i].snippet);
            console.log(results.response.doc[i].snippet)
            $('#articleResults').append('url: ' + results.response.docs[i].web_url);
            console.log(results.response.docs[i].web_url);
        };

    });

    //clearResults
    //searchTerm
    //numRecords
    //for loop number placeholder number = numSelected
    //startYear
    //endYear
    //search buttpn = search
    //clear
    //articleResults
    console.log(queryURL);
})