import { Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');

const guidelineBaseWidth =  390;
const guidelineBaseHeight = 820;

const horizontalScale = (size:number)=>Math.ceil((width/guidelineBaseWidth)*size);
const verticleScale = (size:number)=>Math.ceil((height/guidelineBaseHeight)*size);

const scaledWidth = (percentage : number) => (width*percentage)/100;
const scaledHeight = (percentage : number) => (height* percentage)/100;

export {horizontalScale,verticleScale,scaledHeight,scaledWidth};