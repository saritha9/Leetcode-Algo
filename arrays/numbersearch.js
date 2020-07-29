function NumberSearch(str)
{
    var count =0;
    var num = 0;
    console.log(str);
    for(var i=0; i<=str.length;i++)
    {
        var c = str.charAt(i);
        if(c*0 == 0){
            num = num + c * 1;
            continue;
        }
        else(c>=65 && c<91 ) || (c>=97 && c<123)
        {
            count =count + 1;
        }
    }
    if( count === 0 || num ===0)
    {
        return 0;
    }else{
        console.log(num);
        console.log(count);
        return(Math.floor(num/count));

    }
}
var x = NumberSearch("H34ello_");
