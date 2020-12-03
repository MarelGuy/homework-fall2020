/*
    Extra FE - D4 LinkedIn Part 4
    You'll be implementing the frontend of a LinkedIn-like application.
    Today you'll be working on the image upload.
    Every user will be able to post comments / links / photos on the feed.

    Start from yesterday App, if something is still missing, finish previous features before starting this part.

    On both POSTS and EXPERIENCES it should be possible to upload a picture.
    You can do it using the FormData content and the input type="file"
    Part of the challenge is also to understand how to do it googling / searching ;-)


    - POST https://striveschool-api.herokuapp.com/api/profile/{userId}/picture
    Replaces user profile picture.
    Name of the picture in the form-data: profile
    - POST https://striveschool-api.herokuapp.com/api/profile/{userId}/experiences/:expId/picture
    Changes the experience picture (only if userId == current user). 
    Name of the picture in the form-data: experience
    - POST https://striveschool-api.herokuapp.com/api/posts/{postId}
    Adds an image to the post.
    Name of the picture in the form-data: post
*/
