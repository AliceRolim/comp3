function lexico(){
var msg = document.getElementById("msg").value;
  console.log("--------------------------------")
  var res=e1(msg.toUpperCase());
document.getElementById("result").innerHTML=""
document.getElementById("result").innerHTML+="token => valor do atributo, classe gramatical, número da linha"+"<br>"
  for(var i=0;i<res.length;i++){

document.getElementById("result").innerHTML+="token["+i+"]: "+res[i]+"<br>"
  }

return res
}

function e1(txt){
  var res=[]
  var i=0
var chr='' 
var k=0
var l=0
var idf=[]
var idf2=[]
var line=0
var chs=0
var token=[]
  
  var numeros=['0','1','2','3','4','5','6','7','8','9']
  var letras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  


while(i < txt.length){
if(txt[i]=='\n'){
  line++
  i++
}

chr =txt[i]

if(chr==null){


}else{
console.log("leu: "+chr)

if(numeros.includes(chr)){
("-----------------e3-----------------") 
  var num=""
    idf2[l]=chr
  l++

    if(numeros.includes(txt[i+1])){
      console.log(idf2) 
        idf2[l]=txt[i+1]
   num=idf2.join('')
   console.log(num)
   token[chs]=[num," Numero",line]
    chs++
    idf2=[]
    l=0
    i++
}else{
token[chs]=[chr," Numero",line]
chs++
    idf2=[]
}
console.log("-----------------e3-----------------") 
}else{
if(letras.includes(chr)){
     console.log("-----------------e2-----------------") 
    var reserved_words = [  "LET", "IF", "ELSE", "AND","GO","OF","PRINT","READ","TO","THEN","GO TO","END"];
  var wrd=""

    idf[k]=chr
  k++
   /*
   console.log("idf: "+idf)
   console.log(reserved_words.includes(idf.join('')))
   console.log(srchwrd(idf.join('')))
      */
var t =reserved_words.includes(idf.join(''))

// var t =srchwrd(idf.join(''))

if(t){

wrd=idf.join('')
idf=[]
k=0
token[chs]=[wrd," Identificador",line]
chs++
}else{

 if(!letras.includes(txt[i+1])&&!numeros.includes(txt[i+1])){

token[chs]=[chr," variavel",line]
chs++
k=0
 }else{
  if(txt[i+1]!=null){
  if((txt[i+1]==""||txt[i+1]==" ")&&(txt[i-1]==""||txt[i-1]==" "||txt[i-1]=='+'||txt[i-1]=='-'||txt[i-1]=='/'||txt[i-1]=='*'||txt[i-1]=='='||txt[i-1]==';'||txt[i-1]=='('||txt[i-1]==')')){
token[chs]=[chr," variavel",line]
chs++
idf=[]
k=0
  }else{
     if(txt[i-1]=='+'||txt[i-1]=='-'||txt[i-1]=='/'||txt[i-1]=='*'||txt[i-1]=='='||txt[i-1]==';'||txt[i-1]=='('||txt[i-1]==')'){
token[chs]=[chr," identificador",line]
chs++
idf=[]
k=0
}}}}

}

 console.log("-----------------e2-----------------")
}else{
 
  if(chr=='+'||chr=='-'||chr=='/'||chr=='*'||chr=='='||chr==';'){
    token[chs]=[chr," operador",line]
    chs++
  }



  if(chr=='<'||chr=='>'||chr=='=='||chr=='<='||chr=='>='){
    token[chs]=[chr," operador comparacao",line]
    chs++
  }

  if(chr=='('||chr==')'){
    token[chs]=[chr," parentesis",line]
    chs++
  }
  res[1]=chr
}}

}
i++

}

return token
}


function main(){
 var a =[]
  console.log("-------------lexico-------------------")
  a = lexico()
 console.log("-------------lexico-end------------------")


}
