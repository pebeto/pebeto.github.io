import { useState } from 'react'
import { Page, Document, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from '@geist-ui/icons'
import { Grid, Link, Button, Spacer } from "@geist-ui/core";
import Wrapper from "../components/wrapper";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

Resume.displayName = "Resume";
export default function Resume() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = (offset: number) => { setPageNumber(prevPageNumber => prevPageNumber + offset) };
    const previousPage = () => { changePage(-1) };
    const nextPage = () => { changePage(1) };
    const goToFirstPage = () => { setPageNumber(1) };
    const goToLastPage = () => { setPageNumber(numPages!) };

    return (
        <Wrapper>
            <Grid justify="center" alignItems="center" xs={0} sm={25} md={25} lg={25}>
                <Document
                    file="resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <center>
                        <Button
                            auto
                            scale={2 / 3}
                            icon={<ChevronsLeft />}
                            disabled={pageNumber <= 1}
                            onClick={goToFirstPage}
                        />
                        <Spacer w={.5} inline />
                        <Button
                            auto
                            scale={2 / 3}
                            icon={<ChevronLeft />}
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        />
                        <Spacer w={.5} inline />
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        <Spacer w={.5} inline />
                        <Button
                            auto
                            scale={2 / 3}
                            icon={<ChevronRight />}
                            disabled={pageNumber >= numPages!}
                            onClick={nextPage}
                        />
                        <Spacer w={.5} inline />
                        <Button
                            auto
                            scale={2 / 3}
                            icon={<ChevronsRight />}
                            disabled={pageNumber >= numPages!}
                            onClick={goToLastPage}
                        />
                        <Spacer w={1} inline />
                        <Link href="resume.pdf">
                            <Button
                                auto
                                icon={<Download color="green" />}
                                onClick={nextPage}
                            >
                                Download
                            </Button>
                        </Link>
                    </center>
                    <Page scale={1.5} pageNumber={pageNumber} />
                </Document>
            </Grid>
            <Grid sm={0} md={0} lg={0}>
                You can download my resume{" "}
                <Link href="resume.pdf" color icon target="_blank">
                    here
                </Link>
                .
            </Grid>
        </Wrapper>
    );
}
