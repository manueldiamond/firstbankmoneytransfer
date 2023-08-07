// import pattern from "src/app/assets/vector-bg.jpeg"
// import Image from "next/image"
const PatternBg=({bgScale=10, opacity=.2, x=0, y=0 , className,style,children})=>{
    return(
      <div className={` relative overflow-clip w-full h-full ${className} z-10`}>
        <div 
        // src={pattern} objectFit="cover"
         style={{scale:`${bgScale}`,
                    translate:`${x*bgScale}% ${y*bgScale}%`,
                    opacity:`${opacity}`,
                    
                    backgroundImage:`url(/images/vector-bg.jpeg)`
                    }} className={ ` origin-top-left w-full h-full absolute mix-blend-overlay   rounded-[1.2rem z-[-1]`}/>
        {children}
      </div>
    )
  }

export default PatternBg