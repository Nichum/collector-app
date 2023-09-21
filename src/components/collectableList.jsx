import { useState } from 'react';

const collectionList = [
    {
        name:'Moon Man',
        imagePath:'https://wallpaperaccess.com/full/13189.jpg',
        imageSize:180
    },
    {
        name:'Moon Man 2',
        imagePath:'https://wallpaperaccess.com/full/13189.jpg',
        imageSize:180,   
    }
];



export default function CollectionList(){
    const [count, setCount] = useState(0);
    const listItems = collectionList.map(collectionItem =>
    <li>
        {collectionItem.name}
        <img key={collectionItem.name}
            src={collectionItem.imagePath}
            alt={'Billede af ' + collectionItem.name}
            style={{
                width: collectionItem.imageSize,
                height: collectionItem.imageSize
            }} />
    </li>
    );

    return(
        <div>
            <ul>{listItems}</ul>        
        </div>
    )
}