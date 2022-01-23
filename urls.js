const { default: axios } = require('axios');
const fs = require('fs');
const process = require('process');

function readFile(path){
    fs.readFile(path , 'utf8' , (err , data) => {
        if (err) {
            console.error(`Error reading ${path} : ${err}`);
            process.exit(1);
        }else {
            let splitData = data.split('/');
            let urlArr = [];
            for (i of splitData) {
                if (i.length > 5) {
                    urlArr.push(i);
                }
            }
            let newArr = []
            for (i of urlArr) {
                 i = i.split('https:');
                newArr.push(i);
            }
            let anotherNewArr = []
            for (i of newArr){
                for(j of i) {
                    j = j.split('http:')
                    anotherNewArr.push(j);
                }
            }
            let andANewOne = [];
            for (i of anotherNewArr) {
                for (j of i){
                    if(j.length > 1 && j !== 'console.html') {
                        andANewOne.push(j)
                    }
                }
            }
            for (i of andANewOne){
               urlCall(i);
            }
           
        }
        }
    )
}

async function urlCall(url) {
    try {
    let resp = await axios.get(`http://${url}`);
    fs.writeFile(`${url}` , resp.data , {encoding : 'utf8' , flag : 'a'} , function(err) {
        if(err) {
            console.error(err);
        }else {
            console.log(`Wrote to ${url}`)
        }
    })
    } catch (err) {
        console.error(`Error fecthing ${url} : ${err}`)
    }
}

readFile(process.argv[2]);