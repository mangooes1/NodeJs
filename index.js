// console.log("hyyy")
// const name = (myname)=>{
//     console.log("my name is aastha")
// }
const fs = require("fs");
// filesystem
/*

 fs.writeFileSync('read.txt',"Welcome babe."); //crearting a file in node.js
 fs.appendFileSync("read.txt" , "never") //adding more text
 const buff= fs.readFileSync("read.txt");
 console.log(buff); //node has additional datatype called buffer.
 // used to store binary data.while reading from a file or recieving packets over the network.
org_data = buff.toString();
console.log(org_data);
//rename file
fs.renameSync('read.txt','readWrite.txt')
*/ 

//...................curd operations.......................

/*
fs.mkdirSync("curd")//create a folder : type cd .. < dir< any folder < go through it < node Index.js
fs.writeFileSync("curd/bio.txt", "aaastha"); // makina aa file in curd folder
fs.appendFileSync("curd/bio.txt", " append "); //update
const data = fs.readFileSync("curd/bio.txt", "utf8"); //read: utf8 to write it as it is
console.log(data);
fs.renameSync("curd/bio.txt", "curd/bio1.txt"); //rename
fs.unlinkSync("curd/bio1.txt"); //delete file
fs.rmdirSync("curd"); //delete folder
*/
//....................