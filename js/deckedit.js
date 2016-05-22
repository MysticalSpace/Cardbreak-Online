/*global sendRequest*/

function getCard() {
    'use strict';
    sendRequest({

    }, function (resp) {});
}

function getCardTypes() {
    'use strict';
    sendRequest({

    }, function (resp) {});
}

function cleardeck() {
    'use strict';
    sendRequest({

    }, function (resp) {});
}

function newdeck(name) {
    'use strict';
    sendRequest({
        name: "new-deck",
        data: {
            deckName: name
        }
    }, function (resp) {});
}

function getdeck(name) {
    'use strict';
    sendRequest({
        name: "get-deck",
        data: {
            deckName: name
        }
    }, function (resp) {

    });
}

function getdeckdata() {
    'use strict';
    sendRequest({
        name: "get-deck-data",
        data: {}
    }, function (resp) {
        var names = [],
            defaultname,
            i;
        $('.decklist').html('');

        for (i = 0; resp.deckLites.length > i; i++) {
            $('.decklist').append('<option name="' + resp.deckLites[i].name + '">' + resp.deckLites[i].name + '</option>');
        }
        $('.decklist option[name="' + resp.defaultDeck.name + '"]').attr("selected", "selected");
        getdeck(resp.defaultDeck.name);
    });
}

function deletedeck(name, decktoload) {
    'use strict';
    sendRequest({
        name: "delete-deck",
        data: {
            deckNameForDelete: name,
            deckNameForGet: decktoload
        }
    }, function (resp) {

    });
}

function renamedeck(oldname, newname) {
    'use strict';
    sendRequest({
        name: "rename-deck",
        data: {
            currentDeckName: oldname,
            newDeckName: newname
        }
    }, function (resp) {});
}

function savedeck(name, mainDeck, sideDeck, extraDeck) {
    'use strict';
    sendRequest({
        name: "save-deck",
        data: {
            deckName: name,
            mainDeck: mainDeck,
            sideDeck: sideDeck,
            extraDeck: extraDeck,
            isSaveAs: true // is this always true?s
        }
    }, function (resp) {});
}

function setdefaultdeck() {
    'use strict';
    sendRequest({
        name: "set-default-deck",
        data: {
            deckName: $('.decklist').val()
        }
    }, function (resp) {
        var name = $('.decklist').val();
        if (resp.success) {
            modalBox(name + ' set as default deck.');
        }
    });
}

$('.decklist').onchange(function () {
    'use strict';
    getdeck($('.decklist').val());
});

function switchformfields() {
    'use strict';
    if ($('.cardCategory').val() === "All") {
        $('.monster-only').prop('disabled', true);
        $('#cardType').prop('disabled', true);
    }
    else if ($('.cardCategory').val() === "Monster")) {
        $('.monster-only').prop('disabled', false);
        $('#cardType').prop('disabled', false);
    }
    else {
        $('.monster-only').prop('disabled', true);
        $('#cardType').prop('disabled', false);
    }
}