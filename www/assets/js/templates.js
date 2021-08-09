this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["history"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n                <td width=\"33%\" >"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n                <td width=\"34%\" > "
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<td class=\"p-0\" style=\"border: none !important;\">\r\n    <table class=\"w-100\">\r\n        <tr>\r\n            <td width=\"33%\" rowspan=\""
    + alias3((helpers.get_length || (depth0 && depth0.get_length) || alias2).call(alias1,(depth0 != null ? depth0.schetchiki : depth0),{"name":"get_length","hash":{},"data":data}))
    + "\" class=\"p-0 pr-2 pl-2\">"
    + alias3(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"data","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td width=\"33%\" class=\"d-none\"></td>\r\n            <td width=\"34%\" class=\"d-none\"></td>\r\n        </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.schetchiki : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\r\n</td>";
},"useData":true});
this["App"]["templates"]["nachisleniya"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"label\">Долг на начало периода</div><div class=\"paragraph\" style=\"color: #DF1E42\">"
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"label\">Переплата на начало периода</div><div class=\"paragraph\" style=\"color: green\">"
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"p-0\">\r\n    <div class=\"d-flex flex-wrap pt-3 pb-3 align-items-top align-items-lg-center\">\r\n        <div class=\"col-5 col-sm-12 col-md-3 col-lg-2 mb-sm-2 mb-md-0\">\r\n            <div class=\"paragraph color-blue\">"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-2\">\r\n            <div class=\"label\">Начислено</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.bill || (depth0 != null ? depth0.bill : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bill","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-3 offset-5 offset-sm-0 mt-2 mt-sm-0\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDebt : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-2 offset-5 offset-sm-0 mt-2 mt-sm-0\">\r\n            <div class=\"label\">К оплате</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.toPay || (depth0 != null ? depth0.toPay : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toPay","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n        </div>\r\n    </div>\r\n</td>";
},"useData":true});
this["App"]["templates"]["objects"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"paragraph\">"
    + container.escapeExpression(((helper = (helper = helpers.fio || (depth0 != null ? depth0.fio : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"fio","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"paragraph\">Долг "
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"paragraph\">Переплата "
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<td class=\"p-0\">\r\n    <div class=\"d-flex flex-wrap pt-3 pb-3 align-items-top align-items-lg-center\">\r\n        <div class=\"col-8 col-md-5 col-lg-3\">\r\n            <div class=\"label\">Лицевой счет</div>\r\n            <div class=\"paragraph color-blue\">"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-8 col-md-5 col-lg-3 mt-2 mt-md-0\">\r\n            <div class=\"label\">Адрес</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.adres || (depth0 != null ? depth0.adres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"adres","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-4 col-md-2 col-lg-6 d-flex\">\r\n            <div class=\"slider-toggle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"slider-table m-0\">\r\n        <div class=\"d-flex flex-wrap pt-3 pb-3 align-items-top align-items-lg-center\">\r\n            <div class=\"col-6 col-md-4\">\r\n                <div class=\"label\">Собственники</div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.owners : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n            <div class=\"col-6 col-md-4\">\r\n                <div class=\"label\">Общая площадь</div>\r\n                <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.square || (depth0 != null ? depth0.square : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"square","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </div>\r\n            <div class=\"col-12 col-md-4 mt-2 mt-md-0\">\r\n                <div class=\"label\">Состояние взаиморасчетов</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDebt : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"d-flex flex-wrap pb-3 align-items-top align-items-lg-center\">\r\n            <div class=\"col-12\">\r\n                <a class=\"marker d-inline-block mt-2\" href=\""
    + alias4(((helper = (helper = helpers["href-nachisleniya"] || (depth0 != null ? depth0["href-nachisleniya"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href-nachisleniya","hash":{},"data":data}) : helper)))
    + "\">Начисления</a>\r\n                <a class=\"marker d-inline-block mt-2\" href=\""
    + alias4(((helper = (helper = helpers["href-platezhi"] || (depth0 != null ? depth0["href-platezhi"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href-platezhi","hash":{},"data":data}) : helper)))
    + "\">Платежи</a>\r\n                <a class=\"marker d-inline-block mt-2\" href=\""
    + alias4(((helper = (helper = helpers["href-schetchiki"] || (depth0 != null ? depth0["href-schetchiki"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href-schetchiki","hash":{},"data":data}) : helper)))
    + "\">Показания счетчиков</a>\r\n                <a class=\"marker d-inline-block mt-2\" href=\""
    + alias4(((helper = (helper = helpers["href-zayavki"] || (depth0 != null ? depth0["href-zayavki"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href-zayavki","hash":{},"data":data}) : helper)))
    + "\">Заявки</a>\r\n                <a class=\"marker d-inline-block mt-2\" href=\""
    + alias4(((helper = (helper = helpers["href-cards"] || (depth0 != null ? depth0["href-cards"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href-cards","hash":{},"data":data}) : helper)))
    + "\">Настройки карт</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</td>";
},"useData":true});
this["App"]["templates"]["platezhi"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"label\">Долг на конец периода</div><div class=\"paragraph\" style=\"color: #DF1E42\">"
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"label\">Переплата на конец периода</div><div class=\"paragraph\" style=\"color: green\">"
    + container.escapeExpression(((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"credit","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"p-0\">\r\n    <div class=\"d-flex flex-wrap pt-3 pb-3 align-items-top align-items-lg-center\">\r\n        <div class=\"col-5 col-sm-12 col-md-3 col-lg-2 mb-sm-2 mb-md-0\">\r\n            <div class=\"paragraph color-blue\">"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-2\">\r\n            <div class=\"label\">Оплачено</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.bill || (depth0 != null ? depth0.bill : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bill","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-3 offset-5 offset-sm-0 mt-2 mt-sm-0\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDebt : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"col-7 col-sm-4 col-md-3 col-lg-2 offset-5 offset-sm-0 mt-2 mt-sm-0\">\r\n            <div class=\"label\">К оплате</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.toPay || (depth0 != null ? depth0.toPay : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toPay","hash":{},"data":data}) : helper)))
    + " ₽</div>\r\n        </div>\r\n    </div>\r\n</td>";
},"useData":true});
this["App"]["templates"]["zayavki"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"p-0\">\r\n    <a class=\"d-flex flex-wrap pt-3 pb-3 align-items-top align-items-lg-center\" href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"col-5 col-sm-12 col-lg-2\">\r\n            <div class=\"paragraph color-blue\">№ "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-lg-2 mt-0 mt-sm-2 mt-lg-0\">\r\n            <div class=\"label\">Дата</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-lg-2 offset-5 offset-sm-0 mt-2 mt-lg-0\">\r\n            <div class=\"label\">Вид работ</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers["type-work"] || (depth0 != null ? depth0["type-work"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type-work","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-7 col-sm-4 col-lg-2 offset-5 offset-sm-0 mt-2 mt-lg-0\">\r\n            <div class=\"label\">Категория</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-4 mt-2 mt-lg-0\">\r\n            <div class=\"label\">Статус</div>\r\n            <div class=\"paragraph\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n    </a>\r\n</td>";
},"useData":true});