import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = (state) => ({
    isPlaying: state.gameStatus !== 'IDLE'
});

const MenuContainer = connect(
    mapStateToProps
)(Menu);

export default MenuContainer;