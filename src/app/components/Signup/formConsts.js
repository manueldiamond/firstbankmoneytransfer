
const naming={
    heading:"Create a free account",
    subtext:"Let's begin by saving your email for next time",
    questions:[
 
    /*
  
    // ensure that the name property is unique

      {
        label:"",
        placeholder:"",
        type:"text", 
        name:"",
        desc:"",
        optional:false
      },
  */
      {
        label:"Let's begin with email",
        placeholder:"Email Address",
        type:"email",
        name:"email",
        desc:"You'll need to verify this email",
      },
      {
        label:"What's your firstname",
        placeholder:"Firstname",
        type:"text",
        name:"firstname",
      },
      {
        label:"What's your lastname",
        placeholder:"Lastname",
        type:"text",
        name:"lastname",
      },
      {
        label:"What's your Othernames",
        placeholder:"Othernames",
        type:"text",
        name:"othernames",
        optional:true
      },
      {
        label:"Phone Number ",
        placeholder:"Phone",
        type:"text",
        name:"phone",
        desc:"You'll need to verify this email",
        optional:false
      },
    ],
  }

const address={
  heading:"what’s your details so we can assist you",
  subtext:"Let's begin by saving your email for next time",
  questions:[
    {
      label:"What's your address",
      placeholder:"Address 2",
      type:"addr", 
      name:"addr",
      desc:"",
      optional:false
    },
    {
      label:"What's your other address",
      placeholder:"Address 2",
      type:"addr", 
      name:"addr2",
      desc:"",
      optional:true
    },
    {
      label:"Country of Origin",
      placeholder:"Nigeria",
      type:"country", 
      name:"nationality",
      desc:"",
      optional:false
    },
    {
      label:"What Town are you?",
      placeholder:"Yaba",
      type:"town", 
      name:"town",
      desc:"",
      optional:false
    },
    {
      label:"State",
      placeholder:"Lagos",
      type:"state", 
      name:"state",
      desc:"",
      optional:false
    },
  ]
}

const id={
  heading:"Let’s authenticate you for smooth transactions",
  subtext:"Let’s begin by saving your email for next times",
  questions:[
    {
      label:"Identification Type",
      placeholder:"Select Identification type",
      type:"option", 
      name:"idType",
    },
    {
      label:"Identification Number",
      placeholder:"Identification Number",
      type:"option", 
      name:"idNo",
    },
    {
      label:"Identification Number Expiry Date",
      placeholder:"Select an expiry date",
      type:"date", 
      name:"idExpDate",
    },
    {
      label:"Date of Birth",
      placeholder:"Select a Date of Birth",
      type:"date", 
      name:"dob",
    },
    {
      label:"Country Code",
      placeholder:"Nigeria",
      type:"option",
      name:"cc",
    },
  ]
}

const pass={
  heading:"Create a unique password ",
  subtext:"We’re super-glad to see your progress so far. Your data is save and secure with us",
  questions:[
    {
      label:"Enter your password",
      placeholder:"Password",
      type:"password", 
      name:"password",
      desc:"Password must contain a letter and a number, and be minimum of 9 characters",
    },
    {
      label:"Confirm your password",
      placeholder:"Confirm password",
      type:"password", 
      name:"confirmPassword",
    },
    ]
}
const formData={
    "Profile": naming,
    "Location": address,
    "Identification": id,
    "Password": pass,
}
  
export {
 formData
}