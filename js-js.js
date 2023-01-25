var t=["produit","","prix","quantité","prix total"];
var prix=[42,34,66,53,2,33,10];
var des=["produit_1","produit_2","produit_3","produit_4","produit_5","produit_6","produit_7"];
var q=[2,3,1,3,4,4,2];
const tablle_v =document.createElement("table");
const tr_v=document.createElement("tr");
tablle_v.setAttribute("id","t");
for(var x in t)
{
    const th_v=document.createElement("th");
    th_v.innerText=t[x];
    th_v.setAttribute("id","th"+x);
    th_v.style.borderBottom='1px solid black';
    tr_v.append(th_v);
}
tablle_v.style.border='1px solid black';
tablle_v.append(tr_v);
document.body.append(tablle_v);
for(var i=0;i<=6;i++)
{
    const ttr=document.createElement("tr");
    ttr.setAttribute("id","tr"+i);
    tablle_v.append(ttr);
    for(var j=0;j<=7;j++)
    {
        const ttd=document.createElement("td");
        switch(j)
        {
            case 0:
                const img=document.createElement("img");
                img.setAttribute("src","f"+i+".jfif");
                img.setAttribute("class","gal");
                img.style.width="190px";
                img.style.height="190px";
                ttd.style.width="200px";
                ttd.append(img);
                ttr.append(ttd);
            break;
            case 1:
                ttd.innerText=des[i];
                ttd.setAttribute("id",i+"td"+j);
                ttd.style.borderBottom='1px solid black';
                ttd.style.width="200px";
                ttr.append(ttd);
            break;
            case 2:
                ttd.innerText=prix[i];
                ttd.setAttribute("id",i+"td"+j);
                ttd.style.borderBottom='1px solid black';
                ttd.style.width="57px";
                ttr.append(ttd);
            break;
            case 3:
                ttd.innerText=q[i];
                ttd.setAttribute("id",i+"td"+j);
                ttd.style.borderBottom='1px solid black';
                ttd.style.width="50px";
                ttr.append(ttd);
            break;
            case 4:
                ttd.innerText=prix[i]*q[i];
                ttd.setAttribute("id",i+"td"+j);
                ttd.style.borderBottom='1px solid black';
                ttr.append(ttd);
            break;
            case 5:
                var x = document.createElement("INPUT");
                x.setAttribute("type", "number");
                x.setAttribute("onclick",`prx(${i})`);
                x.setAttribute("id","in"+i);
                x.setAttribute("value",q[i]);
                ttd.append(x);
                ttd.style.borderBottom='1px solid black';
                ttr.append(ttd);
            break;
            case 6:
                var x = document.createElement("a");
                x.innerText="X";
                x.setAttribute("value",i);
                x.setAttribute("href","#0");
                x.setAttribute("id",i);
                x.setAttribute("onclick",`rm(${i})`);
                ttd.append(x);
                ttd.style.borderBottom='1px solid black';
                ttr.append(ttd);
            break;
            case 7:
                const img_=document.createElement("img");
                var x_ = document.createElement("a");
                x_.setAttribute("href","#0");
                img_.setAttribute("src","hr1.png");
                img_.setAttribute("onclick",`jad(${i})`);
                img_.setAttribute("id","hr_"+i);
                img_.style.width="25px";
                img_.style.height="30px";
                x_.append(img_);
                ttd.append(x_);
                ttd.style.borderBottom='1px solid black';
                ttr.append(ttd);
            break;
        }
    }
}

function rm(del){
    var p=document.getElementById('t');
    var xil="tr"+del;
    var x =document.getElementById(xil);
    p.removeChild(x);
    prxtotal();
}
function prx(del)
{
    var pi="in"+del;
    var s=document.getElementById(pi).value;
    var po=del+"td3";
    document.getElementById(po).innerHTML=s;
    var ps=del+"td4";
    document.getElementById(ps).innerHTML=s*prix[del];
    prxtotal();
}
function jad(n)
{
    var tty=document.getElementById("hr_"+n);
    var test =tty.getAttribute("src");
    if(test=="hr1.png")
    {
        tty.removeAttribute("src");
        tty.setAttribute("src","hr2.png");
        prxtotal();
    }
    else
    {
        tty.removeAttribute("src");
        tty.setAttribute("src","hr1.png");
    }
}
const dvv =document.createElement("div");
const inpo =document.createElement("input");
inpo.setAttribute("id","p_total");
inpo.setAttribute("readonly","readonly");
dvv.innerText="PRIX TOTAL";
dvv.append(inpo);
document.body.append(dvv);
//alert(document.getElementById('1td4').innerText);
//document.getElementById("p_total").value=parseInt(document.getElementById("1td4").innerText);
//alert(typeof document.getElementById("p_total").value);
function prxtotal()
{
    var ss=0;
    for(var w=0;w<=8;w++)
    {
        ss+=Number(document.getElementById(w+"td4").innerText);
        document.getElementById("p_total").value=ss; 
    }
}
prxtotal();





