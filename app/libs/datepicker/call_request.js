$(document).ready(function () {
    var baseUrl = 'https://ukrainianrealbrides.com/';
    var requestData = {};
    var errors = 0;

    //Выбо темы
    $(document).on('click', '.btn-question', function () {
        requestData.question_id = $(this).attr('value');

        var html =  '<div class="content-section">' +
                        '<p class="call-subheading">Please complete information below and press "Continue":</p>' +
                        '<form>' +
                            '<div class="call-form-row">' +
                                '<input type="text" class="call-field" placeholder="Enter your name" id="call-name" name="Name">' +
                                '<span class="error-message"></span>' +
                            '</div>' +
                            '<div class="call-form-row">' +
                                '<input type="text" class="call-field" placeholder="Enter your e-mail" id="call-email" name="Email">' +
                                '<span class="error-message"></span>' +
                            '</div>' +
                            '<div class="call-form-row">' +
                                '<input type="text" class="call-field" placeholder="Enter your phone number" id="call-phone" name="Phone">' +
                                '<span class="error-message"></span>' +
                            '</div>' +
                            '<div class="call-form-row">' +
                                '<input type="text" class="call-field" id="call-datepicker" data-language="en" data-position="top left" placeholder="Select date and time to schedule the call">' +
                                '<span class="error-message"></span>' +

                            '</div>' +
                            '<button type="button" class="btn-continue request">Continue</button>' +
                        '</form>' +
                    '</div>';

        $('.block-body').animate({ 'opacity' : 0 }, 500);
        setTimeout(function () {
            $('.block-body').empty();
            $('.block-body').append(html);
            $('#call-datepicker').datepicker({
                todayButton: new Date(),
                clearButton: true,
                timepicker: true
            });
            $('.block-body').animate({ 'opacity' : 1 }, 700);
        }, 500);
    });

    //Обработка формы
    $(document).on('blur', '#call-name, #call-email, #call-phone', function () {
        var data = $(this).val();

        var input = $(this).attr('id').split('-');
        switch (input[1]) {
            case 'name':
                if (data == '') {
                    $(this).addClass('error').next().text('Sorry, this field is required');
                    errors += 1;
                } else {
                    if (data.length < 3 || data.length > 20) {
                        $(this).addClass('error').next().text('Sorry, this field must be 3 to 20 symbols');
                        errors += 1;
                    }/* else {
                        var pattern = /^[a-zA-Z ]+$/;
                        if (data.search(pattern) != 0) {
                            $(this).addClass('error').next().text('Please enter your name in English');
                            errors += 1;
                        }
                    }*/
                }
                break;
            case 'email':
                if (data == '') {
                    $(this).addClass('error').next().text('Sorry, this field is required');
                    errors += 1;
                } else {
                    if (data.indexOf('@') + 1 == 0 || data.indexOf(' ') + 1 != 0) {
                        $(this).addClass('error').next().text('Please enter valid email');
                        errors += 1;
                    }
                }
                break;
            case 'phone':
                if (data === '+ ' || data === '+' || data === '') {
                    $(this).val('');
                    $(this).addClass('error').next().text('Sorry, this field is required');
                    errors += 1;
                } else {
                    var pattern = /^[0-9 +\-]+$/;
                    if (data.search(pattern) != 0) {
                        $(this).addClass('error').next().text('Please enter valid phone');
                        errors += 1;
                    }
                }
                break;
        }
    }).on('focus', '#call-name, #call-email, #call-phone', function () {
        var data = $(this).val();
        var input = $(this).attr('id').split('-');
        switch (input[1]) {
            case 'phone':
                if (data == '') {
                    $(this).val('+ ');
                }
                if ($(this).next().text() != '') {
                    $(this).removeClass('error').next().text('');
                    if (errors > 0) {
                        errors -= 1;
                    }
                }
                break;
            default:
                if ($(this).next().text() != '') {
                    $(this).removeClass('error').next().text('');
                    if (errors > 0) {
                        errors -= 1;
                    }
                }
                break;
        }
    });

    $(document).on('blur', '#call-datepicker', function () {
        if ($(this).val() == '') {
            if ($(this).next().text() == '') {
                $(this).addClass('error').next().text('Sorry, this field is required');
                errors += 1;
            }
        }
    }).on('focus', '#call-datepicker', function () {
        if ($(this).next().text() != '') {
            $(this).removeClass('error').next().text('');
            if (errors > 0) {
                errors -= 1;
            }
        }
    });

    //Отправка формы
    $(document).on('click', '.request', function () {
        //$(this).removeClass('request');

        $('form input').each(function () {
            var field = $(this).attr('id').split('-');
            var data = $(this).val();

            switch (field[1]) {
                case 'name':
                    if (data == '') {
                        if ($(this).next().text() == '') {
                            errors += 1;
                        }
                        $(this).addClass('error').next().text('Sorry, this field is required');
                    } else {
                        if (data.length < 3 || data.length > 20) {
                            if ($(this).next().text() == '') {
                                errors += 1;
                            }
                            $(this).addClass('error').next().text('Sorry, this field must be 3 to 20 symbols');
                        } else {
                            var pattern = /^[a-zA-Z ]+$/;
                            if (data.search(pattern) != 0) {
                                if ($(this).next().text() == '') {
                                    errors += 1;
                                }
                                $(this).addClass('error').next().text('Please enter your name in English');
                            }
                        }
                    }
                    break;
                case 'email':
                    if (data == '') {
                        if ($(this).next().text() == '') {
                            errors += 1;
                        }
                        $(this).addClass('error').next().text('Sorry, this field is required');
                    } else {
                        if (data.indexOf('@') + 1 == 0 || data.indexOf(' ') + 1 != 0) {
                            if ($(this).next().text() == '') {
                                errors += 1;
                            }
                            $(this).addClass('error').next().text('Please enter valid email');
                        }
                    }
                    break;
                case 'phone':
                    if (data === '+ ' || data === '+' || data === '') {
                        if ($(this).next().text() == '') {
                            errors += 1;
                        }
                        $(this).val('');
                        $(this).addClass('error').next().text('Sorry, this field is required');
                    } else {
                        var pattern = /^[0-9 +\-]+$/;
                        if (data.search(pattern) != 0) {
                            if ($(this).next().text() == '') {
                                errors += 1;
                            }
                            $(this).addClass('error').next().text('Please enter valid phone');
                        }
                    }
                    break;
                case 'datepicker':
                    if ($(this).val() == '') {
                        if ($(this).next().text() == '') {
                            errors += 1;
                        }
                        $(this).addClass('error').next().text('Sorry, this field is required');
                    }
                    break;
            }
        });

        if (errors == 0) {
            requestData.name = $('#call-name').val();
            requestData.email = $('#call-email').val();
            requestData.phone = $('#call-phone').val();
            requestData.date = $('#call-datepicker').val();
            requestData.timezone = new Date().getTimezoneOffset();

            $.ajax({
                type: 'post',
                data: requestData,
                url: baseUrl + 'call_request/new_request',
                dataType: 'json',
                success: function (data) {
                    if (data == 1) {
                        var html =  '<div class="success-block">' +
                                        '<p>Your request was successfully sent.</p>' +
                                        '<p>We will contact you at the time you specify.</p>' +
                                        '<a href="' + baseUrl + '">Go back to site</a>' +
                                    '</div>';

                        $('.block-body').animate({ 'opacity' : 0 }, 500);
                        setTimeout(function () {
                            $('.block-body').empty();
                            //$('.block-body').append(html);
                            $('.block-body').parent().parent().parent().addClass('success');
                            $('.block-body').animate({ 'opacity' : 1 }, 700);
                        }, 500);
                    } else {
                        $('.btn-continue').addClass('request');
                    }
                }
            });
        }
    });

    //Перепланирование звонка
    if (window.location.href.indexOf('?') + 1 != 0) {
        requestId = window.location.href.split('=');

        var html =  '<div class="content-section">' +
                        '<p class="call-subheading">Please select new date and time and press "Continue":</p>' +
                        '<form style="padding-top: 120px;">' +
                            '<div class="call-form-row">' +
                                '<input type="text" class="call-field" id="call-datepicker" data-language="en" data-position="top left" placeholder="Select date and time to schedule the call">' +
                                '<span class="error-message"></span>' +
                            '</div>' +
                            '<button type="button" class="btn-continue reschedule" value="' + requestId[requestId.length - 1] + '">Continue</button>' +
                        '</form>' +
                    '</div>';

        $('.block-body').empty();
        $('.block-body').append(html);
        $('#call-datepicker').datepicker({
            todayButton: new Date(),
            clearButton: true,
            timepicker: true
        });
    }

    $(document).on('click', '.reschedule', function () {
        $(this).removeClass('reschedule');

        if ($('#call-datepicker').val() == '') {
            if ($('#call-datepicker').next().text() == '') {
                errors += 1;
            }
            $('#call-datepicker').addClass('error').next().text('Sorry, this field is required');
        } else {
            var user = window.location.href.split('=');
            user = parseInt(user[user.length - 2].substr(0, 1));
            var url = baseUrl + 'call_request/user_reschedule_request';
            if (user == 0) {
                url = baseUrl + 'call_request/admin_reschedule_request'
            }

            $.ajax({
                type: 'post',
                data: {
                    date: $('#call-datepicker').val(),
                    timezone: new Date().getTimezoneOffset(),
                    request_id: $(this).attr('value')
                },
                url: url,
                dataType: 'json',
                success: function (data) {
                    if (data == 1) {
                        $('.block-body').animate({ 'opacity' : 0 }, 500);
                        setTimeout(function () {
                            $('.block-body').empty();
                            //$('.block-body').append(html);
                            $('.block-body').parent().parent().parent().addClass('success');
                            $('.block-body').animate({ 'opacity' : 1 }, 700);
                        }, 500);
                    } else {
                        $('.btn-continue').addClass('reschedule');
                    }
                }
            });
        }
    });
});