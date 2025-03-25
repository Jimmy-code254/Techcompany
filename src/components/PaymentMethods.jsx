import React from 'react';

function PaymentMethods() {
  return (
    <div className="payment-methods" style={{ textAlign: 'center' }}>
      <h2 className='text-success'>Accepted Payment Methods</h2>
      <div
        className="payment-methods-list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <img src="/images/logo_visa.webp" alt="Visa" style={{ width: '100px' }} />
        <img src="/images/logo_mastercard.webp" alt="MasterCard" style={{ width: '100px' }} />
        <img src="/images/logo_mpesa.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_lipapay.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_ipay.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_UnionPay.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_KCB.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_Ecobank.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/T.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/logo_CreditBank.webp" alt="Mpesa" style={{ width: '100px' }} />
        <img src="/images/loge_airtel.webp" alt="Airtel" style={{ width: '100px' }} />

      </div>
    </div>
  );
}

export default PaymentMethods;
