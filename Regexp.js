//------------one----------//
// let text = 'Hello Students';
// let pattren = '/students/i';
// let result = text.match(pattren)
// document.getElementById('demo').innerHTML=result

//-----------modifiers attb-----------//
//----g---/
// let text ="How is everyone and what is this?"
// let pattren=/is/i;
// let result=text.match(pattren)
// let result=pattren.exec(text)                   //in array form
// let result=pattren.test(text)
// document.getElementById('demo').innerHTML=result                 //will display 1st is
// console.log(result);

//-----------m------------//
// multiple lines

// let text = 'Is this all are there is is'
// let pattern =/ $is/mg
// let result=text.match(pattern)
// let result=pattern.multiline                        //checks is multiline (m) is specified in the pattern or not
// document.getElementById('demo').innerHTML=result

//--------------groups------------------//
//------[abc]-------//
// let text ='Is this but all there is?'
// let pattern=/[h]/g
// let pattern=/[is]/gi                        //takes 'is' as sep letters/chars
// let pattern=/[a-h]/gi                              //all chars between a and h including them
// let text = 'TIME IS MONEY sdfghjk'                              ////all CAPITAL chars between A and M including them
// let pattern=/[A-M]/gi
// let pattern=/[A-M,a-r]/gi
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result

//------[^abc]------^negation-----//
// let text ='Is this but all there is?'
// let pattern=/[^h]/g                     //skips h, prints rest of the sent
// let pattern=/[^is]/g
// let pattern=/[^i-t]/g                       //skips this range 
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result


//------[0-9]-----------//
// let text ='123456789';
// let pattern=/[5]/g
// let pattern=/[^1-5]/g
// let pattern=/[1-5]/g
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result


//------[x or y]-----------//
// let text ='re, green, red,red, green, green, ge, blue, yellow';
// let pattern=/(red|green|yellow)/g           //can give multiple choices
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result


//------metachars-----------//
//----------\w-----inclueds only _ spcl char------//
// let text ='Give your _100%';
// let pattern=/\w/g                   //w is metach which matches a-z A-Z 0-9 and _ also
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result


//----------\W---------includes all other spcl char--//
// let text ='Give your _100%';
// let pattern=/\W/g                   //w is metach which matches a-z A-Z 0-9 and _ also
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result

//----------D--------numbers also---//
// let text ='Give your _100%';
// let pattern=/\D/g                   
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result

//----------Quantifires-------frequency of thing inside bracket--------//
// let text="Hellooooooooooo wor ld he llo coollege!"
// let pattern=/l+/g;
// // let pattern=/\W+/g;
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result


//----------------(*)-------------//
// let text="Hello How are you at home hoe he?"
// let pattern=/Ho*/gi;                    //prints all h o ho(h k sath o, h&o together)
// let pattern=/Ho*e/gi;                       //prints he hoe he

// let text = "1, 100, 1000, 1000000000"
// let pattern = /10*/g                        //1 and everthing with 1 i.e everthing will print as it is
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result

//----------------(?)-------------//
// let text="1, 100, 1000, 1000000000"
// let pattern=/10?/g;                                          //1 and only one zero with 1
// let result=text.match(pattern)
// document.getElementById('demo').innerHTML=result

//----------------()-------------//
// var str='abcpp';
// var str1='abcppppp';
// var str2='abcpppppppppppppppp';
// var pattern=/p{4}/g;                //prets p for 4 times (pppp, pppp, pppp,)
// let result=str2.match(pattern);
// document.getElementById('demo').innerHTML=result

let text="100, 1000 or 100000"
//  let pattern=/\d{3,4}/g                                     //minimum 3 chars and max 4 chars
 let pattern=/\d{3}/g                           //only minimum
 let result=text.match(pattern)
 document.getElementById('demo').innerHTML=result
