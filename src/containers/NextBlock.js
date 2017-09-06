import { connect } from 'react-redux';
import Block from '../components/Block';

const mapStateToProps = ({ nextBlock }) => ({
    shape: nextBlock.shape,
    name: nextBlock.name,
    color: nextBlock.color,
    offsetX: nextBlock.offsetX,
    offsetY: nextBlock.offsetY
});

const NextBlock = connect(
    mapStateToProps
)(Block);

export default NextBlock;