import { connect } from 'react-redux';
import BlockList from '../components/BlockList.js';

const mapStateToProps = (state) => ({
    grid: state.activeBlocks
});

const ActiveBlocks = connect(
    mapStateToProps
)(BlockList);

export default ActiveBlocks;