 export function validEmail(props,box) {
   let error = '';
   let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|co)\b/;
   let regexCo = /.+@.+\.co$/;
    if (props ===' ') {
       error = 'Email address is required';

    } else if (!(new RegExp(regex).test(props))) {
       error = 'Please provide a valid e-mail address';

    } else if ((new RegExp(regexCo).test(props))) {
       error = 'We are not accepting subscriptions from Colombia emails';

    } else if (!box){
       error = 'You must accept the terms and conditions';
    } else {
       error = false;

    }
    return error;
 }