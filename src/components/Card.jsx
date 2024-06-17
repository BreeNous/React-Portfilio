
function Card(props) {

    return(
        <div className="Card h-2/5 w-1/4 p-2 m-5 drop-shadow-sm border border-lime-600">
            <a href={props.link}><video className="Video grayscale" src={props.src} type={props.type}
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}></video></a>
                <div className="flex flex-col flex-wrap h-1/4 justify-around">
                    <h2 className="cutive-mono-regular text-lime-600">{props.h2}</h2>
                    <h3 className="cutive-mono-regular text-pink-900">{props.h3}</h3>
                </div>
        </div>
    );
}

export default Card