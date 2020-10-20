import { connect } from 'react-redux';
import Import from '../components/Import';

const mapStateToProps = (state) => {
    return {
        makes: state.makes 
    }
}

export default connect(mapStateToProps)(Import)