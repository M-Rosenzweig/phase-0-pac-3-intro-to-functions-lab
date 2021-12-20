function shout(string) {
  return string.toUpperCase();  
}

function whisper(Hello) {  

    return Hello.toLowerCase();  
  }

function logShout(string) {
console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log (string.toLowerCase());
}

function sayHiToHeadphonedRoommate(friendsResponse){

	if( friendsResponse === friendsResponse.toLowerCase()){
  	return("I can't hear you!")
  }
   else if(friendsResponse === friendsResponse.toUpperCase()){
   	return("YES INDEED!");
   }
   else if(friendsResponse === "Let's have dinner together!"){
   	return("I would love to!")
   }
}