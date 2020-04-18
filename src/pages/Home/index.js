import React, { Component } from 'react';
import Book from '../../components/Book';
import Loading from '../../components/Loading';

import { Actions as BookActions } from '../../store/ducks/books';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import './style.css';

class Home extends Component {

    componentDidUpdate() {
        this.generateBooks();
    }

    generateBooks = () => {
        // debugger;
        if (!this.props.books.books) {
            return (
                <Book
                    empty={true}
                />
            )
        }

        if (this.props.books.books.length > 0) {
            const items = this.props.books.books.map(item => {
                const volumeInfo = item.volumeInfo;
                const saleInfo = item.saleInfo;

                return (
                    <Book
                        key={item.id}
                        volumeInfo={volumeInfo}
                        saleInfo={saleInfo}
                    />
                );
            });

            return items;
        }
        else {
            return <></>
        }
    }

    render() {
        return (
            <div className="home-container">
                {this.props.books.loading ? <Loading /> : <></>}
                {this.generateBooks()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);