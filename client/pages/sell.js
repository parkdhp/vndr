import CreateItem from '../components/CreateItem';
import PleaseSignin from '../components/PleaseSignin';

const Sell = props => (
  <React.Fragment>
    <PleaseSignin>
      <CreateItem />
    </PleaseSignin>
  </React.Fragment>
);

export default Sell;
