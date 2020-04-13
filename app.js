document.getElementById("S1").onclick = function() {
    Story1();
}

document.getElementById("S2").onclick = function() {
    Story2();
}


document.getElementById("clearForm_S1").onclick = function() {
    clearInput_S1();
}

document.getElementById("clearForm_S2").onclick = function() {
    clearInput_S2();
}


document.getElementById("Submit_Story1").onclick = function() {
    submit_Story1();      
}

document.getElementById("Submit_Story2").onclick = function() {
    submit_Story2();      
}






function Story1() {
    document.getElementById("Story1-Words").style.display = "block";
    document.getElementById("Story1-Complete").style.display = "none";
    document.getElementById("Story2-Words").style.display = "none";
    document.getElementById("Story2-Complete").style.display = "none";
}

function Story2() {
    document.getElementById("Story1-Words").style.display = "none";
    document.getElementById("Story1-Complete").style.display = "none";
    document.getElementById("Story2-Words").style.display = "block";
    document.getElementById("Story2-Complete").style.display = "none";
}



function submit_Story1() {
    var word1 = document.getElementById("S1_word-1").value;
    var word2 = document.getElementById("S1_word-2").value;
    var word3 = document.getElementById("S1_word-3").value;
    var word4 = document.getElementById("S1_word-4").value;
    var word5 = document.getElementById("S1_word-5").value;
    var word6 = document.getElementById("S1_word-6").value;
    var word7 = document.getElementById("S1_word-7").value;
    var word8 = document.getElementById("S1_word-8").value;
    var word9 = document.getElementById("S1_word-9").value;
    var word10 = document.getElementById("S1_word-10").value;
    var word11 = document.getElementById("S1_word-11").value;
    var word12 = document.getElementById("S1_word-12").value;
    var word13 = document.getElementById("S1_word-13").value;
    var word14 = document.getElementById("S1_word-14").value;
    var word15 = document.getElementById("S1_word-15").value;
    var word16 = document.getElementById("S1_word-16").value;
    var word17 = document.getElementById("S1_word-17").value;
    var word18 = document.getElementById("S1_word-18").value;
    var word19 = document.getElementById("S1_word-19").value;
    
    document.getElementById("S1_w1").innerHTML = word1;
    document.getElementById("S1_w2").innerHTML = word2;
    document.getElementById("S1_w3").innerHTML = word3;
    document.getElementById("S1_w4").innerHTML = word4;
    document.getElementById("S1_w5").innerHTML = word5;
    document.getElementById("S1_w6").innerHTML = word6;
    document.getElementById("S1_w7").innerHTML = word7;
    document.getElementById("S1_w8").innerHTML = word8;
    document.getElementById("S1_w9").innerHTML = word9;
    document.getElementById("S1_w10").innerHTML = word10;
    document.getElementById("S1_w11").innerHTML = word11;
    document.getElementById("S1_w12").innerHTML = word12;
    document.getElementById("S1_w13").innerHTML = word13;
    document.getElementById("S1_w14").innerHTML = word14;
    document.getElementById("S1_w15").innerHTML = word15;
    document.getElementById("S1_w16").innerHTML = word16;
    document.getElementById("S1_w17").innerHTML = word17;
    document.getElementById("S1_w18").innerHTML = word18;
    document.getElementById("S1_w19").innerHTML = word19;

    document.getElementById("Story1-Words").style.display = "none";
    document.getElementById("Story1-Complete").style.display = "block"; 
    document.getElementById("Story2-Words").style.display = "none";    
    document.getElementById("Story2-Complete").style.display = "none";     
}



