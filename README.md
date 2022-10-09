# Welcome to Maestro!

Please fork this repository and run npm start to take a look (application will be hosted on localhost:8888). Alternatively, you may look at this short walkthrough for a brief overview of the application.

# Homepage

![Screenshot 2022-10-08 171407](https://user-images.githubusercontent.com/95602879/194731880-8d0530fa-820c-4fde-9f9d-9067cfc0a9de.png)

Homepage offers a couple different functionalities. In the bottom left, links to the github repository, my linkedin, and spotify are available. Upon clicking the "Login with Spotify" button, you will be taken to the following page via OAuth. 


![Screenshot 2022-10-08 171815](https://user-images.githubusercontent.com/95602879/194731965-2d782c9a-0ad8-4746-820f-6ccbeaa1b83e.png)

# Genre Selections
Choose your first "vibe"

![Screenshot 2022-10-08 171950](https://user-images.githubusercontent.com/95602879/194732147-76338ebc-4b10-42d8-85d9-fc12fb0c08e0.png)

Choose your second "vibe"

![Screenshot 2022-10-08 172045](https://user-images.githubusercontent.com/95602879/194731995-1a2d5d85-30ff-485e-be16-f3145fa5576b.png)

# In-app Player

These two selections are then fed into the Spotify reccomendations API which return a list of 50 songs of that genre/mood. The player offers similar functionalities to the Spotify player, with the user being able to play and like songs all via requests to Spotify's API. One functionality that is unique to this application is the ability to "remix" the playlist. Meaning that you can click the star icon on the far right side to select songs to be fed back into Spotify's reccomendation endpoint. I developed this functionaility with the hopes of creating an element of replayability in the application. 

![image](https://user-images.githubusercontent.com/95602879/194732024-d391add7-75d3-41d3-af81-13f831f62c53.png)

# That's All!

This application was created during my time in Full Stack Academy bootcamp and was developed in a scrum team of my peers. The current iteration you see here is slightly more tuned to my personal vision of the project. During my time working on this project I personally developed the entire player, the requests to Spotify's API, and the homepage. Thanks for taking the time to check out my project!
