$(document).ready(function(){

    validateNovaPoshta();
    validatePrivatePay();


    $('.js-remove').on('click', function() {

        $.ajax({
            url: $(this).data('url'),
            method: 'POST'
        }).done(setTimeout( function(){
            window.location.reload();
        }, 200));

    });

    $('.form-checkbox input[type="radio"]').change(function(e) {

        if (e.target.value === 'З Відділення Нова Пошта') {
            $('#nova-poshta').css({display: 'block'});
        } else {
            $('#nova-poshta').css({display: 'none'});
        }
    });

    function validateNovaPoshta(){
        let poshta = document.getElementById('payment_form_delivery_1');
        if (poshta.checked) {
            $('#nova-poshta').css({display: 'block'});
        } else {
            $('#nova-poshta').css({display: 'none'});
        }
    }

    $('.checkout-pay input[type="radio"]').change(function(e) {

        if (e.target.value === 'Privat Pay') {
            $('#sub-info-help').css({display: 'block'});
        } else {
            $('#sub-info-help').css({display: 'none'});
        }
    });

    function validatePrivatePay(){
        let privatpay = document.getElementById('payment_form_pay_1');

        if (privatpay.checked) {
            $('#sub-info-help').css({display: 'block'});
        } else {
            $('#sub-info-help').css({display: 'none'});
        }
    }

    window.novaposhtaAutocomplete = function (e) {

        var target1 = e.currentTarget;
        var sub_loc = document.querySelector('[name="payment_form[warehouse]"]');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'https://api.novaposhta.ua/v2.0/json/',
            data: JSON.stringify({
                modelName: 'Address',
                calledMethod: 'searchSettlements',
                methodProperties: {
                    CityName: target1.value,
                    Limit: 5
                },
                apiKey: '03eb1035952bce16b3e84f1b2003bccf'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            success: function(poshta_data) {

                if (poshta_data.data[0] && poshta_data.data[0].Addresses && poshta_data.data[0].Addresses.length){
                    sub_loc.innerHTML = "";
                    var parent_ul = document.createElement("ul");

                    poshta_data.data[0].Addresses.forEach(function (e) {
                        var parent_li = document.createElement("li");
                        parent_li.innerHTML = e.MainDescription + " - " + e.Area + " " + e.ParentRegionCode;
                        parent_li.setAttribute("data-address", JSON.stringify(e));

                        parent_li.addEventListener("click", function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            var target2 = e.currentTarget;
                            var li_value = JSON.parse(target2.dataset.address);
                            target1.value = li_value.MainDescription + " - " + li_value.Area + " " + li_value.ParentRegionCode;

                            if ( sub_loc && li_value.DeliveryCity ) {

                                $.ajax({
                                    type: 'POST',
                                    dataType: 'json',
                                    url: 'https://api.novaposhta.ua/v2.0/json/',
                                    data: JSON.stringify({
                                        modelName: 'AddressGeneral',
                                        calledMethod: 'getWarehouses',
                                        methodProperties: { CityRef: li_value.DeliveryCity },
                                        apiKey: '03eb1035952bce16b3e84f1b2003bccf'
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    success: function(address_data) {
                                        if (address_data.data && address_data.data.length) {

                                            address_data.data.forEach(function (e) {
                                                var adr_options = document.createElement("option");
                                                (adr_options.id = JSON.stringify(e));
                                                (adr_options.value = e.Description);
                                                (adr_options.innerHTML = e.Description);
                                                sub_loc.appendChild(adr_options);
                                            });

                                            var my_event = new Event("input", { bubbles: !0, cancelable: !0 });
                                            sub_loc.dispatchEvent(my_event);
                                        }
                                    },
                                });

                            }

                        });
                        parent_ul.appendChild(parent_li);
                        var check_ul = target1.parentNode.querySelector("ul");

                        check_ul && check_ul.parentNode.removeChild(check_ul);
                        target1.parentNode.appendChild(parent_ul);
                    });
                }
            },
        });
    };

    window.novaposhtaAutocompleteBlur = function (e) {
        let target = e.currentTarget;
        setTimeout(function () {
            var elem_ul = target.parentNode.querySelector("ul");
            elem_ul && elem_ul.parentNode.removeChild(elem_ul);
        }, 500);
    };

    window.warehouseSelectChange = function (e) {
        let target = e.currentTarget;
        let info = JSON.parse(target.options[target.selectedIndex].id);
        let work_time = document.querySelector(".delivery-information");

        info ? (target.classList.remove("required"),
            (work_time.innerHTML = "<p>Вантажопідйомність до <strong>"
                .concat(
                    info.TotalMaxWeightAllowed || "-",
                    '</strong> кг</p><br><p>Графік роботи відділення:</p><div class="schedule"><ul><li><strong>Пн</strong>: '
                )
                .concat(info.Schedule.Monday, "</li><li><strong>Вт</strong>: ")
                .concat(info.Schedule.Tuesday, "</li><li><strong>Ср</strong>: ")
                .concat(info.Schedule.Wednesday, "</li><li><strong>Чт</strong>: ")
                .concat(info.Schedule.Thursday, "</li></ul><ul><li><strong>Пт</strong>: ")
                .concat(info.Schedule.Friday, "</li><li><strong><span>Сб</span></strong>: ")
                .concat(info.Schedule.Saturday, "</li><li><strong><span>Нд</span></strong>: ")
                .concat(info.Schedule.Sunday, "</li></ul></div><p>Телефон: <strong>")
                .concat(info.Phone || "-", "</strong></p>")))
            : console.log('');
    };

});