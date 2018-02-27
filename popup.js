// $(".dfp-ad-container").each(function() {
//     $(this).replaceWith( "<img width='300' height='250' src='https://cf.ltkcdn.net/cats/images/std/211655-675x450-Kitten-peeking.jpg'>" );
// })
ads = $(".dfp-ad-container")

//.each(function () {
// $.get('https://dog.ceo/api/breed/poodle/standard/images/random', function (data) {
//     $(this).replaceWith("<img width='300' height='250' src='" + data.message + "'>");
// })
// })

var i=0;

while(i < ads.length){
    $.get('https://dog.ceo/api/breed/poodle/standard/images/random', function (data) {
        var ad_id = '#' + ads[i].id
        console.log(ads)
        $(ad_id).replaceWith("<img width='300' height='250' src='" + data.message + "'>");
    })
    i++;
}

$('#siteTable_organic, .listingsignupbar').hide()


//JJuu2MKJUwauNtQH3mOtGZGDlqGZqmSN