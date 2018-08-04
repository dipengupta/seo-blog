
function about_history()
{
	var x = document.getElementById("data") ;
	x.style.backgroundImage = 'url(../Media/bg_2.jpg)';
	var info="<p>The bass guitar (also called electric bass,or simply bass) is a " +
				"stringed instrument played primarily with the fingers or thumb, by plucking, slapping, popping, strumming, tapping, thumping, or picking with a plectrum, often known as a pick.The bass guitar is similar in appearance and construction to an electric guitar, but with a longer neck and scale length, and four to six strings or courses. The four-string bass, by far the most common, is usually tuned the same as the double bass, which corresponds to pitches one octave lower than the four lowest pitched strings of a guitar (E, A, D, and G). </p>"
				+ "<p>The bass guitar is a transposing instrument, as it is notated in bass clef an octave higher than it sounds (as is the double bass) to avoid excessive ledger lines. Like the electric guitar, the bass guitar has pickups and it is plugged into an amplifier and speaker on stage, or into a larger PA system using a DI unit, for live performances.</p><br><br>"
				+ "<center><img src='../Media/bass_1.jpg'></center> "
	x.innerHTML = info ;
}


function about_players() 
{
	var x = document.getElementById("data") ;
	x.style.backgroundImage = 'url(../Media/bg_2.jpg)';
	x.style.backgroundAttachment = 'fixed';

	var info = "<ul> " +
			"<li><b>Sitting or standing</b></li> " +
			"<p>Most bass players stand while playing, using a strap over the shoulder to hold the instrument, although sitting is also accepted, particularly in large ensemble settings, such as jazz big bands or in acoustic genres such as folk music. Some bassists, such as Jah Wobble, alternate between standing or seated playing. It is a matter of the player's preference as to which position gives the greatest ease of playing and what a bandleader expects. When sitting, right-handed players can balance the instrument on the right thigh. Balancing the bass on the left thigh usually positions it in such a way that it mimics the standing position, allowing for less difference between the standing and sitting positions.-</p> " +

			"<li><b>Performing techniques</b></li> " +

			"<p>James Jamerson was an influential bassist from the Motown era. " +
			"When the strings are plucked with the fingers (pizzicato), the index and middle fingers (and sometimes the thumb, ring, and little fingers as well) are used. James Jamerson, an influential bassist from the Motown era, played intricate bass lines using only his index finger, which he called The Hook. There are also variations in how a bassist chooses to rest the right-hand thumb (or left thumb in the case of left-handed players). A player may rest his or her thumb on the top edge of one of the pickups or on the side of the fretboard, which is especially common among bassists who have an upright bass influence. Some bassists anchor their thumbs on the lowest string and move it off to play on the low string. Alternatively, the thumb can be rested loosely on the strings to mute the unused strings.</p> " +

			"<li><b>Slap and pop</b></li> " +

			"<p>The side of the thumb is used to slap one of the lower strings, while the fingers are used to pop notes from one of the two higher strings. " +
			"The slap and pop method, or thumbstyle, most associated with funk, uses tones and percussive sounds achieved by striking, thumping, or slapping a string with the thumb and snapping (or popping) a string or strings with the index or middle fingers. Bassists often interpolate left hand-muted dead notes between the slaps and pops to achieve a rapid percussive effect, and after a note is slapped or popped, the fretting hand may cause other notes to sound by using hammer ons, pull offs, or a left-hand glissando (slide). Larry Graham of Sly and the Family Stone and Graham Central Station was an early innovator of the slap style, and Louis Johnson of The Brothers Johnson is also credited as an early slap bass player.</p> " +
			"</ul> "
	x.innerHTML = info ;
}


function about_video() 
{
	var x = document.getElementById("data") ;
    var info = "<center><iframe width='896' height='504' src='https://www.youtube.com/embed/wodVn9paBSo' frameborder='2' allowfullscreen></iframe></center> " ;
	x.innerHTML = info ; 
}


function scales_major()
{
	var x = document.getElementById("data") ;
	var info = "<center><img src='../Media/bass_info_1.jpg'></center> "
	x.innerHTML = info ;
}


function scales_blues()
{
	var x = document.getElementById("data") ;
	var info = "<center><img src='../Media/bass_info_3.jpg'></center> "
	x.innerHTML = info ;
}

  	
function chords_major()
{
	var x = document.getElementById("data") ;
	var info = "<center><img src='../Media/bass_info_2.jpg' id='im'></center> "
	x.style.backgroundStyle = 'cover' ;
	x.innerHTML = info ;
}

  