import React, { useEffect } from 'react';
import './Vision.css'

const Vision = () => {

    useEffect(()=>{
    

        const reset = (top,base,lines) =>{

            let i = 0;
            let scale = 1;
            let end = 0;
      
            while(end<=lines.length){
                end++;
                base = base + 100;
                i = base + 100;
                if(top>=base && top<=i){
                }
            }

        }


    

        const textAnimate = (top,base,lines,speed) => {
    
          let i = 0;
          let scale = 1;
          let end = 0;
    
          while(end<=lines.length){
            end++;
            base = base + 100;
            i = base + 100;
    
            if(top >= base && top <= i){
              scale = ((i - top) / 100) ; 
              scale = scale.toFixed(1)
              lines[end-1].style.transform = `translate3d(0px, 0px, 0px) scale(${scale}, 1)`;

                // Reset remaining lines
                for(let a=end;a<=lines.length;a++){
                    lines[a].style.transform = `translate3d(0px, 0px, 0px) scale(1, 1)`;
                }
                for(let b=end;b>=0;b--){
                    lines[b].style.transform = `translate3d(0px, 0px, 0px) scale(0, 1)`;
                }

            }


          }
    
    
        }


        window.addEventListener('scroll',(event) => {

            // let topM = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            // const linesM = document.querySelectorAll(".intro-p-m .intro-line-mark");
            // textAnimate(topM,0,linesM,2);

            let top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            const lines = document.querySelectorAll(".intro-p .intro-line-mark");
            textAnimate(top,900,lines,1);

        });
    
    
      })

    return (
        <div className="vision" uk-scrollspy="cls: uk-animation-scale-up; delay: 300">
            <h2>
            <span>Our</span> Vision
            </h2>
            <p className="intro-p">
                <div className="p-div">
                    At Qwikio, We Are Guided by the firm belief that
                    <span className="intro-line-mark"></span>
                </div>

                <div className="p-div">
                    The future of our planet is our collective responsibility.
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                     This belief propels our business policies and
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    our innovative product designs. At every step
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                     in our process, we  prioritize building cars and
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    mobility solutions that are both comfortably 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    affordable and eco-friendly. Above all else,
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                     we want to play a lead role in the propagation
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                     of a clean environment for everyone.
                    <span className="intro-line-mark"></span>
                </div>
                {/* <div className="p-div">
                    
                    <span className="intro-line-mark"></span>
                </div> */}
            {/* <span>
                At Qwikio, we are guided by the firm belief that the future of our
                planet is our collective responsibility. This belief propels our
                business policies and
            </span>{" "} */}
            {/* our innovative product designs. At every step in our process, we
            prioritize building cars and mobility solutions that are both
            comfortably affordable and eco-friendly. Above all else, we want to
            play a lead role in the propagation of a clean environment for
            everyone. */}
            </p>

            <p className="intro-p-m">
                <div className="p-div">
                    At Qwikio, We Are Guided by
                    <span className="intro-line-mark"></span>
                </div>

                <div className="p-div">
                the firm belief that The 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                future of our planet is 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                our collective responsibility. 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                This belief propels our
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                business policies and our 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                innovative product designs.
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                At every step in our process,
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                we  prioritize building cars
                    <span className="intro-line-mark"></span>
                </div>
                
                <div className="p-div">
                and  mobility solutions that 
                    <span className="intro-line-mark"></span>
                </div>                <div className="p-div">
                are both comfortably    affordable
                    <span className="intro-line-mark"></span>
                </div>                <div className="p-div">
                and eco-friendly. Above 
                    <span className="intro-line-mark"></span>
                </div>                <div className="p-div">
                all else,     we want to play
                    <span className="intro-line-mark"></span>
                </div>                <div className="p-div">
                a lead role in the propagation    
                    <span className="intro-line-mark"></span>
                </div>                <div className="p-div">
                of a clean environment for everyone.
                    <span className="intro-line-mark"></span>
                </div>
            </p>
        </div>
    );
};

export default Vision;