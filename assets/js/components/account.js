import '../../styles/account.scss';

import $ from 'jquery';
import IMask from "imask";

$(document).ready(function() {

    let mask = IMask(document.getElementById('user_profile_form_phoneNumber'),
        {
            mask: '+{38}(000) 000-00-00',
            lazy: false
        });

});