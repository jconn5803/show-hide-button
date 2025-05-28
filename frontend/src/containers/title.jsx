import { useState } from "react";

function Button({ onClick }){
    return(
        <button onClick={ onClick }>
            Show/Hide
        </button>
    );
}


export default function TitleText(){
    const [textStatus, setTextStatus] = useState(true);


    return(
    <>   
    <Button onClick={() => setTextStatus((textStatus) => !textStatus)}/>
    {textStatus ? <h1>This is the text to show/hide</h1> : null}
    </>
    );
}