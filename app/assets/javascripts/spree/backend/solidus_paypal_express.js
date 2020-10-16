//= require spree/backend

SolidusPaypalExpress = {
  hideSettings: function(paymentMethod) {
    if (SolidusPaypalExpress.paymentMethodID && paymentMethod.val() == SolidusPaypalExpress.paymentMethodID) {
      $('.payment-method-settings').children().hide();
      $('#payment_amount').prop('disabled', 'disabled');
      $('button[type="submit"]').prop('disabled', 'disabled');
      $('#paypal-warning').show();
    } else if (SolidusPaypalExpress.paymentMethodID) {
      $('.payment-method-settings').children().show();
      $('button[type=submit]').prop('disabled', '');
      $('#payment_amount').prop('disabled', '')
      $('#paypal-warning').hide();
    }
  }
}

$(document).ready(function() {
  checkedPaymentMethod = $('[data-hook="payment_method_field"] input[type="radio"]:checked');
  SolidusPaypalExpress.hideSettings(checkedPaymentMethod);
  paymentMethods = $('[data-hook="payment_method_field"] input[type="radio"]').click(function (e) {
    SolidusPaypalExpress.hideSettings($(e.target));
  });
})
