
const link=(text,url="/")=>({text,url})
// const button=(text,primary,bordered,url)=>{text,primary,bordered,url}


const Hero={
  heroImg:"/images/hero.jpeg",
  heroHeader:"SAVE EXTRA.SEND & RECEIVE MORE",
  heroSubtext:"Get your money moving internationally. Save up to 9x when you send with First Bank of Nigeria",
  heroCallToActions:[
    { text:"Send money now",url:"/" },
    { text:"Start Banking",url:"/",primary:true }
  ],
  heroHeaderParagragh:"We can jeep you floating over the rain",
}
const currencyRestoredFinesse={
  upperRightText:"you first!",
  
  restored:{
    heading:"RESTORED THE LOCAL CURRENCIES SENDING BARRIER",
    points:[
      "Send your currency to other Africa countries and the recipient receive its local currency without third parties.",
      "Our money transfer is swift and takes just hour(s) to get to its destinations",
      "International money transfers are usually expensive and takes alot of huddles but FirstOnlineTransfer gives you the best charge out and usually cheap at its exchange rate.",
      "We recognize currency within your location on each countries monetary regulations ",
    ],
    link:link("See available countries FirstOnlineTransfer works","/")
  },
  currencies:{
    converions:[
      ["gn","ng"],
      ["ng","gh"],
      ["gb","sl"],
    ],
    link:link("Discover more")
  },
  features:[
    {
      img:"images/FireEmoji.svg",
      heading:"WE KEEP ON-GOING TRANSACTIONS SAFE & SECURE",
      body:"In many cases, you may be able to cancel an online bank transaction if it has not been processed yet. However, once the funds have been transferred."
    },
    {
      img:"images/FireEmoji.svg",
      heading:"NO HIDDEN CHARGES. TRANSPARENCY FREE",
      body:"In many cases, you may be able to cancel an online bank transaction if it has not been processed yet. However, once the funds have been transferred."
    }
  ],
  finesse:{
    img:"images/girl-in-yellow.jpeg",
    transfer:{
      amt:50000,
      from:'ng',
      to:'gh',
    },
    heading:"Finesse of FirstOnline Transfer",
    points:[
      "Customers and non-customers can walk-in to any FirstBank across the countries it operates on and send or receive money from family and loved ones. These process is seamless",    
      "Customers who owns an account with FirstBank in any countries it operates can provide their required details to ease smooth transactions. These process is seamless",
      "Non-customers whom does not owns an account with FirstBank can provide their required details to ease smooth transactions. These process is seamless also.", 
      "FirstMonie agents can process such transactions when customer or non-customer walks-in with its her provided details to foster easy transactions. T&C apply",
      "Users can also save their transaction request, repeat and make transfer and sending money easy",
      "FirstOnline Transfer only works for certain countries where its subsidiary operates in such as Senegal, Nigeria, Gambia, Ghana, DR Congo and Guinea",
    ],
    buttons:[
      {
        text:"Send money now",
        primary:true
      },
      {text:"Learn more about the FirstOnline Transfer"},
    ]
  }
}

const currencies={
  
  familiar:{
    heading:"WE ARE FAMILIAR WITH DIFFERENT CURRENCIES NEAR YOU",
    subHeading:"With this service, you can easily and securely send money to your loved ones or business partners in these African countries",
    countries:[
      "bj","gh","sn","gw",
      "ng","us","zm","cd",
      "ke","gb","sl","za",
    ]
  },
  available:{
    heading:"Available countries to send and receive money",
    subHeading:"FirstOnline Transfer is currently not available in your location. To continue, please select a location below to check rates. Enjoy!",
    countries:[
      "sl","gh","sn","gw",
      "ng","zm","ke","cd",
      "za","bj",
    ]
  },
  soon:["bj","zm","za","ke",]
  
}

const next={

}
export{
  Hero, currencyRestoredFinesse,currencies,next
}