
# Marksman App

#### By Randall Zimmerman

## Project Summary

My project was originally going to be a compilation of every character in League of Legends, listing their statistics and abilities. Though I soon realized the scope was too large for one particular reason, and limited it to a single class of characters, marksmen.

## Routes

/marksmen (Get): Shows the index, compiling all of the marksmen in easy to access cards

/marksmen/new (Get): Renders new.ejs, a form to add in info for a new entry

/:id (Get): Shows a specific champion, including their abilities and stats

/:id/edit (Get): Renders edit.ejs, showing the character info and allowing it to be changed

/marksman (Post): Adds the new entry

/:id (Delete): Removes the entry currently selected

/:id (Put): Changes the selected entry in accordance to the info edited

## Challenges

For the data, I scoured the internet for a database I could implement into the project for name, title, stats, abilities, etc. And yet, I didn't run across anything, at least not a thing I could work with. (side note, there is an API for the game, even broaching that terrified me.) And so, I resorted to the fanmade wiki, and getting the data from there. Filling in just the marksmen and scrubbing the text of file names and unnecessary numbers was the work of a day, so I knew I couldn't commit all of my time to that.

An additional challenge came with CSS and Bootstrap. It is most certainly a weakpoint of mine, and while I did improve somewhat on the latter during this project, it's still not good. I don't know what it will take me to improve further, but I suppose I'll have to get there eventually. 
