import { connect } from 'react-redux';

import Lighting from '../components/Lighting';

const mapStateToProps = state => ({
    options: state.editor.present.scenery
});

export default connect(mapStateToProps)(Lighting);
