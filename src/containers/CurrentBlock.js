import { connect } from 'react-redux';
import Block from '../components/Block';

const mapStateToProps = ({ currentBlock }) => ({
    shape: currentBlock.shape,
    name: currentBlock.name,
    color: currentBlock.color,
    offsetX: currentBlock.offsetX,
    offsetY: currentBlock.offsetY
});

const CurrentBlock = connect(
    mapStateToProps
)(Block);

export default CurrentBlock;