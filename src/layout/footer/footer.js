import React from 'react'function Footer() {    return (        <footer className="page-footer blue darken-3">            <div className="footer-copyright">                <div className="container">                    © {new Date().getFullYear()} Copyright Text                    <a className="grey-text text-lighten-4 right" href="https://github.com/arttusulkonen/react-movies-app">Github</a>                </div>            </div>        </footer>    )}export default Footer;