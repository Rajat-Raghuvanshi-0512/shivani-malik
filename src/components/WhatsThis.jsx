import Info from "./Info"
import wt1 from '../assets/wt-1.webp'
import wt2 from '../assets/wt-2.webp'
import wt3 from '../assets/wt-3.webp'

const WhatsThis = () => {
    return (

        <div className="sm:px-[7%] px-7 2xl:pb-20 md:pb-10 flex flex-col">
            <Info orientation='sm:flex-row' image_url={wt1} description="I’ve known Ashley for over 4 years now and she continues to impress me. She is super smart with her media and content strategies and is incredibly business minded. She is a rare breed and one of the few that just gets ‘it.’ I highly recommend collaborating with Ashley." post="Entrepreneur, Author, Speaker" from="-Loren Iupsum" />

            <Info orientation='sm:flex-row-reverse' image_url={wt2} description="I’ve known Ashley for over 4 years now and she continues to impress me. She is super smart with her media and content strategies and is incredibly business minded. She is a rare breed and one of the few that just gets ‘it.’ I highly recommend collaborating with Ashley." post="Entrepreneur, Author, Speaker" from="-Loren Iupsum" />

            <Info orientation='sm:flex-row' image_url={wt3} description="I’ve known Ashley for over 4 years now and she continues to impress me. She is super smart with her media and content strategies and is incredibly business minded. She is a rare breed and one of the few that just gets ‘it.’ I highly recommend collaborating with Ashley." post="Entrepreneur, Author, Speaker" from="-Loren Iupsum" />

        </div>

    )
}

export default WhatsThis