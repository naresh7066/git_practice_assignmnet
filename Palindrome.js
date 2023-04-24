let str = "naman";
c = "";
    for(let i=str.length-1; i>=0; i--)
    {
        c = c+str[i];
        
    }
    if(str==c)
    {
        console.log("Yes")
    }
    else
    {
        console.log("No");