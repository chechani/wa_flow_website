import Layout from "@/components/layout/Layout"
import Head from 'next/head'
import About4 from "@/components/sections/About4"
import About3 from "@/components/sections/About3"
import HeroSlider10 from "@/components/sections/HeroSlider10"
import About2 from "@/components/sections/About2"
import About5 from "@/components/sections/About5"
import WaFLowDemo from "./elements/wa_flow_demos"
import DemoVideos from "./elements/demo_videos"

export default function Home1() {

    return (
        <>
            <Head>
                <title>WhatsApp flow</title>
            </Head>
            <Layout headerStyle={9}footerStyle={1}>
                <HeroSlider10/>
                {/* <WaFLowDemo/> */}
                <DemoVideos/>
                <About4 />
                <About3/>
                <About2/>
                <About5/>
            </Layout>
        </>
    )
}