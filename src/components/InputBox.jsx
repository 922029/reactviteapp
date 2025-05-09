import React,{useState} from "react";

function InputBox(){
    const [inputValue,setInputValue] = useState(" ００");

    const handleInputChange = (event)=>{
     setInputValue(event.target.value);//入力値を更新
    
    };

    return(
        <div>
            <h3>fkfkfkfkfkf</h3>
            <input
                type="text"
                value="aaaaaaaaaaaaa"
                onChange={handleInputChange}
                placeholder="何か入力してください"
            />
            <p>入力内容:{inputValue}</p>    
        </div>
    );
}
export default InputBox;