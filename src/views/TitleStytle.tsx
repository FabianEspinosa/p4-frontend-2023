import '../assets/title.scss';
interface props {
    titleText: string
}
function TitleStytle( {titleText}: props ) {
    return (
        <>
            <svg>
                <filter id="filter">
                    <feTurbulence type="turbulence" baseFrequency="0.002 0.008" numOctaves="2" seed="2" stitchTiles="stitch" result="turbulence" />
                    <feColorMatrix type="saturate" values="30" in="turbulence" result="colormatrix" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0
                                                            0 1 0 0 0
                                                            0 0 1 0 0
                                                            0 0 0 150 -15" in="colormatrix" result="colormatrix1" />
                    <feComposite in="SourceGraphic" in2="colormatrix1" operator="in" result="composite" />
                    <feDisplacementMap in="SourceGraphic" in2="colormatrix1" scale="15" xChannelSelector="R" yChannelSelector="A" result="displacementMap" />
                </filter>
            </svg>
            <div className="text-title">{titleText}</div>
        </>
    )
}

export default TitleStytle