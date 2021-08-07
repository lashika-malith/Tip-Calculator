import React, {useRef} from 'react'
import Person from './icon-person.svg'
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Moneytag from './dollar.svg'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { TextField } from '@material-ui/core';
import './clac.css'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'none',
  },

  margin: {
    margin: theme.spacing(1),
    marginTop: '75px',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    
  },

  Tiplabel:{
    textAlign: 'left ',
    transform: 'translate(10px, 5px) scale(0.8) !important',
    fontWeight: '700 !important',
    fontFamily: 'Space Mono',
    fontSize: '24px'
  },

 
}))

const resultBox = makeStyles(() =>({
  flex:{
    display: 'flex',
    gap: '2em',
    '@media(max-width:1050px)':{
            flexFlow: 'column ',
        }
    
  },
    Box:{
    
        height: '90%',
        margin: '30px 25px',
        backgroundColor: 'hsl(183, 100%, 15%)',
        borderRadius: '20px',
        marginBottom: '50px',
        
    
    },
    'Box::-webkit-scrollbar':{
      width: '0'
    },
    button:{
        backgroundColor: 'hsl(185, 41%, 84%)' ,
        color:   'hsl(183, 100%, 15%)',
        fontFamily: 'Space Mono',
        fontWeight: '700', 
        fontSize: '1.5em',
        width: '90%',
        marginTop: '2vw',
        marginBottom: '2vw',

        '@media(max-width:1350px)':{
               marginTop: '13vw',
        },

        '@media(max-width:1050px)':{
               marginTop: '0vw !important',
               transform: 'scale(0.8)'
        },
        
    

    },

    Show:{
        display: 'flex',
    
        justifyContent: 'space-between',
        padding: '30px 30px',
        alignItems: 'center',
    },

    Des:{
        textAlign: 'left',
        display: 'inline',
    
    },

    Head:{
        marginBottom: '0',
        fontFamily: 'Space Mono',
        color: 'hsl(189, 41%, 97%)',
        fontSize: '1.6vw',

         '@media(max-width:1050px)':{
            fontSize:'2.5vw !important'
        }

    },

    para:{
        color:'hsl(184, 14%, 56%)',
        fontFamily: 'Space Mono',
        margin: '0',
        fontSize: '1vw',
            
        '@media(max-width:1050px)':{
            fontSize:'1.8vw !important'
        }

    },

    '@global':{
        'h3:nth-of-type(2)':{
            marginTop:'50px'
        }
    },

    result:{
        color: 'hsl(172, 67%, 45%)',
        fontSize: '1.5vw',
    }
  
}))


const customStyle = makeStyles(() => ({
  root: {
    '& > *': {
      backgroundColor:'hsl(189, 41%, 97%)',
      height: '50px',
      padding: '0',
      width: '124.32px',
      borderRadius: '5px',
      fontFamily: 'Space Mono',
      fontWeight: '700', 
      fontSize: '2.2em',
      border: 'none',
      color:  'hsl(183, 100%, 15%)',
  
    },
 
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
 
    
  },
  margin: {
    margin: theme.spacing(1),
  },

  content:{
      marginTop: '75px',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    
  },
  
}))



