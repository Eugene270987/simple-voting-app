import {Component} from 'react';
import {string} from 'prop-types';
import './SmileCard.scss'

export default class SmileCard extends Component {
    handleClick = () => {
        const {onVote, id} = this.props;
        onVote(id);
    }
    render() {
        const {smile, title, description} = this.props;
        return(
            <div className="smileCard" onClick={this.handleClick}>
                <div className="smileCard__img">{smile}</div>
                <div>
                    <h3>{title}</h3>
                    <div>{description}</div>
                </div>
            </div>
        )
    }
}

SmileCard.propTypes = {
    smile: string,
    title: string,
    description: string
};

SmileCard.defaultProps = {
    smile: 'Smile',
    title: 'Title',
    description: 'Description'
}