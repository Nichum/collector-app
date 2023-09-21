const collectable = {
    name:'Original Moon Man',
    imagePath:'https://wallpaperaccess.com/full/13189.jpg',
    imageSize:90,   
};

export default function Item(){
    return(
        <div>
            <h1>{collectable.name}</h1>
            <img 
                src={collectable.imagePath}
                alt={'Billede af ' + collectable.name}
                style={{
                    width: collectable.imageSize,
                    height: collectable.imageSize
                }} 
            />
        </div>
    );
}
