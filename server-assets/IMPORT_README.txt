In the console/terminal, type (NOT in a mongo instance):
mongoimport --db student-board --collection students --type csv --headerline --file "_PATH_"
Where _PATH_ is the path, from your root folder, to the user_utf.txt file in server-assets, surrounded in quotes.  Ex.
"C:/Users/Jacob Turner/devmountain/student-board/server-assets/user_utf.txt"

THEN do this with the enrollment.csv file:

--db student-board --collection session_ids --type csv --headerline --fields session_id, id --file "_PATH_"
Where _PATH_ is now the location to enrollment.csv