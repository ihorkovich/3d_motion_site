
export const AdditionalInfoSection = () => {
    return (
        <div className="font-host text-lg text-white pb-20 
            md:[word-spacing:0.125rem] lg:px-10 lg:text-3xl xl:text-4xl">
            <p className="px-6 md:px-6 lg:px-0 md:indent-6 lg:indent-14 lg:pb-32">
                {import.meta.env.VITE_THEM_ABOUT_ADDITIONAL.toUpperCase()}
            </p>
        </div>
    )
}