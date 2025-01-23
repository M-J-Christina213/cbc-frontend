export default function ImageSlider(props){
    const images = props.images
    return (
        <div className="w-full  aspect-square flex items-center flex-col">
            <img src={images[0]} className="w-full aspect-square object-cover"/>
            <div className=" w-full h-[100px] absolute bottom-0 backdrop-blur-lg" ></div>
            <div className="w-full h-full flex items-center justify-center">
                {images.map((image, index)=> (
                    <img 
                    key={index}
                    src={image}
                    className="w-12 h-12 object-cover mx-2"></img>
                ))}
            </div>
        </div>
    )
}