function Collector() {
    const CustomTip = customStyle();
    const classes = useStyles();
    const classes2 = useStyles2();
    const style = resultBox();

 
  
  


      

    //AMOUNT...
    const [values, setValues] = React.useState({
      bill: '',
      no_people: ''
    });


    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };
    


    //checkbox functions...
  
    const [tip, setTip] = React.useState()
    const [customTip, setCustom] = React.useState(32)

  
    const handleTip = (event, newTip) => {
    setCustom(event.target.value)
    if (newTip!== null) {
      setTip(newTip);
    }
    };

 const resetForm = () => {
    setValues({
      bill: '',
      no_people: ''
    })
    setTip(0)
    textInput.current.value = ""

    }

    
  let textInput = useRef(null);

 

  function Calculate() {
 
          let tip_rate;

          if (tip !== undefined) {
            tip_rate = tip
                    
          }else if(customTip !== undefined){
            tip_rate = customTip/100
        
          } 

          let Tip_amount;
          let Total_amount

          if (values.bill) {
            if(values.no_people){
              const calc_data = values.bill * tip_rate
              Tip_amount = calc_data/values.no_people
              const calc_data2 = values.bill / values.no_people
              Total_amount =  +calc_data2 + +Tip_amount
              
            
            }
          }
        return {
            Result_1:Tip_amount,
            Result_2:Total_amount
          }
        }
      
      
  const callback = Calculate()

  const modify_tip = callback.Result_1
  const modify_total = callback.Result_2

  let Result_tip = '0.00'
  let Result_total = '0.00'
  if (modify_tip) {
    Result_tip = modify_tip.toFixed(2)
    Result_total = modify_total.toFixed(2)
  }




  return (
      <div className={style.flex}>
        <form className={style.flex} >
          <div className="Input-side">   
            <div className="collector">
                <div >
                  <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel className={classes.inputlabel} id="Label" htmlFor="outlined-adornment-amount">Bill</InputLabel>
                        <OutlinedInput
                        type="number"
                        id="outlined-adornment-amount"  
                        value={values.bill}
                        onChange={handleChange('bill')}
                        onInput = {(e) =>{e.target.value = Math.max(0, Number(e.target.value) ).toString().slice(0,12)}}
                        startAdornment={<InputAdornment position="start"><img alt='' id="moneytag" src={Moneytag}></img></InputAdornment>}
                        labelWidth={0}
                        />
                    </FormControl>
                </div>

                <div className="Tip-selector">
                    <InputLabel id="Label" className={classes.Tiplabel}  htmlFor="outlined-adornment-amount">Select Tip %</InputLabel>
                    <ToggleButtonGroup
                    value={tip}
                    exclusive
                    onChange={handleTip}
                    aria-label="text alignment"
                    className = 'Tips'
                    
                    >
                    <ToggleButton id="Button" value="0.05">
                    <h1 id="low">5%</h1>
                    </ToggleButton>
                    <ToggleButton  value="0.1">
                    <h1>10%</h1>
                    </ToggleButton>
                    <ToggleButton value="0.15">
                    <h1>15%</h1>
                    </ToggleButton>
                    <ToggleButton value="0.25">
                    <h1>25%</h1>
                    </ToggleButton>
                    <ToggleButton value="0.5">
                    <h1>50%</h1>
                    </ToggleButton>
                    <ToggleButton id='custom-tiprate'>
                    <TextField   
                      id="custom"
                      type="number"  
                      inputRef={textInput}
                      placeholder='Custom'  
                      className={CustomTip.root} 
                      variant="outlined"
                      values = {customTip}
                      onChange={handleTip}
                      onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)}}
                      >
                    </TextField>
                    </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                    <div className={classes2.content}>
                      <FormControl fullWidth className={classes2.margin} variant="outlined">
                        <InputLabel className={classes2.inputlabel} id="Label" htmlFor="outlined-adornment-amount">Number of people</InputLabel>
                          <OutlinedInput
                          type="number"
                          id="outlined-adornment-amount"  
                          value={values.no_people}
                          onChange={handleChange('no_people')}
                          startAdornment={<InputAdornment position="start"><img alt='' id="moneytag" src={Person}></img></InputAdornment>}
                          labelWidth={0}
                          onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)}}
                          />
                      </FormControl>
                    </div>  
            </div>
          </div>

            <div className="result-side">
                <div className={style.Box}>
                  <div className={style.Show}>
                      <div className={style.Des}>
                          <h3 className={style.Head}>Tip Amount</h3>
                          <p  className={style.para}>/ person</p>
                          <h3 className={style.Head}>Total</h3>
                          <p  className={style.para}>/ person</p>
                      </div>
                      <div className={style.result}>
                           <h1 class='results'>${Result_tip}</h1>
                         <h1 class='results'>${Result_total}</h1>
                      </div>
                  </div>
                  <div class="button">
                      <Button
                       variant="contained" 
                       className={style.button}
                       onClick={resetForm} >
                      RESET
                      </Button>
                  </div>
                </div>
            </div>   
          </form>



      
        </div>
    )
}




export {Collector}