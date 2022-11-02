// 1. Write a program that checks if a given element e is in the array a. 
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no
function checksIsA(array, a)
{
    k=0;
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i]==a)
        {
         k+=1;
        }
    }
return k;
}
console.log("1. Zadatak: Given element is in the array "+ checksIsA([5, -4.2, 3, 7,3], 3) +". times!");

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
function multipliesEveryPE(array)
{
    var e=[];
    var j = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i]>0) 
        {
            array[i]=array[i]*2;
        }
    e[j] = array[i];
    j++;
    }
    return e;
}
console.log("2. Zadatak: "+ multipliesEveryPE([-3, 11, 5, 3.4, -8]));

// 3. Write a program that finds the minimum of a given array and prints out its value and 
// index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
function minimumArray(array)
{
    m=array[0];
    k=0;
    for (let i = 1; i < array.length; i++) 
    {
        if(array[i]<m)
        {
            m=array[i];
            k=i;
        }   
    }
return [m,k];
}
console.log("3. Zadatak: "+ minimumArray([4, 2, 2, -1, 6]));

// 4. Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
function minimumSecond(array)
{
    m=array.sort();
    return m[1];
}
console.log("4. Zadatak: "+ minimumSecond([4, 2, 2, -1, 6]));

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
function sumPos(array) 
{
    m=0;
    for (let i = 0; i < array.length; i++) 
    {
    if(array[i]>0)
    {
        m=m+array[i];
    }   
}
return m;    
}
console.log("5. Zadatak: "+ sumPos([3, 11, -5, -3, 2]));

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can 
// be read the same way both from the left and the right hand side. 
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.
function isSymetric(array)
{
    a=0;
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i]==array[array.length-i-1])
        {
            a++;
        }
    }
    if(a==array.length)
    {
        return "Array IS symmetric!"
    }
    else
    {
        return "Array  is NOT symmetric!"
    }
}
console.log("6. Zadatak: "+ isSymetric([2, 4, -2, 7, -2, 4, 2]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same 
// length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
function intertwinesTwoArrays(array1,array2)
{
    var j = 0;
    var e=[];
    for (let i = 0; i < array1.length; i++) 
    {
        e[j] = [array1[i],array2[i]];
        j++;
    }
return e;
}
console.log("7. Zadatak: "+ intertwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
function concatenatesTwoArrays(array1,array2)
{
    var e=[];
    e = [array1,array2];
return e;
}
console.log("8. Zadatak: "+ concatenatesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 9. Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
function deletesGE(array,e)
{
    var j = 0;
    var w=[];
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i]!=e)
        {
        w[j]=array[i];
        j++;
        }
    }
return w;
}
console.log("9. Zadatak: "+ deletesGE([4, 6, 2, 8, 2, 2],2));

// 10. Write a program that inserts a given element e on the given position p in the array a. If 
// the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
function insertsGE(array,e,p)
{
    var w=[];
    var w1=[];
    var h=0;
    for (let i = 0; i < p; i++) 
    {
        w[i]=array[i];
    }
    for (let j = p; j < array.length; j++) 
    {
        w1[h]=array[j];
        h++;
    }
    arrayN=[w,e,w1];
    return arrayN;
}
console.log("10. Zadatak: "+ insertsGE([2, -2, 33, 12, 5, 8],78,3));