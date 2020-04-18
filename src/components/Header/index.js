import React, { Component } from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { Actions as BookActions } from '../../store/ducks/books';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from '../../services/api';


import './style.css';

class Header extends Component {
    state = {
        inputValue: ''
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleEnter = async (e) => {
        if (e.key === "Enter") {
            const bookName = this.state.inputValue;
            this.props.BookActions.setInputBook(bookName);

            this.props.BookActions.setLoadingTrue();
            const books = await this.getBooks(bookName);

            this.props.BookActions.setBooks(books.data.items);

            this.props.BookActions.setLoadingFalse();
            console.log(books.data.items);
        }
    }

    getBooks = (bookName) => {
        return api.get('/volumes', {
            params: {
                q: bookName
            }
        });
    }

    render() {
        return (
            <div className="header-container">
                <FiBookOpen></FiBookOpen>
                <input type="text" onChange={e => this.handleInputChange(e)} onKeyPress={e => this.handleEnter(e)} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books
});

const mapDispatchToProps = dispatch => ({
    BookActions: bindActionCreators(BookActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);