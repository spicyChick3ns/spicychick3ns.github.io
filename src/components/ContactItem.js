import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ContactItem extends Component {
    render() {
        let style;
        (this.props.type === 'github' || this.props.type === 'instagram')
        ? style = `fab fa-${this.props.type}` 
        : style = `far fa-${this.props.type}`
        return (
            <div className='contact-item'>
                <a target='_blank' href={this.props.url}>      
                    <i className={style}></i>
                </a>
            </div>
        );
    }
};

ContactItem.propTypes = {
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}
export default ContactItem;
