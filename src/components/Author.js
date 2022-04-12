import React from 'react'
import PropTypes from "prop-types";

const Author = props => {
    const author = this.props.author

    return (
        <li>{author}</li>
    );
}
Author.propTypes = {
    author : PropTypes.object
}
export default Author;