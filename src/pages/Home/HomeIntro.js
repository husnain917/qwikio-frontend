import React, { useEffect } from 'react';
import './HomeIntro.css'

const HomeIntro = () => {

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
            textAnimate(top,10,lines);

        });
    
    
      })

    return (
        <div className="HomeIntro2">
            <p className="intro-p">
                <div className="p-div">
                    Introducing Qwikio Riida XL. The Riida delivers
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div"> 
                    the best range and astest charging at its price
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    
                    point globally. Its horsepower is unrivaled, 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    and even with seven (7) passengers, the Riida  
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    has incredible space, legroom and all
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    rideshare apps integrated on its 14inch 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                     driver touchscreen and a head-up display 
                    <span className="intro-line-mark"></span>
                </div>
                <div className="p-div">
                    map to keep the driver-focused.
                    <span className="intro-line-mark"></span>
                </div>

            </p>
        </div>
    );
};

export default HomeIntro;