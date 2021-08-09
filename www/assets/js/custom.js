"use strict";

if (ajaxPath === undefined) {
  var ajaxPath = 'http://localhost/ajax/callcenter/';
}

$(function () {
  if ($('[data-table-type]').length) {
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
    'mask': '9{0,15}.9{2}'
  });
  AjaxForm.initialize({
    'formSelector': '.ajax-form',
    'actionUrl': ajaxPath
  }); // Прикрепление файла

  var inputs = $('.form-control-file');
  inputs.each(function () {
    var $input = $(this);
    var label = $input.next('label');
    var labelVal = label.html();
    $input.on('change', function (e) {
      var fileName = '';

      if (this.files) {
        $input.addClass('files-attached');

        if (this.files.length > 1) {
          var textCountFiles = num2str(this.files.length, ['файл', 'файла', 'файлов']);
          fileName = 'Выбрано ' + this.files.length + ' ' + textCountFiles;
        } else {
          switch (this.files.length) {
            case 1:
              fileName = e.target.value.split('\\').pop();
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
  var $select = $(this).siblings('.select2-container');
  $select.addClass('changed');
});
$('body').on('submit', 'form', function () {
  var $inputs = $(this).find('input, select, textarea, .select2-container');
  $inputs.removeClass('changed');
});
$('body').on('click', '.slider-toggle', function () {
  // Развернуть доп.строку в таблице
  var $slider = $(this).closest('td').find('.slider-table');
  $slider.slideToggle();
  $(this).toggleClass('open');
});
$('body').on('change', '[data-step]', function () {
  // Смена категорий заявок при выборе вида заявки
  var $select = $(this);
  var step = +$select.data('step');
  var value = $select.val();
  var $selectNext = $("select[data-step='".concat(step + 1, "']"));

  if ($selectNext) {
    $selectNext.find('option').attr('disabled', 'disabled');
    $selectNext.find("option[data-parent='".concat(value, "']")).removeAttr('disabled');
    $selectNext.val('').trigger('change');
  }
});
$('body').on('click', '.see-password', function (e) {
  var $inputSee = $(this);
  var $inputPassword = $inputSee.siblings('input');
  var type = $inputPassword.attr('type');

  if (type === 'password') {
    $inputPassword.attr('type', 'text');
    $inputSee.addClass('open');
  } else {
    $inputPassword.attr('type', 'password');
    $inputSee.removeClass('open');
  }
});
$('body').on('input', '[type="password"]', function (e) {
  var $input = $(this);
  var inputLength = $input.val().length;
  var $inputSee = $input.siblings('.see-password');
  $input.attr('data-type', 'password');

  if (inputLength !== 0 && !$inputSee.length) {
    $inputSee = $('<div class="see-password"></div>');
    $input.after($inputSee);
  } else {
    if (inputLength === 0) {
      $inputSee.remove();
      $input.attr('type', 'password');
    }
  }
});

function initDatatable(typeTable) {
  var $form = $("[data-form-type = \"".concat(typeTable, "\"]"));
  var $datatable = $("[data-table-type = \"".concat(typeTable, "\"]")).DataTable({
    destroy: true,
    processing: true,
    dom: "<'row'<'col-12'tr>>" + "<'row'<'col-12 col-sm-6'p><'col-12 col-sm-6 d-none d-sm-block'l>>",
    info: false,
    search: false,
    serverSide: true,
    bServerSide: true,
    bPaginate: true,
    bLengthChange: true,
    lengthMenu: [[10, 20, 50], [10, 20, 50]],
    ajax: {
      "url": ajaxPath,
      "data": function data(d) {
        var $inputs = $form.find('input, select, textarea');
        $inputs.each(function () {
          d[$(this).attr('name')] = $(this).val();
        });
      }
    },
    fnDrawCallback: function fnDrawCallback(oSettings) {
      if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
        $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
      } else {
        $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
      }
    },
    columns: [{
      "data": null
    }],
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
    createdRow: function createdRow(row, data, dataIndex) {
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
  var type = $input.data('input-type');
  var $form = $input.closest('form');
  var value = +$input.val();

  if (type === 'sum') {
    var $rateInput = $form.find('[data-input-type="rate"]');
    var $sumTotalInput = $form.find('[data-input-type="sumTotal"]');

    if ($rateInput && $sumTotalInput) {
      var rate = +$rateInput.data('value');
      var rateVal = (value * rate).toFixed(2);
      $rateInput.val(rateVal);
      var sumTotalVal = (+value + +rateVal).toFixed(2);
      $sumTotalInput.val(sumTotalVal);
    }
  }
}

function validateForm($form) {
  // Валидация
  var inputs = $form.find('.form-control:input:not(.no-validate)');
  inputs.each(function () {
    var input = this;

    if (input.checkValidity() === false) {
      var inputCustomValidation = new CustomValidation();
      inputCustomValidation.checkValidity(input);
      var customValidityMessage = inputCustomValidation.getInvalidities();
      var $invalidFeedback = $(input).parents('.form-group').find('.invalid-feedback');
      $invalidFeedback.html(customValidityMessage);
    }

    if (input.hasAttribute('data-password-equal')) {
      checkEqualPasswords(input);
    }
  });
  $form.addClass('was-validated');
  var $errorInput = $form.find('.form-control:invalid:not(.no-validate)');
  return !$errorInput.length;
}

function CustomValidation() {}

CustomValidation.prototype = {
  invalidities: [],
  checkValidity: function checkValidity(input) {
    this.invalidities = [];
    var validity = input.validity;

    if (validity.patternMismatch) {
      var placeholder = $(input).attr('placeholder');
      this.addInvalidity('Введите данные в виде ' + placeholder);
    }

    if (validity.rangeOverflow) {
      var max = $(input).attr('max');
      this.addInvalidity('Максимальное значение ' + max);
    }

    if (validity.rangeUnderflow) {
      var min = $(input).attr('min');
      this.addInvalidity('Мимальное значение ' + min);
    }

    if (validity.stepMismatch) {
      this.addInvalidity('Значение не соответствует указаному шагу');
    }

    if (validity.tooLong) {
      var _max = $(input).attr('maxlength');

      var textCount = num2str(_max, ['символ', 'символа', 'символов']);
      this.addInvalidity('Максимум ' + _max + ' ' + textCount);
    }

    if (validity.tooShort) {
      var _min = $(input).attr('minlength');

      var _textCount = num2str(_min, ['символ', 'символа', 'символов']);

      this.addInvalidity('Минимум ' + _min + ' ' + _textCount);
    }

    if (validity.typeMismatch) {
      var type = $(input).attr('type');
      this.addInvalidity('Некорректный ' + type);
    }

    if (validity.valueMissing) {
      this.addInvalidity('Обязательное поле');
    }
  },
  addInvalidity: function addInvalidity(message) {
    this.invalidities.push(message);
  },
  getInvalidities: function getInvalidities() {
    return this.invalidities.join('. \n');
  }
};

function checkEqualPasswords(input) {
  var $form = $(input).parents('form');
  var $password1 = $form.find('[data-password-origin]').val();
  var $password2 = $form.find('[data-password-equal]').val();

  if ($password1 !== $password2) {
    var customValidityMessage = "Пароли не совпадают";
    input.setCustomValidity(customValidityMessage);
    var $invalidFeedback = $(input).parents('.form-group').find('.invalid-feedback');
    $invalidFeedback.html(customValidityMessage);
  } else {
    input.setCustomValidity("");
  }
}

var AjaxForm = {
  initialize: function initialize(afConfig) {
    $(document).on('submit', afConfig['formSelector'], function (e) {
      var thsForm = $(this);
      $(this).ajaxSubmit({
        dataType: 'json',
        url: afConfig['actionUrl'],
        beforeSerialize: function beforeSerialize(form) {
          //Валидация
          var $form = $(form);

          if (!validateForm($form)) {
            return false;
          }

          return true;
        },
        beforeSubmit: function beforeSubmit(fields, form) {
          if (typeof afValidated != 'undefined' && afValidated == false) {
            return false;
          }

          form.find('.error').html('');
          form.find('.error').removeClass('error');
          form.find('button').attr('disabled', true);
          return true;
        },
        success: function success(response, status, xhr, form) {
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
    success: function success(status, message) {
      ajaxFormMessage(status, message);
    },
    error: function error(status, message) {
      ajaxFormMessage(status, message);
    },
    close: function close() {}
  }
};

function ajaxFormMessage(status, message) {
  var $infoModal = $('#infoModal');
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
  });
}

function num2str(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;

  if (n > 10 && n < 20) {
    return text_forms[2];
  }

  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }

  if (n1 == 1) {
    return text_forms[0];
  }

  return text_forms[2];
}

Handlebars.registerHelper('get_length', function (obj) {
  return obj.length + 1;
});