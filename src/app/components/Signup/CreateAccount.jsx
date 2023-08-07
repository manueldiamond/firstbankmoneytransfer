import Progess from "./Progress";
import {formData }from "./formConsts";
import { useEffect, useState } from "react";
import Button from "../../";
const CreateAccount= () => {
  
  const [progressLevel, setProgressLevel] = useState(0)
  var currentForm = formData[Object.keys(formData)[progressLevel]]
  const [data,setData]=useState({})
  const [canContinue,setContinue]=useState(false)
  const [errorMsg,setErrorMsg]=useState("")
  const editData=(field,newData)=>setData(prevDat=>{
    if (newData==="E") 
      newData={error:true}
    else  
      checkInputs()
    return({...prevDat, [field]:{...prevDat[field],...newData}})
  })
  
  const checkInputs=()=>{
    let error=false
    setErrorMsg("")
    currentForm.questions.forEach(question=>{
      if(!data[question.name] || !data[question.name].value){
        if(!question.optional){
          editData(question.name,"E")
          error=true
          setErrorMsg("Please, make sure for all non-optional fields are filled")
        }
      }
    })
    if (!error){
      setContinue(true)
    }
  }
  const nextForm=()=>{
    
    if (canContinue)
      if (progressLevel<Object.keys(formData).length){
        setProgressLevel(prevLevel=>prevLevel+1)
        setContinue(false)
      }else
        console.log("Done!")
  }

  return (
    <div className="w-[80%] m-auto">
      <Progess className="" progress={progressLevel} levels={Object.keys(formData)} />
      <div className="m-auto max-w-[40rem]">
        <div
          className="flex justify-center pt-14 pb-4 items-center"
          id="mainBody"
        >
          <h1 className="text-primary text-center">{currentForm.heading}</h1>
        </div>
        <div className="flex justify-center">
          <p className="text-[#4D4D4D]">
            {currentForm.subtext}
          </p>
        </div>
        <div className="container gap-5 flex flex-col" id="form">
        {currentForm.questions.map(question=>
          <div key={question.name} className="flex flex-col" > 
            <label htmlFor={question.name} className={`pb-2 ${!(data[question.name]&&data[question.name].error)?"text-[#4D4D4D]":"text-red-500"}`}>
              {`${question.label} ${question.optional?"(Optional)":""}`}
            </label>
            <input
              onChange={(event)=>editData(question.name,{value:event.target.value,optional:question.optional,error:false})}
              value={data[question.name]?data[question.name].value:undefined}
              type={question.type}
              name={question.name}
              id={question.name}
              placeholder={question.placeholder}
              className="border border-[#D6D6D6] rounded-[10px] p-4 text-[#767676] bg-transparent hover:bg-specialgray outline-none focus:outline-secondary"
            />
            <p className="text-[#B5B5B5]">{question.desc}</p>
          </div>
          )}
          <p className="text-red-500"><em>{errorMsg}</em></p>
        <Button className="mt-6" primary disabled={!canContinue} onClick={()=>nextForm()}>{`${progressLevel<Object.keys(formData).length?"Next":"Complete"}`}</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
