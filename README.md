# Is it Recyclable?
This project uses the Watson Visual Recognition service to identify paper, plastic, metal or glass and clasyfies them as recyclable items. 

# Step 1: Create a Model

Using the Lite Plan of Watson Studio in IBM Cloud and the Visual Recognition Service, I created a Custom Model to Classify Images. Take note of the Credentials (apikey and url of the service)
I uploaded example images for glass, metal, paper and plastic as well as negative examples.
After training the model you'll be able to see the classifier id.

# Step 2: Download the repo

After you downloaded or cloned this repository, you must run 

```
npm install
```

and then head right over the index.js to change some stuff that's between <>: 

```
visualRecognition.classify({
      imagesFile: fs.createReadStream(req.file.path),
      classifierIds: ["<name of the model>"],
      threshold:0.6
    }
```
```
const visualRecognition = new VisualRecognitionV3({
  url: '<url of your model>',
  version: '<version>',
  authenticator: new IamAuthenticator({ apikey: '<api key>' }),
});
```

# Step 3: Test it!
 
Write in the console:

```
node index.js
```

Once the console tells you "Server Ok", open in your browser the http://localhost:8080/
