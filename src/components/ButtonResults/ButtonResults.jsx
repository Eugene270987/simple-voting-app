import {Component} from 'react';
import './ButtonResults.scss';
import PropTypes from 'prop-types';


export default class ButtonResults extends Component {
    state = {
        resultsVisible: false,
    };

    showResults = () => {
        this.setState({ resultsVisible: true });
    };

    render() {
        const { buttonText, candidates, votes } = this.props;
        const { resultsVisible } = this.state;

        let results = null;
        if (resultsVisible) {
            results = candidates.map(candidate => (
                <div key={candidate.id}>
                    <p>{`${candidate.title}: ${votes[candidate.id]} votes`}</p>
                </div>
            ));
        }

        return (
            <div>
                <button type="button" className="btn-show" onClick={this.showResults}>
                    {buttonText}
                </button>
                {results && <div>{results}</div>}
            </div>
        );
    }
}

ButtonResults.propTypes = {
    buttonText: PropTypes.string,
    votes: PropTypes.object,

    candidates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            smile: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired
};


