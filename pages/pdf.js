import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import styles from '../components/layout.module.css'

export default function OpenPdf() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={styles.card}>
            <Document
                file='../public/files/fundamentals-of-computer-graphics-4th.pdf'
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}