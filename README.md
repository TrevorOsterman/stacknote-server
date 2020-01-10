# StackNote

App: https://stacknote.now.sh/

## Summary

StackNote is a standard note-taking app for students beginning to
learn the fundementals of full stack web development

The notes sections are broken down by by Front-End, Back-End, Database, and Misc. for any notes that
do not fall strictly under one category.

This application is an ongoing project by Trevor Osterman, and as
such, will receive the implementation of new features over time

Please feel free to get started taking notes, and happy hacking!

## API

Base API URL: https://sleepy-dawn-40690.herokuapp.com/

StackNote's API uses the base API and a few endpoints to operate.

### /notes

#### Methods:

GET: these requests will return a list of notes in the database sorted by date ascending.

POST: requests will need to include a json-formatted body which includes the required keys and values to create a new note:

-content
-subcategory_id

### notes/note_id

#### Methods:

DELETE: this request, when sent with a particular note's ID, deletes the particular note from the database.

### /subcategories

#### Methods:

GET: these requests will return a list of note subcategories in the database sorted by date ascending.

POST: these requests will create new subcategories in which to place notes when provided with the following json-formatted keys and values:

-subcategory_name
-category_id

### /subcategories/:sub_id

PATCH: requests to this endpoint, when accompanied by a subcategory id in the parameters, will make edits to the name of any subcategory when provided with a new json-formatted value for the "subcategory_name" key.

DELETE: his request, when sent with a particular note's ID, deletes the particular note from the database.

## Technologies:

The StackNote client was created using React, with the server constructed using Node.js and Express. StackNotes's database was created using Postgres.
