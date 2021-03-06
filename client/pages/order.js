import React from 'react';
import PleaseSignin from '../components/PleaseSignin';
import Order from '../components/Order';

const OrderPage = props => (
  <React.Fragment>
    <PleaseSignin>
      <Order id={props.query.id}>{props}</Order>
    </PleaseSignin>
  </React.Fragment>
);

export default OrderPage;
