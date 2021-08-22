import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"/>
                </Head>
                <body className="hold-transition dark-mode layout-fixed layout-footer-fixed">
                    <div className="wrapper">
                        <Main />
                        <NextScript />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/plugins/jquery/jquery.min.js" type="text/javascript" />
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/plugins/jquery-ui/jquery-ui.min.js"/>
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/plugins/moment/moment.min.js" />
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js" />
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" />
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="/assets/dist/js/adminlte.js" />
                </body>
            </Html>
        )
    }


}
export default MyDocument