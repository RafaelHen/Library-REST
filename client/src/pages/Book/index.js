import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Power } from 'react-feather';


export default function Book(){

    return (
        <div className="book-conatiner">
            <header>
                <h4>Logo</h4>
                <span>Bem vindo, <strong>Rafael</strong>!</span>
                <Link className="button" to="book/new">Adicionar Novo Livro</Link>
                <button type="button">
                    <Power color="gray" size={18} />
                </button>
            </header>
        </div>
    );
}