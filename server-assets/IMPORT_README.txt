In the console, type (NOT in a mongo instance):
mongoimport --db student-board --collection students --type csv --headerline --file "_PATH_"
Where _PATH_ is the path, from your root folder, to the user_utf.txt file in server-assets, surrounded in quotes.  Ex.
"C:/Users/Jacob Turner/devmountain/student-board/server-assets/user_utf.txt"