export default function Preloader() {
    return (
        <>
            <div className="preloader-wrap">
                <div className="preloader" style={{ backgroundImage: 'url(/assets/images/preloader1.gif)' , backgroundColor:"white"}}>
                </div>
                <div className="overlay" />
            </div>
        </>
    )
}
