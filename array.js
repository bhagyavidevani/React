//PUSH
let Name=["soniya","bhagyavi"]
Name.push("denisha");
console.log(Name);

//POP
let fruits=["kiwi","apple"]
fruits.pop()
console.log(fruits)

//shift
let num=[1,2,3]
num.shift()
console.log(num)

//unshift
let number=[2,3,4]
number.unshift(1)
console.log(number)

//splice
let names=["denisha","bhagyavi","soniya"]
names.splice(2,2, "krishna")
console.log(names)

//map
let numbers=[1,2,3,4]
let squa=numbers.map(num=>num*num)
console.log(squa)

//fliter
let Numbers=[1,2,3,4,5,6]
let evennumber=Numbers.filter(num=>num%2===0)
console.log(evennumber)

//sort
let inline=[3,1,4,2]
inline.sort()
console.log(inline)

//concat
let arr=[3,4]
let arr1=[1,2]
let merged=arr.concat(arr1)
console.log(merged)


//reverse
let reverse=[1,2,3,4]
reverse.reverse()
console.log(reverse)


//reduce
let reduce=[1,2,3,4]
let sum=reduce.reduce((total,ele)=>total +=ele , 10)
console.log(sum)

//includes
let city=["surat","rajasthan","amreli"]
console.log(city.includes("bhavnagar"))
console.log(city.includes("surat"))