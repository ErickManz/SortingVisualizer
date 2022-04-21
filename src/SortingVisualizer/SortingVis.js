import React,{Component, useEffect,useState} from "react";
import "./SortingVis.css"
import { getbubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
import{getMergeSortAnimations} from "../sortingAlgorithms/MergeSort";
import {getSelectionSort} from "../sortingAlgorithms/SelectionSort"
import {getInsertionSortAnimations} from "../sortingAlgorithms/InsertionSort"

function randomIntFromInterval(min, max){
  return Math.floor(Math.random()*(max-min+1) + min);
}
// 12 42 194 34 64 78 32 20 10 345 600

function SortingVis(props){

  const [array, setArray] = useState([])
  const [inputArray, setInputArray] = useState('');

  useEffect(() =>{
    resetArray();
  },[]);

  const resetArray= () =>{

    const arr = [];
    // eslint-disable-next-line no-restricted-globals
    const size = window.innerWidth/5
    // eslint-disable-next-line no-restricted-globals
    const height = window.innerHeight/1.3
    for(let i = 0; i < size; i++){
      arr.push(randomIntFromInterval(5,height));
    }
    setArray(arr);
  }
  const disableButton =(value) =>{
    document.getElementById("merge sort").disabled = value;
    document.getElementById("Selection sort").disabled = value;
    document.getElementById("bubble sort").disabled = value;
    document.getElementById("insertion sort").disabled = value;
    document.getElementById("submit").disabled = value;
  }

  const sortMergeAnimations= (array, width) =>{
    let speed = 3;
    if(width === 50){
      speed = 50
    }
    disableButton(true)

    let animations = getMergeSortAnimations(array);
    for (let i = 0 ; i < animations.length; i++){
      const bars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if(isColorChange){
        const [bar, bar2] = animations[i];
        const barStyle = bars[bar].style;
        const bar2Style = bars[bar2].style;
        const color = i % 3 === 0 ? 'red' : '#23B5D3';
        setTimeout(() => {
          barStyle.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = bars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      }

    }
    setTimeout(()=>{
      disableButton(false)
    }, parseInt(speed * animations.length/2 + 5000))

  }
  const sortBubbleAnimations= (array, width )=>  {
    let speed = .2;
    if(width === 50){
      speed = 25
    }
    disableButton(true)
    const [animations] = getbubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color = i % 4 === 0 ? 'red' : '#23B5D3';
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
    setTimeout(()=>{
          disableButton(false)
    }, parseInt(.4 * animations.length/2 + 2500))
  }

  const selectionSort = (array, width) =>{
    let speed =.2;
    if(width === 50){
      speed = 30
    }
    disableButton(true)
      const [animations,sort] = getSelectionSort(array);
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? "red" : "#23B5D3";
            const [ temp ,barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * speed);
        }
        else {
            const [temp,barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * speed);
        }
    }
    setTimeout(()=>{
          disableButton(false)
    }, parseInt(.3 * animations.length/2 + 4000))
  }
   const insertionSort = (array,width) =>{
     let speed= .3
      if(width === 50){
      speed = 25
    }
     disableButton(true)
      const [animations,sort] = getInsertionSortAnimations(array);
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? "red" : "#23B5D3";
            const [ temp ,barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * speed);
        }
        else {
            const [temp,barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * speed);
        }
    }
    setTimeout(()=>{
          disableButton(false)
    }, parseInt(.5 * animations.length/2 + 3000))
  }

  const input= (e) =>{
    e.preventDefault();
    const rtn =  inputArray.split(' ').map((num) => {
        if(Number(num) <= 600 && Number(num) > 0){
        return Number(num)
        }

      });
    setArray(rtn);
    setInputArray('')
  }


  let width = 0;
  if(array.length >= 1 && array.length < 40){
    width = 50;
  }else{
    width = 2
  }

  return(
   <div className="background">
    <div className='button-nav'>
      <button onClick= {resetArray}>Generate random Array </button>
        <button onClick= {() => sortMergeAnimations(array, width) } id="merge sort" >Merge Sort O(n log n)</button>
        <button onClick= {()=>selectionSort(array, width)} id= "Selection sort">Selection Sort O(n^2)</button>
        <button onClick= {()=>sortBubbleAnimations(array, width)}id ="bubble sort">Bubble Sort O(n^2)</button>
          <button onClick= {()=>insertionSort(array, width)} id ="insertion sort">insertionSort Sort O(n^2)</button>
        <form onSubmit ={(e)=>input(e)} >
          <label style={{color: "white"}}>Put spaces between numbers and no numbers higher than 600 </label>
          <input type="string" value={inputArray} onChange={(evt)=> setInputArray(evt.target.value)} ></input>
          <button type="submit" id="submit"> submit</button>
        </form>

      <div className = "array-container">

        {array.map((num, i ) => (
          <div className="array-bar" key={i} style={{height:`${num}px`, width:`${width}px`}}>

          </div>
        ))}


      </div>
    </div>
  </div>
  )
}

export default SortingVis

