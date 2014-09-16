var homePage = (function() {
    // private variables and functions

    function sendMessage() {
        // collect form data
        var data = {
            name: $('#Name').val(),
            email: $('#Email').val(),
            subject: $('#Subject').val(),
            message: $('#Message').val()
        };

        $.ajax({
            type: 'POST',
            url: '/home/sendmessage',
            data: data
        }).done(function() {
            clearFormFields();
            bootbox.alert('Your message has been sent successfully!');
        }).fail(function() {
            bootbox.alert('Something went wrong.');
        });
    }

    function clearFormFields() {
        $('#Name').val('');
        $('#Email').val('');
        $('#Subject').val('');
        $('#Message').val('');
    }

    var init = function() {
        $('#btnSend').on('click', function(e) {
            // stop click event
            e.preventDefault();
            // stop event bubbling
            e.stopPropagation();

            // check if form is valid
            if ($('#frmMessage').valid()) {
                sendMessage();
            }
        });
    }

    // public API
    return {
        init: init
    };
})();