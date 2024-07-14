import React, {useState, useEffect} from 'react';
import Slide from "./Slide"

function Slides(props) {

    const [slideData, setSlideData] = useState(<Slide title={props.slides[0].title} text={props.slides[0].text} />)
    const [allSlides, setAllSlides] = useState(props.slides);
    
    const [indexData, setIndexData] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState({
        prev: true,
        next: false
    });

    function handleRestart() {
        setIndexData(0);
        setIsButtonDisabled(prevButton => {
            return {
                ...prevButton,
                prev: true
            }
        });
    }

    function handlePrev() {
        if (1 < indexData) {
            if (indexData > 0) {
                setIsButtonDisabled({
                        prev: true,
                        next: false
                });
            }
            setIndexData(prevIndex => prevIndex - 1);
        }
    }

    function handleNext() {
        if (indexData < props.slides.length - 1) {
            if (indexData + 1 === props.slides.length - 1) {
                setIsButtonDisabled(prevButton => {
                    return {
                        ...prevButton,
                        next: true
                    }
                });
            }
            setIndexData(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        setSlideData(
            <Slide 
                title={props.slides[indexData].title}
                text={props.slides[indexData].text}
            />
        )
    }, [indexData])

    return (
        <div>
            <div id="navigation" className="text-center">
                <button 
                    data-testid="button-restart" 
                    className="small outlined" 
                    onClick={handleRestart}
                >
                    Restart
                </button>
                <button 
                    data-testid="button-prev" 
                    className="small" 
                    onClick={handlePrev}
                    disabled={isButtonDisabled.false}
                >
                    Prev
                </button>
                <button 
                    data-testid="button-next" 
                    className="small" 
                    onClick={handleNext}
                    disabled={isButtonDisabled.next}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                {slideData}
            </div>
        </div>
    );

}

export default Slides;
