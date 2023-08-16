const Info = (props) => {
    return (
        <div className={`flex 2xl:mt-20 md:mt-6 justify-between items-center w-full md:space-x-6 2xl:space-x-10 flex-col ${props.orientation}`}>
            <div className='sm:w-1/3 md:w-2/5'>
                <img className='w-full' src={props.image_url} alt="not found" ></img>
            </div>
            <div className='sm:w-3/5 md:w-1/2 flex flex-col justify-between h-full sm:mb-0 mb-12'>
                <div className='2xl:text-[24px] md:text-base font-Questrial'>{props.description}</div>
                <div className='2xl:text-[52px] md:mt-7 md:mb-2 text-4xl font-Rockness text-beigePrimary'>{props.from}</div>
                <div className='2xl:text-[48px] md:text-3xl sm:text-3xl font-Italiana text-xl'>{props.post}</div>
            </div>

        </div>
    )
}

export default Info