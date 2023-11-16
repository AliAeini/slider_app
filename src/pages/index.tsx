import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const images = ["slider_images/image1.jpg","slider_images/image2.jpg",
                            "slider_images/image3.jpg","slider_images/image4.jpg",
                            "slider_images/image5.jpg","slider_images/image6.jpg",
                            "slider_images/image7.jpg","slider_images/image8.jpg",
                            ]
    const [indexState, setIndexState] = useState(0)
    const last_index = images.length - 1

    const nextSlide = ()=>{
        indexState + 1 <= last_index ? setIndexState(indexState + 1) : setIndexState(0)
    }
    const prevSlide = ()=>{
        indexState - 1 >= 0 ? setIndexState(indexState - 1) : setIndexState(last_index)
    }

    const auto_slider = setInterval(nextSlide, 5000)
    const stopSlider = ()=>{
        clearInterval(auto_slider)
    }
    const playSlider = () =>{
        setInterval(nextSlide, 5000)
    }
    return (
        <main>
            <div className={"h-[300px] mt-[100px] w-fit m-auto flex"}>
                <div className={"bg-gray-400 h-full p-3 rounded-l-xl flex "}>
                    <FontAwesomeIcon icon={faChevronLeft} className={"text-white self-center"} onClick={prevSlide}/>
                </div>
                {<img src={images[indexState]} alt={""} className={"h-full flex-grow max-w-[500px] m-auto"} onMouseOver={stopSlider} onMouseOut={playSlider}/>}
                <div className={"bg-gray-400 h-full p-3 rounded-r-xl flex"}>
                    <FontAwesomeIcon icon={faChevronRight} className={"text-white self-center"} onClick={nextSlide}/>
                </div>
            </div>
        </main>
    )
}
