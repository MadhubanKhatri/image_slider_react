import { useState } from "react";


function Accordian(){

    const accordian_style = {
        width:"80%",
        height:"75px",
        background:"grey",
        overflow:"hidden",
        borderBottom:"1px solid lightgrey",
        position:"relative",
        top:"120px",
        left:"180px",
        transition:"all 0.5s ease"
    };
    const [toggle, setToggle] = useState(false);

    function handleToggle(target){
        if(!toggle){
            target.style.height = "150px";
        }else{
            target.style.height = "75px";
        }
        
        setToggle(!toggle);
        console.log(target);
    }

    return <div>

        <div onClick={(e)=>handleToggle(e.currentTarget)} className="container1" style={accordian_style}>
            <h2 style={{marginLeft:"20px"}}>Accordian Title 1</h2>
            <p style={{marginLeft:"20px"}}>Lorem ipsum sdbffaodavdoivcgvksfhgd cyuskddffdh hyiasodfnjhhdhu hysdfidojdvs</p>
        </div>
        
        <div onClick={(e)=>handleToggle(e.currentTarget)} className="container2" style={accordian_style}>
            <h2 style={{marginLeft:"20px"}}>Accordian Title 2</h2>
            <p style={{marginLeft:"20px"}}>Lorem ipsum sdbffaodavdoivcgvksfhgd cyuskddffdh hyiasodfnjhhdhu hysdfidojdvs</p>
        </div>

        <div onClick={(e)=>handleToggle(e.currentTarget)} className="container3" style={accordian_style}>
            <h2 style={{marginLeft:"20px"}}>Accordian Title 3</h2>
            <p style={{marginLeft:"20px"}}>Lorem ipsum sdbffaodavdoivcgvksfhgd cyuskddffdh hyiasodfnjhhdhu hysdfidojdvs</p>
        </div>

    </div>
}


export default Accordian;