var lyrics = ["Bunnies wantin to be fed, I mean hunnies oh forget it",
"Started from the bottom now we here",
"Started from the bottom now the whole team here",
"She gon be upset if she keeps scrolling to the left",
"My team good, we don't even need a mascot",
"I can almost guarantee she know the deal",
"Ball so hard, motherfuckers wanna fine me",
"My flow is in the pocket like wallace, I got the bounce like hydrolics",
"But most of y'all don't get the picture less the flash is on",
"I'm flyer than the highest flying bird around this hoe",
"Not to mention that the booty's almost better than the face",
"Rob the jewelry store and tell 'em make me a grill",
"Add the whole top diamond and the bottom row's gold",
"I'm changin grills errday, like Jay change clothes",
"Got 30 down at the bottom, 30 more at the top",
"I might cause a cold front if I take a deep breath",
"Open up my mouth and you see more carrots than a salad",
"Call me George Foreman cause I'm selling everybody grills",
"Got a bill in my mouth like I'm Hillary Rodham",
"We throwin money in the air like we don't give a fuck",
"Now mama girl you got a friend that don't mind joining in",
"You lookin good in them shorts but they look better on the floor",
"Bitches say shit and they ain't sayin nothin",
"A hundred motherfuckers can't tell me nothin",
"Bought me Alexander McQueen, he was keeping me stylish",
"He can tell I ain't missing no meals",
"My anaconda don't want none unless you got buns hun",
"I could be broke and keep a million dollar smile",
"All the hoes love me, you know what it is",
"A lot of fools puttin salt in the game til these women get the notion that they runnin the game",
"They got money that they jumping on the pole to make",
"How much shmoney's that",
"We keep em nine millis on my block",
"Runnin through these checks til I pass out",
"All I do is cash out",
"All I do is cache out",
"If you ain't a ho, get up out my trap house",
"I be gettin money til I fall out",
"GS for my gun squad",
"Some wayyyyy, free Breezy ho",
"Bout a week agoooo",
"Shots poppin out the AR",
"I can make a broke bitch rich",
"25 sittin on 25 mill",
"The pimpin ice cold",
"We go 0 to 100 real quick",
"Real fucking quick",
"It's 2008 I'm tryna paint a picture",
"I'm the only one that get the job done",
"On to the next one",
"Now double your money and make it stack",
"Somebody bring me back some money please",
"I got a million ways to get it",
"Lamborghini mercy",
"I'm in this two seat lambo",
"I ain't sayin she a gold digger",
"Uhuh honey",
"One good girl is worth a thousand bitches",
"What you doin at the club on a Thursday",
"Let me see your grill",
"Let you see my what",
"Ya, ya grill, ya, ya, ya grill",
"Must be your ass, cause it ain't your face",
"I need a tip drill",
"It ain't no fun less we all get some",
"Turn that ass up mama, put that dip in ya back",
"Must be your money, cause it ain't your face",
"My apple bottom lookin right, I know you wanna bite",
"I got you paying my bills and buying automobiles",
"I must have a quarter milli on me right now",
"Rack city bitch",
"Rack rack city bitch",
"Ten ten ten twenties on your titties bitch",
"I need my money pronto",
"Throwin hunnids",
"I got them shakin it, just like congo",
"Get in there",
"Girl wobble it, and Ima gobble it",
"I can't help my flow ridiculous",
"Hey big girl, make it back it up",
"Back it up, drop it down",
"Damn it feels good to be a gangsta",
"Baby I got your money don't you worry",
"I got enemies, got a lotta enemies",
"I got anemones, got a lotta anemones",
"Gun in my purse, bitch I came dressed to kill",
"We want prenup",
"Mustard on the beat, ho",
"Get low, scrub the ground",
"Push it up, push it up",
"And when I was five, my favorite movie was the Gremlins. Ain't got shit to do with this, but I just thought that I should mention",
"It goes down in the DM",
"So I hit her in the DM",
"Oh, my DM poppin",
"Don't you hate when you get screenshotted",
"Money don't fold if it act right",
"I'm going, going back, back to the Bay",
"In the club got them bottles on replay",
"Tryna break a record like a DJ",
"I give that bitch some act right",
"That's a hunnid fifty bottles in one night",
"Going, going back, back to the bank",
"I'm in the Fendi store, I don't need help",
"Panda",
"Panda panda panda panda",
"How you like your eggs, fried or fertilized",
"Lemme smang it, girl"];

var selection = [];
for (i = 0; i < 20; i++) {
	selection.push(lyrics[Math.floor(Math.random() * lyrics.length)]);
}
selection = selection.join(". ");
var target = document.getElementById("lyricBody");
target.innerHTML = selection + ".";
