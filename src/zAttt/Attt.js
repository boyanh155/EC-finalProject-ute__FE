import React,{useState,useRef} from "react";
import RSA from "./RSA.js";
import "./attt.css"
import styled from "styled-components";
import cryptico from "cryptico"
import { key } from "./key.js";
const AtttWrapper = styled.div`
width: 1500px;
margin: 0 auto;
`
// Begin ATTT
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let keySize =  250;



//
const Attt = () => {
    //
    const [nde,setNDE] = useState({
        n:"",e:"",d:""
    })
    const [pKey,setPKey] = useState({
        pubkey:'',
        passPhrase:'',
    })
    const [text,setText] = useState({
        cipherText:'',
        plainText:''
    })
    // 
    const [num,checkNum] = useState(false)
    // switch decrypt n encrypt
    // false is decrypt
    // true is encrypt
    const [cipherPub,setCipherPub] = useState({
        cipherPubText:'',
    })
    const [checkPass,setCheckPass] = useState(false)
    
            //Get size key select
        const selection = useRef(null)
        // get plain and cipher element
        const plainTextE = useRef(null)
        const cipherTextE = useRef(null)



        //generate click
        const generateBT = $(".generate-bt");
        const handlerGenerateBtClick = () => {
            keySize = selection.current.value
            // Generate RSA keys
            const keys = RSA.generate(Number(keySize));
            setNDE({
                n:keys.n.toString(),
                d:keys.d.toString(),
                e:keys.e.toString()
            })

            // generate p key
            let PassPhrase = pKey.passPhrase==""?"k19-HungLoc":pKey.passPhrase; 
            // The length of the RSA key, in bits.
            const MattsRSAkey = cryptico.generateRSAKey(PassPhrase, keySize);
            const MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey); 
            setPKey((prev)=>{
                return{
                    ...prev,
                    pubkey:MattsPublicKeyString,
                    passPhrase:PassPhrase,
                }
            })

            // end
         
        };
        const handlerEnBtClick = ()=>{
            let tempP = plainTextE.current.value

            // M to m 
            let temp  = RSA.encode(tempP)
            // m to c
            let tempC= RSA.encrypt(temp,nde.n,nde.e)
            setText({
                plainText:tempP,
                cipherText:tempC
            }) 
            //generate pub cipher text

            const EncryptionResult = cryptico.encrypt(text.plainText, key).cipher;
            setCipherPub((prev)=>{
                return{
                    ...prev,
                    cipherPubText:EncryptionResult,
                }
            })

        }
        const handlerCheckBtClick = ()=>{
            let tempC = cipherTextE.current.value
            //c to m
            let temp = RSA.decrypt(text.cipherText,nde.d,nde.n)
            //m to M
            let tempP = RSA.decode(temp)
            // check public key 
            const MattsRSAkey = cryptico.generateRSAKey(pKey.passPhrase, 250);
            const DecryptionResult = cryptico.decrypt(cipherPub.cipherPubText, MattsRSAkey);
            // // check false
            // setCheckPass(false)
            // // check true
            // setCheckPass(true)
            console.log(DecryptionResult)
            if(tempP===text.plainText){
                setCheckPass(true)
            }
            else{
                setCheckPass(false)
                setText((prev)=>{
                    return{
                        ...prev,
                        plainText:tempP,
                    }
                })
            }


        }
        // On change handler 
        // plain text box onchange
        const plainTextOnchange=(e)=>{
            
            setText((prev)=>{
                return {
                    ...prev,
                    plainText:e.target.value,
                }
            })
        }
        // cipher text num box onchange
        const cipherTextOnchange=(e)=>{
            if(!Number.isInteger(Number(e.target.value.split('').at(-1)))){
                checkNum(false)
            }
            else{
                checkNum(true)
            }
            setText((prev)=>{
                return {
                    ...prev,
                    cipherText:e.target.value,
                }
            })
            
        }
        // cipherTextPubOnchange
        const cipherTextPubOnchange = (e)=>{
            setCipherPub((prev)=>{
                return {
                    ...prev,
                    cipherPubText:e.target.value,
                }
            })
        }
        //handler public oncha
        const handlerPassOnChange=(e)=>{
            setPKey((prev)=>{
                return {
                    ...prev,
                    passPhrase:e.target.value,
                }
            })
            console.log(e.target.value)

        }
        const handlerPubOnChange=(e)=>{
            setPKey((prev)=>{
                return {
                    ...prev,
                    pubkey:e.target.value,
                }
            })
            console.log(e.target.value)
        }
        // End attt
  return (    <AtttWrapper>
  {/* <!-- Select key size --> */}
  <div className="select-key-wrapper">
  <label htmlFor="cars">Key size :</label>
  <select className="select-key" ref = {selection} defaultValue={250} id="key-size">
      <option value="250">250 bit</option>
      <option value="512">512 bit</option>
      <option value="1024" >1024 bit</option>
      <option value="4096" disabled>4096 bit</option>
  </select>
  {/* <!-- Button --> */}
  <button type="button" className="btn btn-outline-secondary generate-bt" onClick={handlerGenerateBtClick}>Generate key</button>
  </div>
  
  {/* <!-- Generate key --> */}
  <div className="row g-2">
      <div className="col-md">
            <div className="form-floating">
                <textarea className="form-control" style={{height:"150px"}} id="pri-key"  onChange={(e)=>handlerPassOnChange(e)} value={pKey.passPhrase} ></textarea>
                <label htmlFor="pri-key">Pass value</label>

            </div>    
      </div>
      <div className="col-md">
            <div className="form-floating">
                <textarea className="form-control" style={{height:"150px"}} id="pub-key" onChange={(e)=>handlerPubOnChange(e)} value={pKey.pubkey}></textarea>
                <label htmlFor="pub-key">Public key</label>
            </div>    
      </div>
  </div>


  {/* n d e */}
  <div className="row g-2">
      <div className="col-md">
          <div className="form-floating">
              <textarea type="text" className="form-control" style={{height:"150px"}} id="n-box" placeholder="Enter your text"  value={nde.n||""}/>
              <label htmlFor="n-box">n</label>
          </div>
      </div>
      <div className="col-md">
          <div className="form-floating">
              <textarea type="text" className="form-control" style={{height:"150px"}} id="d-box" placeholder="Enter your text"  value={nde.d||""}/>
              <label htmlFor="d-box">d</label>
          </div>
      </div>
  </div>

  <div className="row g-2">
      <div className="col-md">
          <div className="form-floating">
              <textarea type="text" placeholder="Enter your text"  className="form-control"  id="e-box"  value={nde.e||""}/>
              <label htmlFor="e-box">e</label>
          </div>
      </div>
  </div>
  {/* Plain text */}
  {/* get m */}
  {/* 
    // m = RSA.encode(M)
    // c = pow(m,e) mod n
  
  */}
  <div className="row g-2">
      <div className="col-md">
            <div className="form-floating">
                <textarea ref={plainTextE} className="form-control" onChange={plainTextOnchange}  style={{height:"200px"}} id="plainText" placeholder="Enter your text" value={text.plainText}></textarea>
                <label htmlFor="plainText">Plain text</label>
            </div>    
      </div>
        
      <div className="col-md">
            <div className="form-floating">
                <textarea ref={cipherTextE} className="form-control" onChange={cipherTextOnchange}  style={{height:"100px"}} id="cipherText" placeholder="Enter your text" value={text.cipherText.toString()}></textarea>
                <label htmlFor="cipherText">Cipher num</label>
            </div>
            <div className="form-floating">
                <textarea ref={cipherTextE} className="form-control" onChange={cipherTextPubOnchange}  style={{height:"100px"}} id="cipherText" placeholder="Enter your text" value={cipherPub.cipherPubText}></textarea>
                <label htmlFor="cipherText">Cipher text</label>
            </div>
      </div>
  </div>
  <div className="row g-2">
      <div className="col-md de-wrap">
        <button type="button" className="btn btn-outline-secondary de-bt" disabled={nde.n===""&&nde.e===""&&nde.d===""? true : false } onClick={(e)=>handlerEnBtClick(e)} value={text.plainText}>Decrypt</button>
      </div>
      <div className="col-md de-wrap">
        <button type="button" className="btn btn-outline-secondary de-bt" disabled={nde.n===""&&nde.e===""&&nde.d===""? true : false } onClick={(e)=>handlerCheckBtClick(e)}>Check</button>
      </div>
  </div>
  <div className="row g-2">
    <div className="progress">
    <div className={checkPass?"progress-bar bg-success":"progress-bar bg-danger"} role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

</AtttWrapper>
);
};

export default Attt;
