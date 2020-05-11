import React,{useState,useEffect} from 'react';
import propTypes from 'prop-types';
import './index.css';

const Carrusel=({images,interval})=>{
    const [activeIndex,setActiveIndex]=useState(0);

    useEffect(()=>{
        const tick=setInterval(()=>{
            if(activeIndex<images.length -1){
                setActiveIndex(activeIndex+1)
            }
            else{
                setActiveIndex(0)
            }

        },interval)

        return ()=>clearInterval(tick)
    },[activeIndex,images.length,interval])
    return(
        <section className="carrusel">
            <div className="carrusel_Container">
                {images.map((image,index)=>(
                    <img
                        src={image.src}
                        alt={image.title}
                        key={image.src}
                        className={
                            index===activeIndex
                            ?'carrusel_Container_Img animaShow'
                            :'carrusel_Container_Img animaHide'
                        }
                    />
                ))}
            </div>
        </section>
    )
}


Carrusel.defaultProps={
    images:[],
    interval:1000
}

Carrusel.propTypes={
    interval:propTypes.number,
    images:propTypes.arrayOf(
        propTypes.shape({
            src:propTypes.string.isRequired,
            title:propTypes.string.isRequired
        })
    )

}
export default Carrusel;