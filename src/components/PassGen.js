import React, {useState} from 'react'
export default function PassGen(props) {
    const [num, setNum] = useState(4);
    const [passwd, setpasswd] = useState("");
    const [txt, settxt] = useState("CLICK GENERATE");

    const handleChange = (event)=>{
        if(event.target.checked){
            setpasswd(prevPass=> prevPass.concat(event.target.value));
        }
        else{
            setpasswd(prevPass=> prevPass.replace(event.target.value, ""));
        }
    }
    const handleClick = ()=>{
        let str = "";
        if(passwd.length===0){
            str = "Select options from settings";
        }
        else{
            for(let i = 0 ; i<num ; i++)
            {
                let random_indx = Math.floor(Math.random()*passwd.length);
                str = str + passwd[random_indx];
            }
        }
        settxt(str);
    }
  return (
    <div className='container'>
        <h2 className='heading'>{props.heading}</h2>
        <div className="passwd">{txt}</div>
        <div className="passlen">
            Password Length
            <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}/>
        </div>
        <h6>SETTINGS</h6>
        <div className="upper">
            Include Uppercase
            <input type="checkbox" onChange={handleChange} value="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
        </div>
        <div className="lower">
            Include Lowercase
            <input type="checkbox" onChange={handleChange} value="abcdefghijklmnopqrstuvwxyz" />
        </div>
        <div className="number">
            Include Numbers
            <input type="checkbox" onChange={handleChange} value="0123456789" />
        </div>
        <div className="symbol">
            Include Symbols
            <input type="checkbox" onChange={handleChange} value="!@#$%^&*" />
        </div>
        <div className="btn">
        <button onClick={handleClick}>GENERATE PASSWORD</button>
        </div>
    </div>
  )
}
