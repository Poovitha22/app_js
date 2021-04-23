let cabTypes=["micro","mini","prime"];
console.log("cabTypes");
console.log("for loop");
for(let i=0;i<cabTypes.length;i++)
{
    let type=cabTypes[i];
    console.log(type);
}
for(let type of cabTypes)
{
    console.log(type);
}
console.log("no of cabTypes ",cabTypes.length);
console.log("contains ",cabTypes.includes("micro"));