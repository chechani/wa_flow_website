import Layout from "@/components/layout/Layout"
import Head from 'next/head'
import About4 from "@/components/sections/About4"
import BotFaq from "./BotFaqs"
import ElementNewsletter from "./elements/newsteller"
import Content6 from "@/components/sections/Content6"
import Service3 from "@/components/sections/Service3"
import HeroSlider8 from "@/components/sections/HeroSlider8"
import LeandingPageContent from "./LeandingPageContent"
import About3 from "@/components/sections/About3"

export default function Home1() {

    return (
        <>
            <Head>
                <title>AIWABot WhatsApp Chatbot Marketing Powered by AI</title>
            </Head>
            <Layout headerStyle={9} footerStyle={1}>
                <HeroSlider8/>
                <LeandingPageContent/>
                <About4 />
                <About3/>
                {/* <Content6 />
                <Service3 />                
                <BotFaq />
                <ElementNewsletter /> */}
            </Layout>
        </>
    )
}