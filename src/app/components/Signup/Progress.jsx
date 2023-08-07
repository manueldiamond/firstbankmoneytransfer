const Progress = ({progress,levels=[],className}) => {
  return (
    <div className={`prog ${className}`}>
      <div className="flex justify-center pt-6 px-10">
        <div className="w-full">
          <div className="progress-bar bg-specialgray h-2 rounded-full">
            <div style={{width:`calc(${(progress+1)/levels.length}*100%)`}} className="html h-[.375rem] transition-[width] centered rounded-full bg-primary relative" id="indicator">
              <span className="h-3 w-3 rounded-full bg-primary absolute right-[-0.325rem]"/>
            </div>

          </div>
          <ul className="flex justify-evenly w-full py-1">
            {levels.map((level,id)=>
            <li key={level} className={progress>=id?"text-primary":"text-specialgray"}>{level}</li>
            )} 
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Progress;
