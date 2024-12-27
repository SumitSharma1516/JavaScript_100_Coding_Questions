// 46. Write a program to find total number of alphabets, digits or special character in a string.

function app(str)
{
    let count=0;
    for(check of str)
    {
        let num = parseInt(check)
        console.log(num)
        if(num === true)
        {
            count++;
        }
    }
    console.log(count)
}
app("asd23")