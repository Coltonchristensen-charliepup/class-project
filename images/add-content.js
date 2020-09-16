document.write('<h3>Welcome !</h3>');

function getName(){
    const userName = prompt('what is your name??');
    // const value = `<h3>Hello  ${userName} ${userName}!</h3>`;
    // document.write(value);
    let aBunchOfUserNames = '';
    for(let i = 0 ; i< 10; i++){
        // aBunchOfUserNames = aBunchOfUserNames + userName
        aBunchOfUserNames = `${aBunchOfUserNames} Hello ${userName} number ${i+1}</br>`;
    }
    document.write(`<h3>${aBunchOfUserNames}</h3>`)
}

getName();