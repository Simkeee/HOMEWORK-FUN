
// 1. Write a function that converts an array of strings into an array of numbers. Filter 
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
function convertStoN (array)
{
    var a=[];
    var j=0;
    for (let i = 0; i < array.length; i++) 
    {
        if(typeof array[i]=== typeof "number")
        {
            a[j]=array[i];
            j++;
        }
    }
return a;
}
console.log("1. Zadatak: " + convertStoN (["1", "21", undefined,null, "42", "1e+3", Infinity]));

// 2. Write a program to join all elements of the array into a string skipping elements 
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”
function joinElements(array)
{
    var j="";
    for (let i = 0; i < array.length; i++) 
    {
        if (!isNaN(array[i]))
        {
            if (array[i]!=Infinity)
            {
                if (array[i]!=null)
                {
                    if (array[i]!=undefined)
                    {
                        j=j+array[i];
                    }
                }
            }
        }
    }
return j;
}
console.log("2. Zadatak: " + joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
function falsyV(array)
{
    var j=0;
    var s=[];
    for (let i = 0; i < array.length; i++) 
    {
        if(typeof array[i] == 'number' && !isNaN(array[i]) && array[i]!=0)
        {
           s[j]= array[i];
           j++;
        }
    }
    return s;
}
console.log("3. Zadatak: " + falsyV([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
function numberInt(array)
{
    var j=0;
    var s=[];
    for (let i = 0; i < array.length; i++) 
    {
        if (Number.isInteger(array[i]))
        {
            s[j]= array[i];
            j++;
        }
    }
return j;
}
console.log("4. Zadatak: " + numberInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
function numberFlo(array)
{
    var j=0;
    var s=[];
    for (let i = 0; i < array.length; i++) 
    {
        if(Number(array[i]))
        {
            if (!Number.isInteger(array[i]))
            {
                s[j]= array[i];
                j++;
            }
        }
    }
return j
}
console.log("5. Zadatak: " + numberFlo([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