function submit_Story2() {
    var word1 = document.getElementById("S2_word-1").value;
    var word2 = document.getElementById("S2_word-2").value;
    var word3 = document.getElementById("S2_word-3").value;
    var word4 = document.getElementById("S2_word-4").value;
    var word5 = document.getElementById("S2_word-5").value;
    var word6 = document.getElementById("S2_word-6").value;
    var word7 = document.getElementById("S2_word-7").value;
    var word8 = document.getElementById("S2_word-8").value;
    var word9 = document.getElementById("S2_word-9").value;
    var word10 = document.getElementById("S2_word-10").value;
    var word11 = document.getElementById("S2_word-11").value;
    var word12 = document.getElementById("S2_word-12").value;
    var word13 = document.getElementById("S2_word-13").value;
    var word14 = document.getElementById("S2_word-14").value;
    var word15 = document.getElementById("S2_word-15").value;
    var word16 = document.getElementById("S2_word-16").value;
    var word17 = document.getElementById("S2_word-17").value;
    var word18 = document.getElementById("S2_word-18").value;
    var word19 = document.getElementById("S2_word-19").value;
    var word20 = document.getElementById("S2_word-20").value;
    
    document.getElementById("S2_w1").innerHTML = word1;
    document.getElementById("S2_w2").innerHTML = word2;
    document.getElementById("S2_w3").innerHTML = word3;
    document.getElementById("S2_w4").innerHTML = word4;
    document.getElementById("S2_w5").innerHTML = word5;
    document.getElementById("S2_w6").innerHTML = word6;
    document.getElementById("S2_w7").innerHTML = word7;
    document.getElementById("S2_w8").innerHTML = word8;
    document.getElementById("S2_w9").innerHTML = word9;
    document.getElementById("S2_w10").innerHTML = word10;
    document.getElementById("S2_w11").innerHTML = word11;
    document.getElementById("S2_w12").innerHTML = word12;
    document.getElementById("S2_w13").innerHTML = word13;
    document.getElementById("S2_w14").innerHTML = word14;
    document.getElementById("S2_w15").innerHTML = word15;
    document.getElementById("S2_w16").innerHTML = word16;
    document.getElementById("S2_w17").innerHTML = word17;
    document.getElementById("S2_w18").innerHTML = word18;
    document.getElementById("S2_w19").innerHTML = word19;
    document.getElementById("S2_w20").innerHTML = word20;

    document.getElementById("Story1-Words").style.display = "none";
    document.getElementById("Story1-Complete").style.display = "none";   
    document.getElementById("Story2-Words").style.display = "none";  
    document.getElementById("Story2-Complete").style.display = "block";     
}

function clearInput_S1() {
    document.getElementById("S1_word-1").value = "";
    document.getElementById("S1_word-2").value = "";
    document.getElementById("S1_word-3").value = "";
    document.getElementById("S1_word-4").value = "";
    document.getElementById("S1_word-5").value = "";
    document.getElementById("S1_word-6").value = "";
    document.getElementById("S1_word-7").value = "";
    document.getElementById("S1_word-8").value = "";
    document.getElementById("S1_word-9").value = "";
    document.getElementById("S1_word-10").value = "";
    document.getElementById("S1_word-11").value = "";
    document.getElementById("S1_word-12").value = "";
    document.getElementById("S1_word-13").value = "";
    document.getElementById("S1_word-14").value = "";
    document.getElementById("S1_word-15").value = "";
    document.getElementById("S1_word-16").value = "";
    document.getElementById("S1_word-17").value = "";
}

function clearInput_S2() {
    document.getElementById("S2_word-1").value = "";
    document.getElementById("S2_word-2").value = "";
    document.getElementById("S2_word-3").value = "";
    document.getElementById("S2_word-4").value = "";
    document.getElementById("S2_word-5").value = "";
    document.getElementById("S2_word-6").value = "";
    document.getElementById("S2_word-7").value = "";
    document.getElementById("S2_word-8").value = "";
    document.getElementById("S2_word-9").value = "";
    document.getElementById("S2_word-10").value = "";
    document.getElementById("S2_word-11").value = "";
    document.getElementById("S2_word-12").value = "";
    document.getElementById("S2_word-13").value = "";
    document.getElementById("S2_word-14").value = "";
    document.getElementById("S2_word-15").value = "";
    document.getElementById("S2_word-16").value = "";
    document.getElementById("S2_word-17").value = "";
}
