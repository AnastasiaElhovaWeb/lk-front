if (ajaxPath === undefined) {
    var ajaxPath = 'http://localhost/ajax/callcenter/';
}

$(function () {

    if ( $('[data-table-type]').length ) {
        $('[data-table-type]').each(function () {
            initDatatable($(this).data('table-type'));
        });
    }

    $('.input-date').datepicker({
        'showOtherMonths': true,
        'autoClose': true,
        'position': 'bottom left',
        'timepicker': false,
        onSelect: function onSelect(formattedDate, date, inst) {
            $(inst.$el).addClass('changed');
            $(inst.$el).closest('form').trigger('submit');
        }
    });

    $('.form-control-select').select2({
        theme: "bootstrap",
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "select2-dropdown-class",
        language: {
            noResults: function noResults() {
                return "Результатов не найдено";
            }
        }
    });

    $('[data-input-type]').inputmask({
        'min': '0.00',
        'placeholder': '0',
        'mask': '9{0,15}.9{2}',
    });

    AjaxForm.initialize({
        'formSelector':'.ajax-form',
        'actionUrl': ajaxPath ,
    });

    // Прикрепление файла
    let inputs = $('.form-control-file');
    inputs.each(function () {
        let $input = $(this);
        let label = $input.next('label');
        let labelVal = label.html();

        $input.on('change', function (e) {
            let fileName = '';

            if (this.files) {
                $input.addClass('files-attached');

                if( this.files.length > 1 ) {
                    let textCountFiles = num2str( this.files.length, ['файл', 'файла', 'файлов']);
                    fileName = 'Выбрано ' + this.files.length + ' ' + textCountFiles;
                } else {
                    switch(this.files.length) {
                        case 1:
                            fileName = e.target.value.split( '\\' ).pop();
                            break;
                        case 0:
                            fileName = 'Выбрать файл';
                            break;
                        default:
                            break;
                    }
                }
            }

            if (fileName) {
                label.html(fileName);
            } else {
                label.html(labelVal);
            }
        });

    });

    svg4everybody();

});


$('body').on('input', '[data-input-type]', function () {
    dataInputChange($(this));
});


$('body').on('change', 'input, select, textarea', function () {
    $(this).addClass('changed');
    let $select = $(this).siblings('.select2-container');
    $select.addClass('changed');
});


$('body').on('submit', 'form', function () {
    let $inputs = $(this).find('input, select, textarea, .select2-container');
    $inputs.removeClass('changed');
});


$('body').on('click', '.slider-toggle', function () { // Развернуть доп.строку в таблице
    let $slider = $(this).closest('td').find('.slider-table');
    $slider.slideToggle();
    $(this).toggleClass('open');
});


$('body').on('change', '[data-step]', function () {  // Смена категорий заявок при выборе вида заявки

    let $select = $(this);
    let step = +($select.data('step'));
    let value = $select.val();

    let $selectNext = $(`select[data-step='${step+1}']`);
    if ($selectNext) {
        $selectNext.find('option').attr('disabled', 'disabled');
        $selectNext.find(`option[data-parent='${value}']`).removeAttr('disabled');
        $selectNext.val('').trigger('change');
    }
});


$('body').on('click', '.see-password', function (e) {
    let $inputSee = $(this);
    let $inputPassword = $inputSee.siblings('input');
    let type = $inputPassword.attr('type');
    if (type === 'password') {
        $inputPassword.attr('type', 'text');
        $inputSee.addClass('open');
    }
    else {
        $inputPassword.attr('type', 'password');
        $inputSee.removeClass('open');
    }
});


$('body').on('input', '[type="password"]', function (e) {

    let $input = $(this);
    let inputLength = $input.val().length;
    let $inputSee = $input.siblings('.see-password');
    $input.attr('data-type', 'password');
    if ( inputLength !== 0 && !$inputSee.length) {
        $inputSee = $('<div class="see-password"></div>');
        $input.after($inputSee);
    }
    else {
        if (inputLength === 0) {
            $inputSee.remove();
            $input.attr('type', 'password');
        }
    }
});


