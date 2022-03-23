// ==UserScript==
// @name     show real ratings
// @version  1.01
// @grant none
// @include /^https:\/\/(lichess\.org|lichess\.dev)
// ==/UserScript==

function updateRatings()
{
    var ratings = document.querySelectorAll('.ruser rating, .tour__standing .user-link .rating, em.rating, .mini-game__player .mini-game__user .rating');
    for (let i of ratings)
    {
        console.log(i)
        i.innerHTML = i.innerHTML - 567;
    }
}

(function() {
    document.title = "lichess.org"
    updateRatings();
})();
