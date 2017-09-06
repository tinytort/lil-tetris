import { connect } from 'react-redux';
import GameInfo from '../components/GameInfo';

const mapStateToProps = ({ gameScore, nextBlock }) => ({
    points: gameScore.points,
    clearedLines: gameScore.clearedLines,
    nextBlock
});

const CurrentGameInfo = connect(
    mapStateToProps
)(GameInfo);

export default CurrentGameInfo;