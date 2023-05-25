import React, {useState} from 'react'



const Tour = ({id, image, name, info, price, removeTour}) => {
    const [isFullInfo, setIsFullInfo] = useState(false);

    const [isShowMore, setIsShowMore] = useState(false);

    return (
    <article key={id} className="single-tour">
        <img src={image} alt="" />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
        <p>
            {isFullInfo? info : `${info.substring(0, 200)} ...`}
            <button onClick={() => {
                setIsFullInfo(!isFullInfo);
                setIsShowMore(!isShowMore)
            }}>
                {isShowMore? 'Show Less': 'Show More'}
            </button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
            
        </article>
    );

}

export default Tour;

