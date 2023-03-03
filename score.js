console.log("welcome here BHAUI")
var button =document.getElementById('btn')
button.addEventListener('click',(e)=>
{    e.preventDefault();
    var wt=parseint(document.getElementById('wt').value);
    var math=parseint(document.getElementById('math').value);
    var eng=parseint(document.getElementById('eng').value);
    var urdu=parseint(document.getElementById('urdu').value);
    var phy=parseint(document.getElementById('phy').value);
    if(wt>100 && math>100 &&  eng>100 && urdu>100 && phy>100)
    {
        alert("enter corretct marks less tha 100")
    }
    else
    {
        var obtain=wt+math+eng+urdu+phy;
        document.getElementById("obtain").innerHTML=obtain;
        var per=obtain/400*100
        document.getElementById("per").innerHTML=per;
        if(wt>50 && math>50 &&  eng>50 && urdu>50 && phy>50)
        {
            document.getElementById("grade").innerText='Pass';
        }
        else
        {
            document.getElementById("grade").innerText='fail';
        }
    }
    
})





