        // $('search').on('click', function() {

        // var search = $('#search').val();
        var searchTerm = 'george bush'
        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=83683e6f21874fe28ac4855fd25e2dbc&q=' + searchTerm + '&apikey=83683e6f21874fe28ac4855fd25e2dbc'

        $.ajax({
        url: queryURL,
        method: 'GET',
        }).done(function(result) {
        console.log(result);
        }).fail(function(err) {
        throw err;
        }).then(function(result) {
            
            for (var i = 0; i < numSelected; i++) {
                console.log(result.response)
                console.log(result.response.docs[i]);
                $('#articleResults').append('title: ' + result.response.docs[i].snippet);
                console.log(results.response.doc[i].snippet)

            

        })

        
        // })
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