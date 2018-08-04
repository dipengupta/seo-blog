
function about_history()
{
	var x = document.getElementById("data") ;
	x.style.backgroundImage = 'url(../Media/bg_3.jpg)';
	x.style.height = "500px";
	var info="<p>The guitar is a musical instrument classified as a string instrument with anywhere from four to 18 strings, usually having six. The sound is projected either acoustically, using a hollow wooden or plastic and wood box (for an acoustic guitar), or "
			+ "through electrical amplifier and a speaker (for an electric guitar).</p> <p> It is typically played by strumming or plucking the strings with the fingers, thumb and/or fingernails of the right hand or with a pick while fretting (or pressing against the frets) "
			+ "the strings with the fingers of the left hand. The guitar is a type of chordophone, traditionally constructed from wood and strung with either gut, nylon or steel strings and distinguished from other chordophones by its construction and tuning. </p> <p>The modern guitar was preceded by the gittern, the vihuela, the four-course Renaissance guitar, and the five-course baroque guitar, all of which contributed to the development of the modern six-string instrument."
			+ "<center><img src='../Media/guitar_1.jpg'></center> "
	x.innerHTML = info ;
}


function about_players() 
{
	var x = document.getElementById("data") ;
	x.style.backgroundImage = 'url(../Media/bg_3.jpg)';
	x.style.backgroundAttachment = 'fixed';
	x.style.height = "880px";

	var info = " <ul> " +
				"<li><b>Acoustic guitars</b></li> " +
				"	<p> " +
			"Acoustic guitars form several notable subcategories within the acoustic guitar group: classical and flamenco guitars; steel-string guitars, which include the flat-topped, or 'folk', guitar; twelve-string guitars; and the arched-top guitar. The acoustic guitar group also includes unamplified guitars designed to play in different registers, such as the acoustic bass guitar, which has a similar tuning to that of the electric bass guitar. " +
			"</p> " +
			"	<li><b>Renaissance and Baroque guitars</b></li> " +
					"<p> " +
			"Renaissance and Baroque guitars are the gracile ancestors of the modern classical and flamenco guitar. They are substantially smaller, more delicate in construction, and generate less volume. The strings are paired in courses as in a modern 12-string guitar, but they only have four or five courses of strings rather than six single strings normally used now. They were more often used as rhythm instruments in ensembles than as solo instruments, and can often be seen in that role in early music performances. " +
			" (Gaspar Sanz's Instrucción de Música sobre la Guitarra Española of 1674 contains his whole output for the solo guitar.)[8] Renaissance and Baroque guitars are easily distinguished because the Renaissance guitar is very plain and the Baroque guitar is very ornate, with ivory or wood inlays all over the neck and body, and a paper-cutout inverted 'wedding cake' inside the hole.</p> " +
				"<li><b>Classical guitars</b></li> " +
				"<p> " +
			"Classical guitars, also known as 'Spanish' guitars, are typically strung with nylon strings, plucked with the fingers, played in a seated position and are used to play a diversity of musical styles including classical music. The classical guitar's wide, flat neck allows the musician to play scales, arpeggios, and certain chord forms more easily and with less adjacent string interference than on other styles of guitar. Flamenco guitars are very similar in construction, but they are associated with a more percussive tone.</p> " +

				"<li><b>Twelve-string guitars</b></li> " +
				"<p>The twelve-string guitar usually has steel strings, and it is widely used in folk music, blues, and rock and roll. Rather than having only six strings, the 12-string guitar has six courses made up of two strings each, like a mandolin or lute. The highest two courses are tuned in unison, while the others are tuned in octaves. The 12-string guitar is also made in electric forms. The chime-like sound of the 12-string electric guitar was the basis of jangle pop.</p> " +

				"<li><b>Electric guitars</b></li> " +
				"<p>Electric guitars can have solid, semi-hollow, or hollow bodies; solid bodies produce little sound without amplification. Electromagnetic pickups convert the vibration of the steel strings into signals, which are fed to an amplifier through a patch cable or radio transmitter. The sound is frequently modified by other electronic devices (effects units) or the natural distortion of valves (vacuum tubes) or the pre-amp in the amplifier. There are two main types of magnetic pickups,  " +
				"single- and double-coil (or humbucker), each of which can be passive or active. The electric guitar is used extensively in jazz, blues and rock and roll. The first successful magnetic pickup for a guitar was invented by George Beauchamp, and incorporated into the 1931 Ro-Pat-In (later Rickenbacker) 'Frying Pan' lap steel; other manufacturers, notably Gibson, soon began to install pickups in archtop models. After World War II the completely solid-body electric " +
				" was popularized by Gibson in collaboration with Les Paul, and independently by Leo Fender of Fender Music. The lower fretboard action (the height of the strings from the fingerboard), lighter (thinner) strings, and its electrical amplification lend the electric guitar to techniques less frequently used on acoustic guitars. These include tapping, extensive use of legato through pull-offs and hammer-ons (also known as slurs), pinch harmonics, volume swells, and use of a tremolo arm or effects pedals. " +
			"</p> " +
			"</ul> " ;

	x.innerHTML = info ;
	
}


function about_video() 
{
	var x = document.getElementById("data") ;
	x.style.height = "500px";
    var info = "<center><iframe width='896' height='504' src='https://www.youtube.com/embed/JNqWtuj_pog' frameborder='2' allowfullscreen></iframe></center> " ;
	x.innerHTML = info ; 
}


function scales_major()
{
	var x = document.getElementById("data") ;
	x.style.height = "500px";
	var info = "<center><img src='../Media/guitar_info_1.jpg' id='jug'></center> "
	x.innerHTML = info ;
}


function scales_blues()
{
	var x = document.getElementById("data") ;
	x.style.height = "500px";
	var info = "<center><img src='../Media/guitar_info_3.jpg' id='jug'></center> "
	x.innerHTML = info ;
}

  	
function chords_major()
{
	var x = document.getElementById("data") ;
	x.style.height = "500px";
	var info = "<center><img src='../Media/guitar_info_2.jpg' id='im'></center> "
	x.style.backgroundStyle = 'cover' ;
	x.innerHTML = info ;
}

  