var longestIncrease = function(test){
    var dp=[];
    var maxlens=1;
    for(var i =0; i<test.length; i++)
    {
        var maxval =0;
        for(var j=0; j<i;j++)
        {
            if(test[i]> test[j])
            {
                maxval = Math.max(dp[j], maxval);
            }
            
        }
        dp[i]= maxval+1;
        maxlens = Math.max(maxlens, dp[i]);
    }
    return maxlens;
}
longestIncrease([10, 22, 9, 33, 21, 50, 41, 60]);

 function printSubsets(s)
    {
        var set = Array.from(s);
        var  n = set.length;
 
        // Run a loop for printing all 2^n
        // subsets one by obe
        for (var i = 0; i < (1<<n); i++)
        {
            var s ="{";
 
            // Print current subset
            for (var j = 0; j < n; j++)
 
                // (1<<j) is a number with jth bit 1
                // so when we 'and' them with the
                // subset number we get which numbers
                // are present in the subset and which
                // are not
                if ((i & (1 << j)) > 0)
                    s = s+ (set[j] + " ");
 
            console.log(s+"}");
        }
    }
    printSubsets("qwer");

    function Add(x, y)
    {
        console.log(x.toString(2)+ " : "+ y.toString(2)) 
        // Iterate till there is no carry
        while (y != 0) 
        {
            // carry now contains common
            // set bits of x and y
            var carry = x & y;
           
            // Sum of bits of x and 
            // y where at least one 
            // of the bits is not set
            x = x ^ y;
             
            // Carry is shifted by 
            // one so that adding it 
            // to x gives the required sum
            y = carry << 1;
            console.log(x.toString(2)+ " : "+ y.toString(2)+ " : "+carry.toString(2)) 
            console.log(x+ " : "+ y+ " : "+carry) 
        }
        return x;
    }
    Add(23,2);

    var people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ]
function groupBy(list, property)
{
    var r = list.reduce( (acc, obj) => {
        let k = obj[property];
        if(!acc[k])
        {
            acc[k]= [];
        }
        acc[k].push(obj);
        return acc;
    }, {});
    return r;
}
console.log(groupBy(people, "age"));

function selfdividedNumn(left, right){
    var array = new Array(right-left+1).fill(0).map(function(item, index){
         return left + index;
    }).filter(function(item){
        let test = item.toString().split("").find(function(num){
            return item%Number.parseInt(num) != 0;
        })
        console.log(test);
        return test === undefined;
    });
    return array;
}
selfdividedNumn(1, 22);    

function binarySearch(list, value)
{
    let start =0;
    let end = list.length -1;
    var middle =Math.floor((start+end)/2);
    while (list[middle] != value && start<end )
    {
        if(list[middle]>value)
        {
            end = middle -1;
        }else
            start = middle +1;
       middle = Math.floor((start +end)/2);     
    }
    return list[middle] != value ?-1 :middle;
}
const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) ;

function found(selector1, selector2)
{
    var foundlist =[];
    var flist = document.querySelectorAll(selector1);
    var out = Array.prototype.slice.call(flist);
    out.forEach(function(ele){
        let slist = ele.querySelectorAll(selector2);
        
        foundlist = foundlist.concat(Array.from(slist)); 
    })
    return foundlist;
}

var promise = new Promise(function(reslove, reject){
    ///doo somethinherre
    if(true)
       resolve(data);
    else
       reject("some thing wroing");   
});
promise.then(function(result){
   console.log(JSON.stringify(result));
}, function(error){
    alert(error)
});
var book =JSON.stringify( {
    "heading": "<h1>A story about something</h1>",
    "chapterUrls": [
      "chapter-1.json",
      "chapter-2.json",
      "chapter-3.json",
      "chapter-4.json",
      "chapter-5.json"
    ]
  });
function get(url)
{
    return new Promise(function(resolve, reject){
        var req= new XMLHttpRequest();
        req.open("GET", url);
        req.onload= function(){
            if(req.status==200){
                resolve(req.response);
            }else
            {
                reject(Error(req.statusText));
            }
        };
        req.send();
    })
}
function getdata(url)
{
    return new Promise(function(resolve, reject){
        resolve(book);
    })
}
function getjson(url)
{
   return getdata(url).then(function(response){
       console.log(response);
       return JSON.parse(response);
   })
}
function getchapter(i){
    return getjson("ee").then(function(story){
        return getjson(story.chapterUrls[i]);
    })
}
getchapter(i).then(function(d){
    console.log("chapter", data);
}).catch(function(e){
    console.log("erro",e)
}).then(function(){SVGFEConvolveMatrixElement.log("done")})

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function dupcounts(list)
{
    var countname = list.reduce(function(allName, name){
       if(name in allName)
       {
           allName[name] +=1;
       }else
       {
           allName[name]=1;
       }
       return allName;
    }, {}) 
    return countname;
}
console.log(dupcounts(names));

//jquery replace
function replace(current, to)
{
    var c= document.querySelector(current);
   var p = document.querySelector(current).parentNode;
   var new_ele = document.createElement("span");
   parent.replaceChild(c, new_elem);

}

//sort the object
var maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
function sortableObject(obj)
{
    var sortableArray = [];
    for(key in obj){
        sortableArray= [...sortableArray, [key, obj[key]]]
    }
    sortableArray.sort(function(a,b){
        return a[1] >b[1];
    })
    return sortableArray;
}
console.log(Object.entries(maxSpeed).sort(function(a,b){
   return a[1] -b[1]>0;}
))
var sorted = Object.entries(maxSpeed).sort((a,b)=>{
    return a[1] -b[1]>0;}
 )
console.log(sortableObject(maxSpeed))