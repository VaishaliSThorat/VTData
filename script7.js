// program 1
for(let y=1 ; y<5 ; y++){
    console.log(y)
}

for(let y=1 ; y<=3 ; y++){
    console.log(y)
    console.log('hello')
}


// program 2
for(let i=0 ; i<5 ; i++){
    console.log(i)
}

// program 3
// print 1-10
for(let i=1 ; i<=10 ; i++){
    console.log(i)
}

// program 4
// table of 2
for(let i=2 ; i<=20 ; i=i+2){
    console.log(i)
}

// program 5
for(let i=0 ; i<=3 ; i++){
    console.log('hello')
}

// program 6
// print 10-1
for(let i=10 ; i>=1 ; i--){
    console.log(i)
}

// print 5-1
for(let i=5; i>=1 ; i--){
    console.log(i)
}

//program 7
//break statement with for
for(let i=0 ; i<=5 ; i++){
    if(i==3){
        break
    }
    console.log(i)
}

for(let i=0 ; i<=5 ; i++){
    console.log(i)
    if(i==3){
        break
    }
}

// program 8
// continue statement with for
for(let i=0 ; i<=5 ; i++){
    if(i==3){
        continue
    }
    console.log(i)
}

for(let i=0 ; i<=5 ; i++){
    console.log(i)
    if(i==3){
        continue
    }
}

for(let i=5 ; i>=1 ; i--){
    if(i==2){
        break
    }
    console.log(i)
}

for(let i=5 ; i>=1 ; i--){
    if(i==2){
        continue
    }
    console.log(i)
}