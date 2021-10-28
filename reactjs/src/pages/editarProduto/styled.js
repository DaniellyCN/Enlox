
import styled from 'styled-components';

const Container = styled.div`

display: flex;
    flex-direction: row;
    max-width: 57.7em;
    position: absolute;
    .new-student-box {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
            
    }
   
    .bar-new-student {
        border: 3px solid #BCBF50;
        border-radius: .5em;
        margin-right: .4em;
        background-color: #BCBF50;
    }
    .text-new-student {
        display: flex;
        flex-direction: row;
        font-size: 32px;
    }
    
    .text-new-student div {
        font-weight: bolder;
    }
    .input-new-student {
        display: flex;
        flex-direction: row;
        padding-top: 2.4em;
    }
    .agp-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 18px;
    }
    .input {
        margin-top: .5em;
        margin-bottom: .5em;
    }
    .input-left {
        display: flex;
        flex-direction: column;
        margin-right: 3em;
        height: 10em;
        
    }
    .input-right {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
        height: 10em;
        
    }
    input {
        width: 209px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;
    }
    .name-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
    }
    
    .desc {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
        margin-right: 1em;
        
    
    }
    
    .inputimg {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: flex-start;
       
    }
    .agp-img {
    display:flex;
    align-self: center; 
    margin-right: 12em;
    margin-left: 8em;
    }
  
    .img-product {
        font-size: 18px;
        color: #615858;
        width: 6em;
        font-weight: 800;
        align-self: flex-start;
        margin-right: 0.5em;
    }
    
    .text{
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 1em;
        justify-content: center;
        margin-right: 12em;
        margin-left: 8em;
       
    }
    
    textarea{
        width: 585px;
        height: 154px;
        border-radius: 5px;
        top: 440px;
        left: 556px;
    }
    
    .number-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em; 
        font-weight: 800;
    }
    
    .class-product{
        font-size: 18px;
        color: #615858;
        margin-right: 0.9em;
        font-weight: 800;
    }
    
    .corse-product{
        font-size: 18px;
        color: #615858;
        margin-right: 1.3em;
        font-weight: 800;
    }
    
    .button-create {
        align-self: flex-end;
        justify-self: flex-end;
        padding-bottom: 1.5em;
        padding-top: 1.5em;
    }
    .button-create  button {
        width: 106px;
        height: 36px;
        background: #A8A8A8;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: 2em;
        font-weight: bold;
    }
    .student-registered-box {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }
    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 32px;
        padding-left: .3em;
    }
    .row-bar {
        display: flex;
        flex-direction: row;
    }
    .information-purple {
        display: flex;
        flex-direction: row;
        background: #986CDF;
        width: 1454px;
        height: 67px;
        color: #FFFFFF;
        justify-content: space-evenly;
        margin-top: 2em;
        align-items: center;
        font-size: 18px ;
        margin-bottom: 1em;
    }
    .gray{
        width: 1454px;
        height: 61.93px;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }
    .white {
        width: 1454px;
        height: 61.93px;
        background: #FFFFFF;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }
    .box-information {
        border: 1px solid #E2E2E2;
    }
    .body-right-box {
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
       
        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }
    .reader-right-box {
        margin-top: 0em;
        padding-right: 0em;
        
    }
   
    button {
        cursor: pointer;
    }
    .button-create button:hover {
        background-color: #BCBF50;
        transition: 2s;
    }
    img {
        cursor: pointer;
    }
    .absolute {
        color: white;
        background-color: #119FDC;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }
   
`

export{Container};