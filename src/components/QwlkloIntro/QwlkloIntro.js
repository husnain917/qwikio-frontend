import React, { useEffect } from 'react';
import './QwlkloIntro.css'

const QwlkloIntro = () => {

    useEffect(()=>{
    

        const textAnimate = (top,base,lines) => {
    
          let i = 0;
          let scale = 1;
          let end = 0;
    
          while(end<=lines.length){
            end++;
            base = base + 100;
            i = base + 100;
    
            if(top >= base && top <= i){
              scale = (i - top) / 100; 
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

            let top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            const lines = document.querySelectorAll(".intro-line-mark");
            textAnimate(top,100,lines);

        });
    
    
      })

    return (
        <div className="qwlkloIntro">
            <p className="intro-p">
                <div className="p-div">
                    Qwikio was founded on the desire to be a force 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    for good in the fight to save our planet by making
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    Automobiles affordable to the middle class. 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    We knew that if we could make clean energy cars 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                   Affordable to rideshare and taxi drivers, young people,
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    And low-income families, we would be able to help  
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    reduce poverty while also contributing to 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    A clean and safe environment.
                    <span className="intro-line-mark"></span>
                </div>

            </p>
        </div>
    );
};

export default QwlkloIntro;