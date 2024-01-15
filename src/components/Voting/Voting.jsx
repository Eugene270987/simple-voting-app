import './Voting.scss'
import {Component} from 'react'
import SmileCard from '../SmileCard/SmileCard';
import PropTypes from 'prop-types';
import ButtonResults from '../ButtonResults/ButtonResults';

export default class Voting extends Component {
    state = {
        candidates: [],
        votes: {},
    }

    handleVote = (id) => {
        this.setState({
            votes: {
                ...this.state.votes,
                [id]: this.state.votes[id] + 1,
            }
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then(res => res.json())
            .then(result => {
                const initialVotes = {};

                result.forEach(item => {
                    initialVotes[item.id] = 0;
                });

                this.setState({
                    candidates: result,
                    votes: initialVotes,
                });
            })
    }

    render() {
        return (
            <div className="main">
                <h1>Choose the best smile ever!</h1>
                <div className="container">
                    {!this.state.candidates.length && <div>No candidates yet...</div>}
                    {this.state.candidates.map(item => (
                    <div key={item.id}>
                        <SmileCard
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            smile={item.smile}
                            onVote={this.handleVote}>
                        </SmileCard>
                        {this.state.votes[item.id]}
                    </div>
                    ))}
                </div>
                <ButtonResults buttonText="Show Results" candidates={this.state.candidates} votes={this.state.votes}></ButtonResults>
            </div>
        )
    }
}


Voting.propTypes = {
    votes: PropTypes.shape({
        1: PropTypes.number,
        2: PropTypes.number,
        3: PropTypes.number,
    }),
};

Voting.defaultProps = {
    votes: {
        1: 0,
        2: 0,
        3: 0,
    },
};
