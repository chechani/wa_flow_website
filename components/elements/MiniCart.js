
export default function MiniCart() {

    const handleWhatsApp = () => {
        window.location.href = 'https://wa.me/918005834930?text=Hi+there,+I+need+some+information./start:aiwabotwebsite/'; // Replace with your WhatsApp number
      };
    return (
        <>
            <div className="mini_cart_togglers fixed_cart">
                <i className="fa fa-whatsapp" style={{color:"#3cb371",fontSize:35}} onClick={handleWhatsApp}/>
            </div>

        </>
    )
}
