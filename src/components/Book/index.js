import React, { Component } from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { BookContainer, BookInfo } from './style';


class Book extends Component {
    generateEmptyBook = () => {
        return (
            <BookContainer>
                <div>
                    <FiBookOpen size={100} />
                </div>
                <BookInfo>
                    <p><strong>Não foi possivel encontrar resultados para sua pesquisa</strong></p>
                    <p><strong>T_T</strong></p>
                </BookInfo>
            </BookContainer>
        );
    }

    generateBook = () => {
        const { title, subtitle, authors, publishedDate, description, imageLinks } = this.props.volumeInfo;
        const { listPrice, buyLink } = this.props.saleInfo;

        return (
            <BookContainer>
                <div>
                    {imageLinks ? <img src={imageLinks.thumbnail} /> : <FiBookOpen size={100} />}
                </div>
                <BookInfo>
                    <p><strong>Autor:</strong> {authors ? authors[0] : "Autor não encontrado"} </p>
                    <p><strong>Título:</strong> {title} - {subtitle} </p>
                    <p><strong>Publicação:</strong> {publishedDate} </p>
                    <p><strong>Preço: </strong>{listPrice ? `R$ ${listPrice.amount}` : <>Sem preço</>}</p>
                    {/* <p>Descrição: {description} </p> */}
                </BookInfo>
            </BookContainer>
        );
    }

    render() {
        return (
            <>{this.props.empty ? this.generateEmptyBook() : this.generateBook()}</>
        )
    }
}

export default Book;