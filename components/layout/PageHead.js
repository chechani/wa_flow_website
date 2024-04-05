import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "AIWABot"}
                </title>
            </Head>
        </>
    )
}
export default PageHead;