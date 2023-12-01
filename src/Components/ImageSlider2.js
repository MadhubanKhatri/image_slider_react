import { useRef, useState } from "react";


function ImageSlider2(){
    const div = useRef();
    let [counter, setCounter] = useState(0);
    const firstImg = useRef();
    
    const imgs = [
        "https://images.unsplash.com/photo-1519817914152-22d216bb9170?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFja2dyb3VuZHx8fHx8fDE3MDEyMzY0OTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",

        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFja2dyb3VuZHx8fHx8fDE3MDEyMzY4MTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",

        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFja2dyb3VuZHx8fHx8fDE3MDEyMzY4NDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    ];

    function handleImage(){
        // div.current.style.marginTop = "300px";
        console.log(firstImg.current);
        firstImg.current.style.marginLeft = "-300px";
        

        if(counter<2){
            setCounter(++counter);
        }else{
            setCounter(0);
        }
        
        console.log(counter);
    }

    const divStyle = {
        width:"300px",
        height:"300px",
        border:"2px solid green",
        transition:"all 2s ease",
        // padding:"5px",
        position:"relative",
        left:"40%",
        display:"flex",
        // gap:"10px",
        // overflow:"hidden"
    };
    const imgStyle = {
        width:"auto",
        transition:"all 0.5s ease-out"
    };
    return <div>
        <h1>Image Slider 2</h1>

        <div ref={div} style={divStyle}>
            {
                imgs.map((img)=>{return <img ref={firstImg} src={img} style={imgStyle}/>})
            } 

        </div>

        <button onClick={handleImage}>Next Image</button>

    </div>
}

export default ImageSlider2;