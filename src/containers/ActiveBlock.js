import { connect } from 'react-redux';
import BlockList from '../components/BlockList.js';

const mapStateToProps = (state) => ({
    grid: state.activeBlock
});

const ActiveBlock = connect(
    mapStateToProps
)(BlockList);

export default ActiveBlock;