for(let i=2; i<num; i++)
    {
        if(num%i==0)
        {
            c++;
            break;
        }
    }
    if(c==1)
    {
        console.log("No");
    }
    else
    {
        console.log("Yes");
    }