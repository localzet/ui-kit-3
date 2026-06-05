<template>
    <div
        class="absolute bottom-0 top-0 left-0 right-0 z-10 mx-auto overflow-y-auto overflow-x-hidden rounded-xl md:p-5"
        :style="{ width: documentSize + '%' }"
    >
		<div
			v-if="isLoading"
			class="mx-auto fixed left-0 right-0 top-1/2 translate-y-5 w-full z-10"
		>
			<Spinner />
		</div>
        <pdf
            :src="pdfData"
            v-for="i in numPages"
            :key="`${i}-${documentSize}`"
            :resize="false"
            :page="i"
            scale="page-width"
            id="printable-file"
            class="pdf-preview-page mx-auto mb-6 w-full overflow-hidden md:rounded-xl md:shadow-lg"
			@loading="documentLoaded"
        />
    </div>
</template>

<script>
import Spinner from "../../UI/Others/Spinner"
import { events } from '../../../bus'
import pdf from 'pdfvuer'

export default {
    name: 'PdfFile',
    components: {
		Spinner,
        pdf,
    },
    props: [
		'file'
	],
    watch: {
        file() {
            this.getPdf()
			this.isLoading = true
        },
    },
    data() {
        return {
            pdfData: undefined,
            documentSize: 50,
            documentOrientation: 'portrait',
			isLoading: true,
            numPages: 0,
        }
    },
    methods: {
		documentLoaded() {
			this.isLoading = false
		},
        getPdf() {
            this.pdfData = undefined
            this.numPages = 0
            this.isLoading = true

            let self = this

            self.pdfData = pdf.createLoadingTask(this.file.data.attributes.file_url)

            self.pdfData.then((pdf) => {
                self.numPages = pdf.numPages

                return pdf.getPage(1)
            }).then((page) => {
                let viewport = page.getViewport({ scale: 1 })

                self.documentOrientation = viewport.width > viewport.height ? 'landscape' : 'portrait'
                self.setDocumentSize()
            }).catch(() => {
                self.isLoading = false
            })
        },
        getDocumentSizeKey() {
            return `documentSize:${this.documentOrientation}`
        },
        getDefaultDocumentSize() {
            return this.documentOrientation === 'landscape' ? 80 : 50
        },
        setDocumentSize() {
            if (window.innerWidth < 960) {
                this.documentSize = 100
                return
            }

            let savedSize = parseInt(localStorage.getItem(this.getDocumentSizeKey()))

            this.documentSize = Number.isInteger(savedSize)
                ? savedSize
                : this.getDefaultDocumentSize()
        },
        zoomIn() {
            if (this.documentSize < 100) {
                this.documentSize += 10
                localStorage.setItem(this.getDocumentSizeKey(), this.documentSize)
            }
        },
        zoomOut() {
            if (this.documentSize > 40) {
                this.documentSize -= 10
                localStorage.setItem(this.getDocumentSizeKey(), this.documentSize)
            }
        },
    },
    created() {
        this.getPdf()

        events.$on('document-zoom:in', this.zoomIn)
        events.$on('document-zoom:out', this.zoomOut)
    },
    destroyed() {
        events.$off('document-zoom:in', this.zoomIn)
        events.$off('document-zoom:out', this.zoomOut)
    },
}
</script>

<style src="pdfvuer/dist/pdfvuer.css" lang="css"></style>

<style lang="scss">
.pdf-preview-page {
    > div,
    #viewerContainer,
    #viewer {
        max-width: 100%;
    }

    .pdfViewer .page {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
