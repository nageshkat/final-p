var appData = () => {
    var main=[];
    var x = new XMLHttpRequest();
    x.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
    x.send();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            var data = JSON.parse(this.responseText)
            // console.log(data)
            var s = 1;
            var f=0;
            for (var i = 0; i < data.length; i++) {
                f=f+1;
                // console.log(data[i])
                main.push(data[i])
                
                var div_tag = document.createElement("div");
                div_tag.className = "app_data";
                var ques = document.createElement('p')
                ques.className = "optn"
                
                
                

                document.getElementById('main').appendChild(div_tag);
                //    div_tag.innerHTML=data[i]
                
                for (var j in data[i]) {
                    
                    if (j == "options") {
                        var v=1;
                        for (var z in data[i][j]) {
                            // console.log(data[i][j][z])
                            
                            var inp_tag = document.createElement('input')
                            inp_tag.setAttribute("id", "inp" + s)
                            
                            inp_tag.className = "option";
                            // f=f+1;
                            inp_tag.setAttribute("type", "radio")

                            inp_tag.setAttribute("name", "inp_name"+f)
                            inp_tag.setAttribute("value",v)
                            v=v+1;
                            div_tag.appendChild(inp_tag)
                            var lab_tag = document.createElement('label')
                            lab_tag.setAttribute("for", "inp" + s)
                            s = s + 1;
                            lab_tag.className="lab_style"
                            div_tag.appendChild(lab_tag)
                            lab_tag.innerHTML += " " + data[i][j][z] + "<br>";
                            // fun()
                            
                        }  

                    }
                    else if (j == "id") {
                        ques.innerHTML += "Q" + data[i][j] + ".";

                    }
                    else if (j == "answer") {
                        div_tag.innerHTML += "";

                    }
                    else {
                        div_tag.appendChild(ques)
                        ques.innerHTML += data[i][j] + "<br><br>";
                    }

                } 
                // for(var n=0;n<5;n++){
                //     var ans=[];
                //     var a=data.answer;
                //     ans.push(a)
                    
                // }
                // console.log(ans)
                // for(var m=0)
                // var a=ans.push(data[0].answer)
                // var a=ans.push(data[1].answer)
                // var a=ans.push(data[2].answer)
                // var a=ans.push(data[3].answer)
                // var a=ans.push(data[4].answer)
                // var d=a.concat(b)
                // console.log(a)

                // function fun(){

                //     var z = document.querySelectorAll('.option[name="inp_name1"]')
                //     for(var r=0;r<z.length;r++){
                //         // console.log(z[r])
                //         if(z[r].checked){
                            
                //             for(var n=0;n<data[i].length;n++){
                //                 // console.log(ans[n])
                //                 var x=0;
                //                 if(z[r].value==data[i].answer){
                //                     // console.log(z[r].value)
                //                 x=x+1

                    
                //                     // console.log(z[r])
                //                     document.getElementById('p_tag').innerHTML=x;
                //                 }
                //             }
                
                //         }
                //     }
                
                // }
                // var main_div = document.getElementById('main');
                // var btn_tag = document.createElement('button');
                // btn_tag.innerHTML = "submit";
                // btn_tag.className = "btn_style";
                // btn_tag.addEventListener("click",fun)
                // btn_tag.setAttribute("Onclick","fun();")
                

                



            }
            console.log(main)
            for(var m=0;m<main.length;m++){
                // console.log(m)

            }
            
            function fun(){
                for(var m=0;m<main.length;m++){
                    // console.log(m)
                    console.log(main[m].answer)
                    var z= document.querySelectorAll('.option:checked')
                    for(var r=0;r<z.length;r++){
                    //    console.log(main[m].answer)
                    var c=0;
                       if(z[r].value==main[m].answer){
                        c=c+1;
                        //    console.log("c")
                           document.getElementById('p_tag').innerHTML=c;
                        }else{
                            // console.log("no")
                            document.getElementById('p_tag').innerHTML=c;
                        }
                    }
                    // break;
                    
                    // console.log(z)
                    // for(var r=0;r<z.length;r++){
                    //     // console.log(z[r])
                    //     // if(z[r].checked){
                    //     //     if(z[r].value==1){

                    //     //         console.log("yes")
                    //     //     }
                    //     // }
                    // }
                }
            }

            //  function fun(){


            //         var z = document.querySelectorAll('.option[name="inp_name1"]')
            //         for(var r=0;r<z.length;r++){
            //             // console.log(z[r])
            //             if(z[r].checked){
                            
            //                 for(var n=0;n<main.length;n++){
            //                     console.log(main)
            //                     var x=0;
            //                     if(z[r].value==main[n]){
            //                         // console.log(z[r].value)
                                    
                                    
            //                         // console.log(z[r])
            //                         x=x+1
            //                         console.log(x)
            //                         document.getElementById('p_tag').innerHTML=x;
            //                     }
            //                     // else{
            //                         //     document.getElementById('p_tag').innerHTML=0;
            //                         // }
            //                         // console.log(z[r].value==main[n])
            //                     }
                                
            //                 }
            //         }
                
            //     }

            var main_div = document.getElementById('main');
            var btn_tag = document.createElement('button');
            btn_tag.innerHTML = "submit";
            btn_tag.className = "btn_style";
            btn_tag.addEventListener("click",fun)
            // btn_tag.setAttribute("Onclick","fun();")
            // var btn_tag=document.getElementById('btn')
            main_div.appendChild(btn_tag)
            // const result = document.getElementById("p_tag");
            // function fun1() {
            //     const question1 = document.querySelectorAll("input[name=inp_name1]:checked");
            //        var x=0;
            //     if (question1 && question1.value ===3) {
            //         x=x+1;
            //       result.innerHTML = x;
            //     } else {
            //       result.innerHTML = x;
            //     }
            //   }
            // btn_tag.addEventListener("click",fun1());
            



        }
    }

}


appData();



// function fun(){
//     var z = document.querySelectorAll('.option')
//     var x=0;
//     for(var r=0;r<z.length;r++){
//         // console.log(z[r])
//         if(z[r].checked){
//             if(z[r].value==1){
//                 // console.log(z[r].value)

//                 x=x+1
//                 console.log(z[r])
//                 document.getElementById('p_tag').innerHTML=x;
//             }

//         }
//     }

// }











