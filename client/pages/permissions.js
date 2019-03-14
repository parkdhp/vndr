import PleaseSignin from '../components/PleaseSignin';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
  <React.Fragment>
    <PleaseSignin>
      <Permissions />
    </PleaseSignin>
  </React.Fragment>
);

export default PermissionsPage;
