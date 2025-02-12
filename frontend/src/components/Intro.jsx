// import React from "react";

function Intro() {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"
        >
            
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            
                <div className="flex items-center gap-6">
                    <figure className="img-box w-10 h-10 md:w-16 md:h-16 rounded-lg">
                        <img
                            src="/assets/code-pic.jpg"
                            className="img-cover rounded-lg"
                            alt="Tony Lomax Portrait"
                        />
                    </figure>
                    <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                        Tony Lomax
                    </h1>
                </div>

                <div>    
                    <p className="text-base md:text-xl mb-3 font-medium *:">
                        Software Engineer & Web Developer
                    </p>
                </div>

                <div>
                    <p className="text-sm max-w-xl mb-6 font-bold">
                        Talk about your journey over the last ten years and why you switched to the CS industry.
                        Flex those writing skills bruhthah. Link to Blog page component or gitgun or linkedin.
                    </p>        
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Intro;