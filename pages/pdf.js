import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styles from '../components/layout.module.css'
import { pdfjs } from 'react-pdf';
export default function pdf() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // outnumber = document.getElementById("jumpNumber").value;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    function jumpPage(){
        pageNumber = document.getElementById("jumpNumber").value;
        setPageNumber(pageNumber);
        // TODO: Fuck
    }
    function onItemClick({ pageNumber: itemPageNumber }) {
        setPageNumber(itemPageNumber);
    }

    return (
        <div className={styles.pdf}>
            <Document
                file='/files/fundamentals-of-computer-graphics-4th.pdf'
                onLoadSuccess={onDocumentLoadSuccess}
                options={{
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                }}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
                <input
                    type='Number'
                    id='jumpNumber'
                    defaultValue={pageNumber}
                    max={numPages}
                    min='1'
                ></input>
                <button
                type='button'
                onClick={jumpPage}
                >Jump</button>
            </div>
        </div>
    );
}