function initDatatable(typeTable) {
    let $form = $(`[data-form-type = "${typeTable}"]`);

    let $datatable = $(`[data-table-type = "${typeTable}"]`).DataTable({
        destroy: true,
        processing: true,
        dom: "<'row'<'col-12'tr>>" +
            "<'row'<'col-12 col-sm-6'p><'col-12 col-sm-6 d-none d-sm-block'l>>",
        info: false,
        search: false,
        serverSide: true,
        bServerSide: true,
        bPaginate: true,
        bLengthChange: true,
        lengthMenu: [[10, 20, 50], [10, 20, 50]],
        ajax: {
            "url": ajaxPath,
            "data": function ( d ) {
                let $inputs = $form.find('input, select, textarea');
                $inputs.each(function() {
                    d[$(this).attr('name')] = $(this).val();
                })
            }
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        columns: [
            { "data": null },
        ],
        language: {
            "processing": "Подождите...",
            "search": "Поиск:",
            "loadingRecords": "Загрузка записей...",
            "zeroRecords": "Записи отсутствуют.",
            "emptyTable": "В таблице отсутствуют данные",
            "lengthMenu": "На странице: _MENU_ ",
            "paginate": {
                "previous": "&lt;",
                "next": "&gt;"
            }
        },
        createdRow: function( row, data, dataIndex ) {

            switch (typeTable) {
                case 'objects':
                    $(row).html(App.templates.objects(data));
                    break;
                case 'nachisleniya':
                    $(row).html(App.templates.nachisleniya(data));
                    break;
                case 'platezhi':
                    $(row).html(App.templates.platezhi(data));
                    break;
                case 'zayavki':
                    $(row).html(App.templates.zayavki(data));
                    break;
                case 'history':
                    $(row).html(App.templates.history(data));
                    break;
            }

        }
    });


    $('body').on('submit', $form, function (e) {
        e.preventDefault();
        $datatable.ajax.reload();
    });
}

function dataInputChange($input) {
    let type = $input.data('input-type');
    let $form = $input.closest('form');
    let value = +($input.val());

    if (type === 'sum') {
        let $rateInput = $form.find('[data-input-type="rate"]');
        let $sumTotalInput = $form.find('[data-input-type="sumTotal"]');

        if ($rateInput && $sumTotalInput) {
            let rate = +($rateInput.data('value'));
            let rateVal = (value * rate).toFixed(2);
            $rateInput.val(rateVal);

            let sumTotalVal = (+value + +rateVal).toFixed(2);
            $sumTotalInput.val(sumTotalVal);
        }
    }
}

function validateForm($form) { // Валидация

    let inputs = $form.find('.form-control:input:not(.no-validate)');

    inputs.each(function () {

        let input = (this);

        if (input.checkValidity() === false) {
            let inputCustomValidation = new CustomValidation();
            inputCustomValidation.checkValidity(input);
            let customValidityMessage = inputCustomValidation.getInvalidities();
            let $invalidFeedback = $(input).parents('.form-group').find('.invalid-feedback');
            $invalidFeedback.html(customValidityMessage);
        }

        if (input.hasAttribute('data-password-equal')) {
            checkEqualPasswords(input);
        }

    });

    $form.addClass('was-validated');

    let $errorInput = $form.find('.form-control:invalid:not(.no-validate)');

    return !$errorInput.length;

}

function CustomValidation() { }

CustomValidation.prototype = {
    invalidities: [],

    checkValidity: function(input) {

        this.invalidities = [];

        var validity = input.validity;

        if (validity.patternMismatch) {
            let placeholder = $(input).attr('placeholder');
            this.addInvalidity('Введите данные в виде ' + placeholder);
        }

        if (validity.rangeOverflow) {
            let max = $(input).attr('max');
            this.addInvalidity('Максимальное значение ' + max);
        }

        if (validity.rangeUnderflow) {
            let min = $(input).attr('min');
            this.addInvalidity('Мимальное значение ' + min);
        }

        if (validity.stepMismatch) {
            this.addInvalidity('Значение не соответствует указаному шагу');
        }

        if (validity.tooLong) {
            let max = $(input).attr('maxlength');
            let textCount = num2str( max, ['символ', 'символа', 'символов']);
            this.addInvalidity('Максимум ' + max + ' ' + textCount);
        }

        if (validity.tooShort) {
            let min = $(input).attr('minlength');
            let textCount = num2str( min, ['символ', 'символа', 'символов']);
            this.addInvalidity('Минимум ' + min + ' ' + textCount);
        }

        if (validity.typeMismatch) {
            let type = $(input).attr('type');
            this.addInvalidity('Некорректный ' + type);
        }

        if (validity.valueMissing) {
            this.addInvalidity('Обязательное поле');
        }
    },

    addInvalidity: function(message) {
        this.invalidities.push(message);
    },

    getInvalidities: function() {
        return this.invalidities.join('. \n');
    }
};

function checkEqualPasswords(input) {
    let $form = $(input).parents('form');

    let $password1 = $form.find('[data-password-origin]').val();
    let $password2 = $form.find('[data-password-equal]').val();

    if ( $password1 !== $password2 ) {
        let customValidityMessage = "Пароли не совпадают";
        input.setCustomValidity(customValidityMessage);
        let $invalidFeedback = $(input).parents('.form-group').find('.invalid-feedback');
        $invalidFeedback.html(customValidityMessage);
    }
    else {
        input.setCustomValidity("");
    }
}

var AjaxForm = {
    initialize: function (afConfig) {
        $(document).on('submit', afConfig['formSelector'], function (e) {
            var thsForm = $(this);
            $(this).ajaxSubmit({
                dataType: 'json',
                url: afConfig['actionUrl'],
                beforeSerialize: function (form) {
                    //Валидация
                    let $form = $(form);
                    if (!validateForm($form)) {
                        return false;
                    }
                    return true;
                },
                beforeSubmit: function (fields, form) {
                    if (typeof(afValidated) != 'undefined' && afValidated == false) {
                        return false;
                    }
                    form.find('.error').html('');
                    form.find('.error').removeClass('error');
                    form.find('button').attr('disabled', true);
                    return true;
                },
                success: function (response, status, xhr, form) {
                    form.find('button').attr('disabled', false);
                    response.form = form;
                    $(document).trigger('af_complete', response);

                    if (!response.success) {
                        AjaxForm.Message.error('error', response.message);
                    } else {

                        if (response.message) {
                            AjaxForm.Message.success(response.status, response.message);
                        }

                        if (response.refresh) {
                            window.location.reload();
                        }

                        if (response.redirect) {
                            location.href = response.redirect;
                        }

                    }
                }
            });
            e.preventDefault();
            return false;
        });

        $(document).on('reset', afConfig['formSelector'], function () {
            AjaxForm.Message.close();
        });
    },

    Message: {
        success: function (status, message) {
            ajaxFormMessage(status, message);
        },
        error: function (status, message) {
            ajaxFormMessage(status, message);
        },
        close: function () {}

    }
};

function ajaxFormMessage(status, message) {
    let $infoModal = $('#infoModal');
    $infoModal.find('.modal-body').html();
    $infoModal.find('.modal-body').html(message);
    $infoModal.modal('show');
}

function reload() {
    window.document.location.reload(true);
}

function reinitSelect($selects) {
    $selects.each(function () {
        var $select = $(this);
        $select.trigger('change.select2');
    })
}

function num2str(n, text_forms) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}


Handlebars.registerHelper('get_length', function (obj) {
    return obj.length + 1;
});