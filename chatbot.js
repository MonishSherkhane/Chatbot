	function talk(){
			var know = {
				"who are you?":"Hellow, Monish here and I am a Full Stack Web Developer",
				"how are you":"Good:)",
				"hi":"Hello",
				"hii":"Hi 👋 ! It's good to see you!",
				"hello":"Hi! I'm Mr. Monish 😎 Nice to meet you! 👋",
				"what is your name":"Monish sherkhane",
				"who is monish":"Monish is a FullStack Web Developer.",
				
			}
			
			var user = document.getElementById('userBox').value;
			document.getElementById('chatLog').innerHTML = user + "<br>";
			if(user in know){
				document.getElementById('chatLog').innerHTML = know[user] + "<br>";
			}
			else{
				document.getElementById('chatLog').innerHTML = "Sorry I didn't understand" + "<br>";
			}
		}
		