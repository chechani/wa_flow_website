import { useState } from "react"
import ModalVideo from 'react-modal-video'

export default function VideoBox() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
           <i className="icon-play" onClick={() => setOpen(true)} style={{color:"white",fontWeight:"bold"}}/>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
