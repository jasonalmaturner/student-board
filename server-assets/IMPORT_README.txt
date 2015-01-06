In the console/terminal, type (NOT in a mongo instance):

mongoimport --db student-board --collection students --type csv --headerline --file "_PATH_"

Where _PATH_ is the path, from your root folder, to the user_utf.txt file in server-assets, surrounded in quotes.  Ex.
"C:/Users/Jacob Turner/devmountain/student-board/server-assets/user_utf.txt"

THEN do this with the enrollment.csv file:

--db student-board --collection session_ids --type csv --headerline --fields session_id, id --file "_PATH_"
Where _PATH_ is now the location to enrollment.csv

Then run this in a mongo instance (make sure you're using the student-board db.  'use student-board'):

db.students.find().forEach(function(studentDoc){db.session_ids.find({id: studentDoc.id}).forEach(function(sessionDoc){db.students.update({id:studentDoc.id},{$set:{session_id: NumberInt(sessionDoc.session_id)}})})})

Following which you can delete the 'session_ids' collection.