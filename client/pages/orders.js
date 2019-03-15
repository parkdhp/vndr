import React from 'react';
import PleaseSignin from '../components/PleaseSignin';
import OrderList from '../components/OrderList';

const OrderPage = props => (
  <React.Fragment>
    <PleaseSignin>
      <OrderList />
    </PleaseSignin>
  </React.Fragment>
);

export default OrderPage;
